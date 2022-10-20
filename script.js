var key = "1a420f2261150ceaac9bd836c340f2fe"
document.getElementById('search').addEventListener('click', search)
function input(){
    var textInput = document.getElementById('input');
    return textInput.value
}


function search () {
    var cityName =input()
    console.log(cityName)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
    .then(response=>response.json())
    // .then(response => {
    //     console.log(response);
    .then(data =>{
        var nameeval = data['name']
        var desrip = data['weather']['0'] [description]
        var tempature = data['main']['temp']
        var wndspd = data['wind']['speed']

    console.log(tempature)
        // // Call render and have render use the specific information from response
        // render(response);
        // console.log(render)
//     })
// }

// function render(response) {
//     // TODO: Change website info based on fetch's second then's response
//     var name  = data;
//     var { icon, description } = data.weather
}