const contentTarget = document.querySelector(".witness__button")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showStatements") {
        // Create a custom event to tell any interested component that the user wants to see notes
        const customEvent = new CustomEvent("witnessButtonClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const WitnessStatementButton = () => {
    contentTarget.innerHTML = "<button id='showStatements'>Witness Statements</button>"
}