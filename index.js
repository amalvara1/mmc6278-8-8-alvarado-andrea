// Your code here
var URL = "https://api.openweathermap.org/data/2.5/weather?q="
var key = "&units=imperial&appid=b8654bb0c6ea71c3b1056ab5f5581615"
var weatherDiv = document.getElementById('weather')
var form = document.querySelector('form')
var cityInput = document.getElementById('weather-search')


form.onsubmit = function(e) {
    e.preventDefault()
    var inputLocation = cityInput.value
    if (!inputLocation) return
    fetch(URL + inputLocation + key)
    .then(function(res) {
        if (res.status !==200) throw new Error('Location not Found')
        return res.json()
    })
    .then(displayWeather) 
    .catch(function(err){
        weatherDiv.innerHTML = err.message
        cityInput.value = ""
    })   
    }


function displayWeather(weather) {
    weatherDiv.innerHTML = ""
    
   //should display city
    var city = document.createElement('h2')
    city.textContent = weather.name + "," + weather.sys.country
    weatherDiv.appendChild(city)

    //should display working map link
    var mapLink = document.createElement('a')
    mapLink.textContent = 'Click to view map'
    var lat = weather.coord.lat
    var lon = weather.coord.lon
    mapLink.href = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lon
    weatherDiv.appendChild(mapLink)

    //should display condition icon



    //should display condition
}

