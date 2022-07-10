// Your code here
var URL = 'https://api.openweathermap.org/data/2.5/weather?q='
var weatherDiv = document.getElementById('weather')
var form = document.querySelector('form')


form.onsubmit = function(e) {
    e.preventDefault()
    var searchLoc = this.search.value
    if (!searchLoc) return
    fetch(URL + searchLoc)
    .then(function(res){
        if(res.status !==200) throw new Error('Location not Found')
        return res.json()
    })
    .then(showLocation)
    .catch(function(err){
        weatherDiv.innerHTML = err.message
    })
}

function showLocation(weather) {
    this.search.value = ""
    weatherDiv.innerHTML = ""

}