const box = document.querySelector("#box")

box.addEventListener("click", (event) => {
console.log(event.altKey)
})

let Xaxis = 0
let Yaxis = 0

let speed = 10


document.addEventListener("keydown", (e) => {
    if (e.key == "w"){
        Yaxis -= speed
    } else if (e.key == "a") {
        Xaxis += speed
    } else if (e.key == "s") {
        Yaxis += speed
    } else if (e.key == "d") {
        Xaxis -= speed   
    }
    box.style.right = `${Xaxis}px`
    box.style.top = `${Yaxis}px`
})