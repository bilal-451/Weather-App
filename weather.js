const key="e8f89a71115a0970298d4ecee2afc540"
const search= document.getElementById("input")
const form=document.querySelector("form")
const weather = document.getElementById("row")

form.addEventListener("submit",function(event){
    getweather(search.value);
    event.preventDefault();


})
const getweather=async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    const response= await fetch(url);
    const data=await response.json();
    return showweather(data);

}
const showweather=(data)=>{
    if(data.cod=="404"){
        weather.innerHTML=`<h1>City Not found</h1>`;
        return;
    }
    weather.innerHTML=
               `<div class="image">
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""/>
                </div>
                <div class="temp">
                    <h1>${data.main.temp} °C</h1>
                    <h2 class="cloud">${data.weather[0].main}</h2>
                </div>`
}