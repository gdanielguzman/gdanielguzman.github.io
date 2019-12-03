const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

  .then(function (response) {

    return response.json();

  })

  .then(function (jsonObject) {
    const towndata = jsonObject['towns'];

    for (let i = 0; i < towndata.length; i++) {

      if (towndata[i].name != "Fish Haven") {
        continue;
      }

      let eventsInTown = document.getElementById("container-events");

      for (let j = 0; j < towndata[i]['events'].length; j++) {
        let containerEvent = document.createElement('div');

        let eventList = towndata[i]['events'][j].split(':')

        containerEvent.innerHTML = eventList[0] + ":";

        let emphasize = document.createElement('em');

        emphasize.innerHTML = eventList[1];

        containerEvent.appendChild(emphasize);

        containerEvent.className = "events";

        document.querySelector('div.container-events').appendChild(containerEvent);
      }

    }

  });