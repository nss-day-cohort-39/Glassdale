let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    return fetch("http://localhost:8088/officers")
        .then(response => response.json())
        .then(
            (parsedOfficers) => {
                console.table(parsedOfficers)
                officers = parsedOfficers
            }
        )
}






