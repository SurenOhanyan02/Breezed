let btn = document.querySelector(".btn")
let menu = document.querySelector(".menu")
let parentBurger = document.querySelector(".parent-burger")
let burger = document.querySelector(".burger")
parentBurger.addEventListener("click", function () {
   
    burger
        .classList
        .toggle("open")
    menu
        .classList
        .toggle("open-menu")
})



let btn1 = document.querySelector(".btn1")
let menu1 = document.querySelector(".menu1")
let parentBurger1 = document.querySelector(".parent-burger1")
let burger1 = document.querySelector(".fa-search")
parentBurger1.addEventListener("click", function () {
   
    burger1
        .classList
        .toggle("open1")
    menu1
        .classList
        .toggle("open-menu1")
})