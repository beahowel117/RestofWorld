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

function weatherJsonpCallback(data)
{
  const name = data.cities[9].citykey
  const { temp, condition } = data.cities[9].current[0]
  //const { condition } = data.cities[9].current[1]
 //console.log(data.cities[9].current[0].temp)
console.log(condition)
console.log(data.cities[9].current[0])
document.querySelector(".city").innerText = `Weather in ${name}`
//document.querySelector(".city").innerText = "Weather in" + name;
}

var script = document.createElement('script');
script.src = "https://restofworld.org/wp-content/projects/code/exercise/data/weather.js"

document.getElementsByTagName('head')[0].appendChild(script);
// or document.head.appendChild(script) in modern browsers
