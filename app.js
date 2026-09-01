const box = document.querySelector("#box")

box.addEventListener("click", (event) => {
console.log(event.altKey)
})



// = Ny verdi 
// 2 = 17
// 17 = 17

// == likt
// 2 = 2
// "2" = 2

// === lik type
// 2 === 2
// !"2" === 2
let Xaxis = 0
let Yaxis = 0

let speed = 10

document.addEventListener("keydown", (e) => {
    if (Yaxis < 0) {  
        Yaxis = 0
    } else if (Xaxis < 0) {
        Xaxis = 0 
    } else if (Yaxis > 500) {
        Yaxis= 500
    } else if (Xaxis > 500) {
        Xaxis= 500  
    } else {
        if (e.key == "w"){
            Yaxis -= speed
        } else if (e.key == "a") {
            Xaxis -= speed
        } else if (e.key == "s") {
            Yaxis += speed
        } else if (e.key == "d") {
            Xaxis += speed   
        }
    }
    box.style.left = `${Xaxis}px`
    box.style.top = `${Yaxis}px`
})

const containBox = document.querySelector("#containBox")

containBox.addEventListener("click",(e) => {
    Xaxis = e.offsetX - 50
    Yaxis = e.offsetY - 50
    box.style.left = `${Xaxis}px`
    box.style.top = `${Yaxis}px`
    console.log(e)
})