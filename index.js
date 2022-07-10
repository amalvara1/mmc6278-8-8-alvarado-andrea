// Your code here
var URL = 'https://api.openweathermap.org/data/2.5/weather?q=' 
var key = '&units=imperial&appid=b8654bb0c6ea71c3b1056ab5f5581615'
var weatherDiv = document.getElementById('weather')
var form = document.querySelector('form')


form.onsubmit = function(e) {
    e.preventDefault()
    var inputLocation = form.search.value.trim()
    if (!inputLocation) return
    fetch(URL + inputLocation + key)
    .then(function(res) {
        if (res.status !==200) throw new Error('Location not Found')
        return res.json()
    })
    .then(showLocation)
    .catch(function(err){
        weatherDiv.innerHTML = err.message
    })
}

function showLocation(weather) {
    
}