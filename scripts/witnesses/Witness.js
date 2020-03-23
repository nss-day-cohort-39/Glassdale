export const Witness = witness => {
    return `
        <section class="statement">
            <header>
                <h3>${witness.name}</h3>
            </header>

            <p>${witness.statements}</p>
        </section>
    `
}