const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets") 

const putPlanetOnDom = (planetArray) => {
    planetEl.innerHTML = ""
    planets.forEach(planetArray => {
        planetEl.innerHTML += `
        <p>${planetArray}<p>
        `
    });
}
putPlanetOnDom(planets)

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const planetE2 = document.getElementById("capitalizedPlanets")

const capitalize = (planetArray) => {
    planetE2.innerHTML =""
    planets.map(planetArray[0].toUpperCase() + planetArray.substring(0, 1))
    planets.map(
    planetE2.innerHTML +=  `
    <p>${planets}<p>
    `

    )}   

    
capitalize(planets)  


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
