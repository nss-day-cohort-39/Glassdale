const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showAllFacilities") {
        const facilitiesEvent = new CustomEvent("allFacilitiesClicked")
        eventHub.dispatchEvent(facilitiesEvent)
    }
})

export const DisplayFacilitiesButton = () => {
    contentTarget.innerHTML = `<button id="showAllFacilities">List Facilities</button>`
}