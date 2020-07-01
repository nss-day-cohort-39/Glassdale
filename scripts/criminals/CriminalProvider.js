let criminals = []
let criminalFacilities = []

export const useCriminalFacilities = () => {
    return criminalFacilities.slice()
}

export const useCriminals = () => {
    // Sort by criminal last name before the copy happens
    criminals.sort(
        (currentThing, nextThing) => {
            // Get the last name on both objects
            const [currFirstName, currLastName] = currentThing.name.split(" ")
            const [nextFirstName, nextLastName] = nextThing.name.split(" ")

            if (currLastName < nextLastName) { return -1; }
            if (currLastName > nextLastName) { return 1; }
            return 0;
        }
    )

    return criminals.slice()
}

export const getCriminals = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `Criminals`
        variable to what is in the response from the API.
    */
    return fetch("http://localhost:8088/criminals")
        .then(response => response.json())
        .then(parsedCriminals => {
            criminals = parsedCriminals
        })
}

export const getCriminalFacilities = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `Criminals`
        variable to what is in the response from the API.
    */
    return fetch("http://localhost:8088/criminalFacilities")
        .then(response => response.json())
        .then(apiData => {
            criminalFacilities = apiData
        })
}