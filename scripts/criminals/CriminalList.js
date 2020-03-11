import { useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";

const contentTarget = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
    const criminals = useCriminals()

    for (const singleCriminal of criminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
}