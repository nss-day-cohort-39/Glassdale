import { useOfficers, getOfficers } from "./OfficerProvider.js";
import { Officer } from "./Officer.js";

const contentTarget = document.querySelector(".filters__officer")

export const OfficerList = () => {

    getOfficers().then(() => {
        // Get the data from the provider
        const officerObjectsArray = useOfficers()

        // Iterate the array
        for (const officerObject of officerObjectsArray) {
            // Convert each object to HTML representation
            const officerHTMLRepresentation = Officer(officerObject)

            // Put HTML in DOM
            contentTarget.innerHTML += officerHTMLRepresentation

        }
    })

}