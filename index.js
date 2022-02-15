//get refreence to painting secion
let painting = document.querySelector(".painting")

//hold what color is selected
let selectedColor = "red"

//listen for click events on painting section
painting.addEventListener("click", function(event) {
    console.log("Painting was clicked", event.target)
    event.target.style.backgroundColor = selectedColor
})

//when pallete color clicked change brush color

//get refrence to the blue pallete color
let bluePallete = document.querySelector("#blue")
bluePallete.addEventListener("click", function () {
    console.log("Blue clicked")
    selectedColor = "blue"
})

//get refrence to the red pallete color
let redPallete = document.querySelector("#red")
redPallete.addEventListener("click", function () {
    console.log("red clicked")
    selectedColor = "red"
})

//get refrence to the yellow pallete color
let yellowPallete = document.querySelector("#yellow")
yellowPallete.addEventListener("click", function () {
    console.log("yellow clicked")
    selectedColor = "yellow"
})

//get refrence to the red pallete color
let greenPallete = document.querySelector("#green")
greenPallete.addEventListener("click", function () {
    console.log("green clicked")
    selectedColor = "green"
})