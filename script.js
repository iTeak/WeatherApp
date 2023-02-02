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
            

            BottomGridElm.innerHTML = ``;
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
                    <h3>Humidity ${data.list[i].main.humidity} % </h3>
                </div>
                <div class="wind">
                    <h3> Wind ${data.list[i].wind.speed}MPH</h3>
                </div>
               
            </div> `
            console.log(BottomGridElm.innerHTML)
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
                var array = []
                if(localStorage.getItem("weathercities")) {
                    array = JSON.parse(localStorage.getItem("weathercities"));
                }

                array.push(inputvalue.value)
                localStorage.setItem("weathercities", JSON.stringify(array))
            })
            document.querySelector(".city").innerText = name;
            console.log(data)
        })
})

//create list of local store cities
//each list item is "clickable" and will copy the text in a search area 








