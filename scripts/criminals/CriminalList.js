import { useCriminals, getCriminals, useCriminalFacilities, getCriminalFacilities } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";
import { useFacilities, getFacilities } from "../facilities/FacilityProvider.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")
let youCanSeeMe = true

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
        // Get the id of the criminal that was clicked
        const [junk, criminalId] = clickEvent.target.id.split("--")

        // Yell at the system that a known associates button was clicked
        const showAssociatesEvent = new CustomEvent("knownAssociatesClicked", {
            // Make sure to tell the system exactly which criminal button was clicked
            detail: {
                chosenCriminal: criminalId
            }
        })

        eventHub.dispatchEvent(showAssociatesEvent)
    }
})

eventHub.addEventListener("witnessButtonClicked", customEvent => {
    youCanSeeMe = !youCanSeeMe

    youCanSeeMe
        ? contentTarget.classList.remove("invisible")
        : contentTarget.classList.add("invisible")
})

eventHub.addEventListener("allFacilitiesClicked", customEvent => {
    youCanSeeMe = !youCanSeeMe

    youCanSeeMe
        ? contentTarget.classList.remove("invisible")
        : contentTarget.classList.add("invisible")
})


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

const render = (criminalsToRender, allFacilities, allRelationships) => {
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })
            // debugger
            return Criminal(criminalObject, facilities)
        }
    ).join("")
}

export const CriminalList = () => {
    getFacilities()
        .then(() => getCriminalFacilities())
        .then(() => {
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

            render(criminals, facilities, crimFac)
        })
}