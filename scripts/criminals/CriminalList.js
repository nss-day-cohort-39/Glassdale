import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", event => {
    // What crime was chosen?
    const theCrimeThatWasChosen = event.detail.chosenCrime

    // Get the criminals
    let criminalsToDisplay = useCriminals()

    if (theCrimeThatWasChosen !== "0") {
        // Filter the list of criminal who committed the crime
        criminalsToDisplay = criminalsToDisplay.filter(criminal => {
            if (criminal.conviction === theCrimeThatWasChosen) {
                return true
            }
            return false
        })
    }
    render(criminalsToDisplay)
})

const render = criminalsToRender => {
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            return Criminal(criminalObject)
        }
    ).join("")
}

export const CriminalList = () => {
    const criminals = useCriminals()
    render(criminals)
}