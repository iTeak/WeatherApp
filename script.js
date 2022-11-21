var key = "1a420f2261150ceaac9bd836c340f2fe"
var searchbar = document.getElementById("search-bar")
var button = document.getElementById('btn')
var inputvalue = document.getElementById("search-bar")


console.log(inputvalue.value)

button.addEventListener("click", function getweather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=${key}`)     
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            
        })})













