const current = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bffb752501b51087309150590ce26861";

fetch(current)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('high').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity.toFixed(0);
    document.getElementById('speed').textContent = jsObject.wind.speed.toFixed(0);

  
  });


const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=bffb752501b51087309150590ce26861";

fetch(forecast)
  .then((response) => response.json())
  .then((jsObjectF) => {
    //console.log(jsObjectF);

    var valid = -1;
    var imagesrc = "";
    var desc = "";

    var dateFormat = "";
    var dateF = "";
    var dayName = "";    

    for (let i = 0; i < jsObjectF.list.length; i++) {

      if (jsObjectF.list[i].dt_txt.includes('18:00:00')) {
        //console.log(jsObjectF.list[i].dt_txt)
        valid++;
        dateFormat = parseFloat(jsObjectF.list[i].dt);
        
        dateF = new Date(dateFormat * 1000);
        dayF = dateF.getDay();
        //console.log(dayF);

        document.getElementById('temp' + valid).textContent = jsObjectF.list[i].main.temp.toFixed(0);
        imagesrc = 'https://openweathermap.org/img/w/' + jsObjectF.list[i].weather[0].icon + '.png';
        desc = 'https://openweathermap.org/img/w/' + jsObjectF.list[i].weather[0].description;
        //document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon' + valid).setAttribute('src', imagesrc);
        document.getElementById('icon' + valid).setAttribute('alt', desc);

        switch (dayF) {
          case 0:
            dayName = "Sun";
            break;
          case 1:
            dayName = "Mon";
            break;
          case 2:
            dayName = "Tue";
            break;
          case 3:
            dayName = "Wed";
            break;
          case 4:
            dayName = "Thu";
            break;
          case 5:
            dayName = "Fri";
            break;
          case 6:
            dayName = "Sat";
            break;
        };

        document.getElementById('day' + valid).textContent = dayName;

      };
    }
    });
