// This is just a blueprint for some logic we want to execute at some point IN THE FUTURE!!!!!
export const Note = (noteObject, criminal) => {
    return `
        <section class="note">
            <header>
                <h2>${criminal.name}</h2>
            </header>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
        </section>
    `
}