import { saveNote } from "./NotesProvider.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

/*
    Component state variables
*/
let visible = false

const setVisible = (newViz) => {
    visible = newViz
    render()
}


/*
    Event handlers
*/
eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    setVisible(!visible)
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteText = document.querySelector("#noteText").value
        const criminalId = document.querySelector("#criminalDropdown").value

        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            criminal: parseInt(criminalId),
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    const allCriminals = useCriminals()

    contentTarget.innerHTML = !visible ? "" : `
        <fieldset>
            <label class="label label--notes label--wide" for="noteText">Note:</label>
            <textarea class=".input--text" id="noteText"></textarea>
        </fieldset>
        <fieldset>
            <label class="label label--notes label--wide" for="criminal">Criminal:</label>
            <select id="criminalDropdown" class=".input--text">
                <option value="0">Please choose a criminal...</option>
                ${
                    allCriminals.map(
                        (currentCriminalObject) => {
                            return `<option value="${currentCriminalObject.id}">${currentCriminalObject.name}</option>`
                        }
                    )
                }
            </select>
        </fieldset>

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}
