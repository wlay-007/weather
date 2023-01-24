const tempBox = document.querySelector('.main__temp-value');
const weatherBox = document.querySelector('.main__weather-value');
const circle = document.querySelector('.main__circle')

async function getData(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.06&lon=39.25&appid=24f517c2ec2ed505707ede99a09af491';
    const response = await fetch(url);
    const data = await response.json();
    outData(data)
}
function outData(data){
    const temp = Math.round((data.main.feels_like)-273.15);
    const weather = data.weather[0].description;
    tempBox.innerText = `${temp} °C`;
    weatherBox.innerText = weather
    tempColor(temp);
}
function tempColor(temp){
    if(temp <= 0){
        circle.style.backgroundColor = 'blue';
    }
    else if (temp <= 20){
        circle.style.backgroundColor = 'green';
    }
    else if(temp > 20){
        circle.style.backgroundColor = 'red';
    }
}
getData();