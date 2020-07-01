export const Facility = (facilityObject, criminals) => {
    return `
        <section class="facility">
            <header>
                <h3>${facilityObject.facilityName}</h3>
            </header>

            <p>Security: ${facilityObject.securityLevel}</p>
            <p>Capacity: ${facilityObject.capacity}</p>

            <h4>Criminals</h4>
            <ul>
                ${criminals.map(c => `<li>${c.name}</li>`).join("")}
            </ul>
        </section>
    `
}