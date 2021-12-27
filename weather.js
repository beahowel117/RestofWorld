
function weatherJsonpCallback(data){
  const name = data.cities[9].geoloc.city
  const { temp, condition } = data.cities[9].current[0]
  const { weekly } = data.cities[9]

document.querySelector(".city").innerText = `Weather in ${name}`
//document.querySelector(".city").innerText = "Weather in" + name;
document.querySelector(".temp").innerText = `${temp}°F`
document.querySelector(".condition").innerText = `${condition}`

//loop through each day and add to DOM
 for(let i = 1; i <= 7; i++){
   let day = weekly[i];
 // Create a new element to hold each day's data in the DOM:
   const dayContainer = document.getElementById("dailyForecast_contents")
   //set day
   const dayName = day.day
   const nameElem = document.createElement('div')
   nameElem.innerText = dayName
   dayContainer.appendChild(nameElem)
   nameElem.classList.add("forecastDay")
   let text = document.createTextNode("")
   nameElem.appendChild(text)
   //set temp
   const dayHigh = day.high
   const highElem = document.createElement('div')
   highElem.innerText = `${dayHigh}°F`
   dayContainer.appendChild(highElem)
   //set description
   const dayDesc = day.daycondition
   const descElem = document.createElement('div')
   descElem.innerText = `${dayDesc}`
   dayContainer.appendChild(descElem)
   //add to DOM
  // document.body.appendChild(dayContainer)
  dayContainer.appendChild(nameElem)
 }

 //had a difficult time with the JSONP it was taking too much time to understand fully...i get all cities in console when click drop down, just not sure why they aren't displaying...I can't get functions inside the main function to work and not able to get the data outside the callback function 
 let cities = data.cities
 for(let i = 0; i < cities.length; i++){
   let city = cities[i]
   document.getElementById('generate').onclick = function() {
    var values = cities;

    var select = document.createElement("select");
    select.name = "cities";
    select.id = "cities"

    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.geoloc.city
        select.appendChild(option);
    }

    var label = document.createElement("label");
    label.innerHTML = "Choose your city: "
    label.htmlFor = "cities";

    document.getElementById("container").appendChild(label).appendChild(select);
    }
    let time =  cities[i].hourly[i]
    let mode = document.getElementById("app");
    console.log(time)
    for(let t of time){
        if(t.ampm === 'pm'){
          mode.classList.add("darkmode").remove("lightmode");
        }else{
          mode.classList.remove("darkmode").add("lightmode");
        }
    }
 }

};



var script = document.createElement('script')
script.type = "text/javascript"
script.src = "https://restofworld.org/wp-content/projects/code/exercise/data/weather.js"

document.getElementsByTagName('head')[0].appendChild(script);
// or document.head.appendChild(script) in modern browsers




//axios.get("https://restofworld.org/wp-content/projects/code/exercise/data/weather.js").then()
