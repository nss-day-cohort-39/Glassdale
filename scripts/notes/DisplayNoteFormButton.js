const contentTarget = document.querySelector(".noteForm__button")
const eventHub = document.querySelector(".container")

/*
    State variables
*/
let buttonText = "Show Note Form"

const setButtonText = (newText) => {
    buttonText = newText
    DisplayNoteFormButton()
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNoteForm") {
        // Create a custom event to tell any interested component that the user wants to see notes
        const customEvent = new CustomEvent("noteFormButtonClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(customEvent)

        // Change component state
        if (buttonText === "Show Note Form") {
            setButtonText("Hide Note Form")
        } else {
            setButtonText("Show Note Form")
        }
    }
})

export const DisplayNoteFormButton = () => {
    contentTarget.innerHTML = `<button id='showNoteForm'>${buttonText}</button>`
}