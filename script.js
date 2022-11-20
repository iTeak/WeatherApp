let searchbutton = document.getElementById('')
let inputvalue = document.getElementById('se')
let temp = document.querySelector(".temp")
let description = document.querySelector(".desc")
let searchbar = document.getElementById('se')
let key = "1a420f2261150ceaac9bd836c340f2fe"

searchbutton.addEventListener("click")


function getweather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=${key}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })}










