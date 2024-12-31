let inputField = document.querySelector("#input")
let button = document.querySelector("#button")


function convert(){
    let input = inputField.value.trim();
    let converted = parseFloat(input)

    if(isNaN(converted)) {
        alert('Please use a number')
        return
    }

let value = converted
let meters = converted / 3.28084
let feet = 3.28084 * converted 
let gallons = 0.2642 * converted
let litres = converted * gallons
let lbs = 2.204 * converted
let kg = converted / 2.204
let num = inputField.value.trim()

document.querySelector("#length").textContent = `${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${meters.toFixed(3)} meters`

document.querySelector("#volume").textContent = `${value} litres = ${gallons.toFixed(3)} gallons | ${value} gallons = ${litres.toFixed(3)} litres`

document.querySelector("#mass").textContent = `${value} kg = ${lbs.toFixed(3)} lbs | ${value} lbs = ${kg.toFixed(3)} kg`

}


