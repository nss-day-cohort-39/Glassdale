import { useFacilities, getFacilities } from "./FacilityProvider.js"
import { Facility } from "./Facility.js"
import { getCriminals, useCriminals, useCriminalFacilities } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".facilityContainer")
const eventHub = document.querySelector(".container")
let youCanSeeMe = false

eventHub.addEventListener("allFacilitiesClicked", customEvent => {
    youCanSeeMe = !youCanSeeMe

    if (youCanSeeMe) {
        contentTarget.classList.remove("invisible")
        render()
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

const render = () => {
    getFacilities()
        .then(getCriminals)
        .then(
        () => {
            const allFacilities = useFacilities()
            const allCriminals = useCriminals()
            const criminalFacilityRelationships = useCriminalFacilities()

            contentTarget.innerHTML = allFacilities.map(
                (currentFacility) => {

                    const thisCriminalsFacilities = criminalFacilityRelationships.filter(cf => cf.facilityId === currentFacility.id)

                    const matchingCriminals = thisCriminalsFacilities.map(cf => {
                        const foundCriminal = allCriminals.find(criminal => criminal.id === cf.criminalId)
                        return foundCriminal
                    })

                    const facilityHTML = Facility(currentFacility, matchingCriminals)
                    return facilityHTML
                }
            ).join("")
        }
    )
}

