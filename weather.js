/**
 *

         <script>
     function fetchWeather(data){
       let text = '';
       let len = data.length;
       for(let i = 0; i < len; i++){
         cities = data[i];
         text += '<p><img src= "'
       }
       document.getElementById('cities').innerHTML = text;
     }

  </script>
 */
// let weather = {
//   fetchWeather: function(){
//     fetch("https://restofworld.org/wp-content/projects/code/exercise/data/weather.js").then((res) => res.json())
//     .then((data) => console.log(data))
//   }
// }

function weatherJsonpCallback(data){
  const name = data.cities[9].geoloc.city
  const { temp, condition } = data.cities[9].current[0]
  const { weekly } = data.cities[9]
 console.log(weekly)
document.querySelector(".city").innerText = `Weather in ${name}`
//document.querySelector(".city").innerText = "Weather in" + name;
document.querySelector(".temp").innerText = `${temp}°F`
document.querySelector(".condition").innerText = `${condition}`

//loop through each day and add to DOM
 for(let i = 1; i <= 7; i++){
   let day = weekly[i];
 // Create a new element to hold each day's data in the DOM:
   const dayContainer = document.createElement('div')
   //set day
   const dayName = day.day
   const nameElem = document.createElement('div')
   nameElem.innerText = dayName
   dayContainer.appendChild(nameElem)
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
   document.body.appendChild(dayContainer)
 }


};

var script = document.createElement('script')
script.type = "text/javascript"
script.src = "https://restofworld.org/wp-content/projects/code/exercise/data/weather.js"

document.getElementsByTagName('head')[0].appendChild(script);
// or document.head.appendChild(script) in modern browsers


