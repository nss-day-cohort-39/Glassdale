const contentTarget = document.querySelector(".notes__button")
const eventHub = document.querySelector(".container")

/*
    State variables
*/
let buttonText = "Hide Notes List"

const setButtonText = (newText) => {
    buttonText = newText
    DisplayNotesButton()
}


/*
    Event listeners
*/
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showAllNotes") {

        // Change component state
        if (buttonText === "Show Notes List") {
            setButtonText("Hide Notes List")
        } else {
            setButtonText("Show Notes List")
        }

        // Create a custom event to tell any interested component that the user wants to see notes
        const allNotesEvent = new CustomEvent("allNotesClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(allNotesEvent)

    }
})


/*
    Component function
*/
export const DisplayNotesButton = () => {
    contentTarget.innerHTML = `<button id='showAllNotes'>${buttonText}</button>`
}