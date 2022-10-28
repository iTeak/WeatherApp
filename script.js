var key = "1a420f2261150ceaac9bd836c340f2fe"
// var cityName = document.getElementById('search')
var search = document.getElementById('btn')
search.addEventListener('click', getweather)

cityName = ("New York")

function getweather(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
    .then((response) => response.json())
    .then((data)=> console.log(data))
}




// function input(){
//     var textInput = document.querySelector("input")
//     return textInput.value
// }


// function search () {
//     var cityName =input()
//     // console.log(cityName)

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
//     .then(response=>response.json())
//     .then(response => {
//         console.log(response);
//     .then(data =>{
//         var nameeval = data['name']
//         var desrip = data['weather']['0'] [description]
//         var tempature = data['main']['temp']
//         var wndspd = data['wind']['speed']
// //Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
//         city.innerHTML=`Weather of <span>${nameval}<span>`
//         temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
//         description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
//         wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
//     })
//     console.log(tempature)}


//         // // Call render and have render use the specific information from response
//         // render(response);
//         // console.log(render)
// //     })
// // }

// // function render(response) {
// //     // TODO: Change website info based on fetch's second then's response
// //     var name  = data;
// //     var { icon, description } = data.weather
// }