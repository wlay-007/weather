const sityName = document.querySelector('.main__name-value');
const searchButton = document.querySelector('.header__search-button')
const sityValue = document.querySelector('.header__input-sity-value')
const tempBox = document.querySelector('.main__temp-value');
const weatherBox = document.querySelector('.main__weather-value');
const circle = document.querySelector('.main__circle')
let textInput = '';
let lat = null;
let lon = null;

searchButton.addEventListener('click', function(){
    textInput = sityValue.value;
    console.log(textInput);
    getSity(textInput);
})
async function getSity(data){
    try{
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=1&appid=24f517c2ec2ed505707ede99a09af491`;
        const response = await fetch(url);
        // console.log(response);
        const sity = await response.json();
        console.log(sity);
        lat = sity[0].lat;
        lon = sity[0].lon;
        console.log(lat, lon);
        getData(lat, lon);

    }
    catch{
        alert('There is no such city');
    }

}
async function getData(lat, lon){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=24f517c2ec2ed505707ede99a09af491`;
    const response = await fetch(url);
    const data = await response.json();
    outData(data)
}
function outData(data){
    const temp = Math.round((data.main.feels_like)-273.15);
    // const temp = 15;
    const weather = data.weather[0].description;
    tempBox.innerText = `${temp} °C`;
    weatherBox.innerText = weather
    sityName.innerText = data.name;
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
// getData();