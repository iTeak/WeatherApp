var key = "1a420f2261150ceaac9bd836c340f2fe"
var searchbar = document.getElementById("search-bar")
var button = document.getElementById('btn')
var inputvalue = document.getElementById("search-bar")


console.log(inputvalue.value)

button.addEventListener("click", function getweather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=${key}&units=imperial`)     
        .then((response) => response.json())
        // .then(data => console.log(data))
        .then((data) => {const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const{ lat , long } = data.coord;

        document.querySelector(".city").innerText =  name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humid").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
        console.log(data)
        
        })
    })












