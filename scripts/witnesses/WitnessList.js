import { getWitnesses, useWitnesses } from "./WitnessProvider.js"
import { Witness } from "./Witness.js"

const contentTarget = document.querySelector(".statementContainer")
const eventHub = document.querySelector(".container")
let youCanSeeMe = false

eventHub.addEventListener("witnessButtonClicked", customEvent => {
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
    getWitnesses().then(
        () => {
            const allTheWitnesses = useWitnesses()

            contentTarget.innerHTML = allTheWitnesses.map(
                (currentWitnessStatementObject) => {
                    const statementHTML = Witness(currentWitnessStatementObject)
                    return statementHTML
                }
            ).join("")
        }
    )
}

