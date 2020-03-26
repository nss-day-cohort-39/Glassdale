import { Note } from "./Note.js"
import { getNotes, useNotes, deleteNote } from "./NotesProvider.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

/*
    Component state variables
*/
let sortOrder = "asc"
const setSortOrder = order => {
    sortOrder = order
    setNoteData()
    render()
}

let visible = true
const setVisible = (newViz) => {
    visible = newViz
    render()
}

let noteData = []
const setNoteData = () => {
    const notes = useNotes()
    if (sortOrder === "desc") {
        notes.sort((c,n) => n.timestamp - c.timestamp)
    }
    else {
        notes.sort((c,n) => c.timestamp - n.timestamp)
    }

    noteData = notes
    render()
}


/*
    Event handlers
*/
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [_, noteId] = clickEvent.target.id.split("--")
        deleteNote(noteId)
    }
})

contentTarget.addEventListener("change", e => {
    if (e.target.name === "sortorder") {
        const order = e.target.value
        setSortOrder(order)
    }
})


eventHub.addEventListener("noteStateChanged", customEvent => {
    setNoteData()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    setVisible(!visible)
})


const render = () => {
    const allTheCriminals = useCriminals()

    contentTarget.innerHTML = !visible ? "" : `
            <label for="ascdending" ${sortOrder === "asc" ? "style='color:red'" : "style=''"}>⬆</label>
            <input class="radio--verticalCenter" type="radio" value="asc" name="sortorder" ${sortOrder === "asc" ? "checked" : ""}>
            <input class="radio--verticalCenter" type="radio" value="desc" name="sortorder" ${sortOrder === "desc" ? "checked" : ""}>
            <label for="descdending" ${sortOrder === "desc" ? "style='color:red'" : "style=''"}>⬇</label>
        ${
            noteData.map(
                currentNoteObject => {

                    // Find the criminal for the current note
                    const theFoundCriminal = allTheCriminals.find(
                        (currentCriminalObject) => {
                            return currentNoteObject.criminal === currentCriminalObject.id
                        }
                    )

                    return Note(currentNoteObject, theFoundCriminal)
                }
            ).join("")
        }
`
}

export const NotesList = () => {
    getNotes().then(() => {
        setNoteData()
        render()
    })
}
