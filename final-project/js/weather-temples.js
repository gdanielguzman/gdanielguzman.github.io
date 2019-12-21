/* Weather of Cochabamba */

const apiURL1 = "https://api.openweathermap.org/data/2.5/weather?id=3919968&units=imperial&APPID=bffb752501b51087309150590ce26861";
fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //With next line the temp data is obtained and place it in current-temp id.
    document.getElementById('weather1').textContent = jsObject.main.temp;
    
  });

/* Weather of Lima */

const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?id=3936456&units=imperial&APPID=bffb752501b51087309150590ce26861";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //With next line the temp data is obtained and place it in current-temp id.
    document.getElementById('weather2').textContent = jsObject.main.temp;
    
  });

/* Weather of Buenos Aires */

const apiURL3 = "https://api.openweathermap.org/data/2.5/weather?id=3435910&units=imperial&APPID=bffb752501b51087309150590ce26861";
fetch(apiURL3)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //With next line the temp data is obtained and place it in current-temp id.
    document.getElementById('weather3').textContent = jsObject.main.temp;
    
  });

/* Weather of Concepcion (Talcahuano - Chile) */

const apiURL4 = "https://api.openweathermap.org/data/2.5/weather?id=3870282&units=imperial&APPID=bffb752501b51087309150590ce26861";
fetch(apiURL4)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('weather4').textContent = jsObject.main.temp;
    
  });