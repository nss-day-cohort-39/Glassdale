let facilities = []

export const useFacilities = () => facilities.slice()

export const getFacilities = () => {
   return fetch("http://localhost:8088/facilities")
    .then(response => response.json())
    .then(apiData => {
        facilities = apiData
    })
}