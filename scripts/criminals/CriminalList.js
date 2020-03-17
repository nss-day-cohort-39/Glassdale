import { useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", event => {
    const theCrimeThatWasChosen = event.detail.chosenCrime
    let criminalsToDisplay = useCriminals()

    if (theCrimeThatWasChosen === "0") {
        // Get the criminals

        // Clear inner HTML of the criminal list
        contentTarget.innerHTML = ""

        // Build it up again
        for (const singleCriminal of criminalsToDisplay) {
            contentTarget.innerHTML += Criminal(singleCriminal)
        }
    }
    else {
        // Filter the list of criminal who committed the crime
        criminalsToDisplay = criminalsToDisplay.filter(criminal => {
            if (criminal.conviction === theCrimeThatWasChosen) {
                return true
            }
            return false
        })
    }

    // Clear inner HTML of the criminal list
    contentTarget.innerHTML = ""

    // Build it up again
    for (const singleCriminal of criminalsToDisplay) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
})

export const CriminalList = () => {
    const criminals = useCriminals()

    for (const singleCriminal of criminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
}