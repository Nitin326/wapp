

window.onload = function(){

    const weatherApi = {
        key: '3169c1fdf2d07a3f4d752d824edc5de1',
        baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
    }

const searchInputBox = document.getElementById('input-box');

//event listener function on keypress
searchInputBox.addEventListener('keypress', (event) =>{

    if(event.keyCode == 13){
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    }

});

//Get weather report
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

//show weather report

function showWeatherReport(weather){
    
    let city = document.getElementById('citys');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.getElementById('temps');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let mm = document.getElementById('mins-maxs');
    mm.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C` + "(Min)" + " / " + `${Math.ceil(weather.main.temp_max)}&deg;C` + "(Max)";

    let st = document.getElementById('statuss');
    st.innerText = `${weather.weather[0].main}`

    let log = document.getElementById('logs');

    

    if(st.textContent == 'Clear'){
        document.body.style.backgroundImage = "URL('https://images.unsplash.com/uploads/14114640960629b5c3fa0/116dc05a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
        log.className = "fas fa-cloud-sun";
    }
    else if(st.textContent == 'Snow'){
        document.body.style.backgroundImage = "URL('https://images.unsplash.com/photo-1431036101494-66a36de47def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
         log.className =  "fas fa-snowflake";
    }

    else if(st.textContent == 'Sunny'){
        document.body.style.backgroundImage = "URL('https://images.unsplash.com/photo-1500320821405-8fc1732209ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
        log.className=  "fas fa-sun";
    }

    else if(st.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage = "URL('https://images.unsplash.com/photo-1561485132-59468cd0b553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
        log.className = "fas fa-poo-storm";
    }
    
    else if(st.textContent == 'Haze'){
        document.body.style.backgroundImage = "URL('https://images.unsplash.com/photo-1518991207605-c5bced0849e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
        log.className=  "fas fa-smog";
    }
     
    else if(st.textContent == 'Clouds'){
        document.body.style.backgroundImage = "URL('https://images.unsplash.com/photo-1495756111155-45cb19b8aeee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
        log.className = "fas fa-cloud-sun-rain";
    }

     else if(st.textContent == 'Smoke'){
        document.body.style.backgroundImage = "URL('https://images.unsplash.com/photo-1518991207605-c5bced0849e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
        log.className=  "fas fa-smog";
    }
    
    else if(st.textContent == 'Mist'){
        document.body.style.backgroundImage = "URL('https://images.unsplash.com/photo-1518991207605-c5bced0849e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
        log.className=  "fas fa-smog";
    }



    else if(st.textContent == 'Rain'){
        document.body.style.backgroundImage = "URL('https://images.unsplash.com/photo-1501608607047-86552dbaccaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
        log.className = "fas fa-cloud-rain";
    }


     else{
        document.body.style.backgroundImage = "URL('https://images.unsplash.com/photo-1501608607047-86552dbaccaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
     }

    //date manage

    let date = document.getElementById('dates'); 
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

}



function dateManage(dateArg){

    let day = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept","Oct","Nov","Dec"];

    var year = dateArg.getFullYear();
    var date = dateArg.getDate();
    var month = months[dateArg.getMonth()];
    var days = day[dateArg.getDay()];

    return `${date} ${month} (${days}), ${year}`
}



}