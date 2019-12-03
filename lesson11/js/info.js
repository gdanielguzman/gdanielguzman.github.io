const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

  .then(function (response)
  {

    return response.json();
    
  })
  
  .then(function (jsonObject)
  {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ )
    {

        if ((towns[i].name != "Preston") && (towns[i].name != "Soda Springs") && (towns[i].name != "Fish Haven"))
        {
            continue;
        }

        let townSection = document.createElement('section');

        if (towns[i].name == "Preston")
        {
          townSection.style.order = "1";
        }
        else if (towns[i].name == "Soda Springs")
        {
          townSection.style.order = "2";
        }
        else if (towns[i].name == "Fish Haven")
        {
          townSection.style.order = "3";
        }

        let name = document.createElement('h2');
        let motto = document.createElement('h3');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        
        
        let image = document.createElement('img')

        let divX = document.createElement('div');

        let imgX = document.createElement('div');


        townSection.className = "town-section";

        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        founded.textContent = "Year Founded: " + towns[i].yearFounded;
        population.textContent = "Population: " + towns[i].currentPopulation;
        rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
        image.src = "images/" + towns[i].photo;
        image.alt = towns[i].name;


        divX.appendChild(name);
        divX.appendChild(motto);        
        divX.appendChild(founded);
        divX.appendChild(population);
        divX.appendChild(rainfall);
        
        
        
        imgX.appendChild(image);

        townSection.appendChild(divX);
        townSection.appendChild(imgX);


        document.querySelector('div.container-home').appendChild(townSection);

      }
});