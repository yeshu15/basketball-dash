let count1 = document.getElementById("count-1")
let count2 = document.getElementById("count-2")

let plusOneHome = document.getElementById("plus-one-home")
let plusTwoHome = document.getElementById("plus-two-home")
let plusThreeHome = document.getElementById("plus-three-home")
let resetHome = document.getElementById("reset-home")

let plusOneGuest = document.getElementById("plus-one-guest")
let plusTwoGuest = document.getElementById("plus-two-guest")
let plusThreeGuest = document.getElementById("plus-three-guest")
let resetGuest = document.getElementById("reset-guest")

function addOneHome(){
    count1.textContent++
}
function addOneGuest(){
    count2.textContent++
}
function addTwoHome(){
    count1.textContent = Number(count1.textContent) + 2
}
function addTwoGuest(){
    count2.textContent = Number(count2.textContent) + 2
}

function addThreeHome(){
    count1.textContent = Number(count1.textContent) + 3
}
function addThreeGuest(){
    count2.textContent = Number(count2.textContent) + 3
}
function resetCountHome(){
    count1.textContent = 0
}
function resetCountGuest(){
    count2.textContent = 0
}