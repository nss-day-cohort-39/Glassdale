export const Criminal = (criminalObject) => {
    return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between: ${criminalObject.incarceration.start} and ${criminalObject.incarceration.end}</p>
            <p>Known Associates:</p>
            <ul class="details__associates">
                ${
                    criminalObject.known_associates.map(singleAssociate => {
                        return `<li>${singleAssociate.name} was ${singleAssociate.alibi}</li>`
                    }).join("")
                }
            </ul>
            <p>Age: ${criminalObject.age}</p>
        </div>
    </div>
    `
}