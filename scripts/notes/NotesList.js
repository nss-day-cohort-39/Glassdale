import { getNotes, useNotes } from "./NotesProvider.js"
import { Note } from "./Note.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

/*
    State variables
*/
let visibility = false

/*
    Event handlers
*/
eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

const render = () => {
    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }

    getNotes().then(() => {
        const allTheNotes = useNotes()
        const allTheCriminals = useCriminals()

        contentTarget.innerHTML = allTheNotes.map(
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
    })
}

export const NotesList = () => {
    render()
}
