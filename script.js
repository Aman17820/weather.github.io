let loc=document.getElementById("location");
let tempIcon=document.getElementById("temp-icon");
let tempValue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let windspeed=document.getElementById("wind-speed");
let humidity=document.getElementById("humidity");

window.addEventListener("load",()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy="https://cors-anywhere.herokuapp.com/";
            const api=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=800d96356ffd842bd596d9b9d10d1558`;
            fetch(api)
                .then(response=>{
                    return response.json();
                })
                .then(data=>{
                    const {name}=data;
                    const {feels_like,humidity}=data.main;
                    const {id,main}=data.weather[0];
                    const {speed}=data.wind;
                    loc.textContent=name;
                    climate.textContent=main;
                    tempValue.textContent=Math.round(feels_like-275);
                    windspeed.textContent=speed;
                    humidity.textContent=humidity;
                    console.log(data);
                })
        })
    }
})
