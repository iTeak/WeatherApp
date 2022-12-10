const key = "1a420f2261150ceaac9bd836c340f2fe"
const searchbar = document.getElementById("search-bar")
let button = document.getElementById('btn')
let inputvalue = document.getElementById("search-bar")
// let divElm = document.createElement('div')
// divElm.classList.add("card")
let BottomGridElm = document.querySelector('.bottomcontainer-grid')
// BottomGridElm.appendChild(divElm)
// let dayElm = document.createElement('h1')
let current = document.querySelector('#currentinfo')
let five = document.getElementsByClassName("hide")


console.log(inputvalue.value)

button.addEventListener("click", function () {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputvalue.value}&appid=${key}&units=imperial`)
        .then((response) => response.json())
        // .then(data => console.log(data))
        .then((data) => {
            const name = data.city.name;
            
            for (var i = 3; i < data.list.length; i= i + 8) {
                BottomGridElm.innerHTML += ` <div class= "card">
                <h1 id="day">${dayjs(data.list[i].dt_txt).format('MM/DD/YYYY')}</h1>
                <div class="temp">
                    <h3 class="temp"> <span class=""></span>${data.list[i].main.temp}°F</h3>
                </div>
                <div class="flex">
                    <img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="" class="icon" />
                    <div class="description">Cloudy</div>
                </div>
                <div class="humid">
                    <h3>${data.list[i].main.humidity} % </h3>
                </div>
                <div class="wind">
                    <h3>${data.list[i].wind.speed}MPH</h3>
                </div>
               
            </div> `
            console.log(BottomGridElm.innerHTML)
            
                    // let description = data.weather[i].description;
                    // const icon = data.weather[0].id;
                    // const { temp, humidity } = data.main;
                    // const { speed } = data.wind;
                    // const lon = data.coord.lon;
                    // const lat = data.coord.lat;

                  



            }
            var url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=imperial`

            fetch(url).then(function(response){
                return response.json()
            })
            .then(function(currentdata){
                console.log(currentdata)
                current.innerHTML=` 
                 <div id="currentinfo"class= "card">
                <h1>${currentdata.main.temp}°F</h1>
                <h1>${currentdata.wind.speed} MPH </h1>
                <h1>${currentdata.main.humidity} % </h1>
                </div>
                `
            })


            document.querySelector(".city").innerText = name;
            // document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
            // document.querySelector(".description").innerText = description;
            // document.querySelector(".temp").innerText = temp + "°F";
            // document.querySelector(".humid").innerText = "Humidity: " + humidity + "%";
            // document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
            // console.log(data.coord)
            console.log(data)
        })
})










