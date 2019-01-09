// Определяем переменную map
var map;

// Функция initMap которая отрисует карту на странице
function initMap() {
  // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
  map = new google.maps.Map(document.getElementById('map'), {
    // При создании объекта карты необходимо указать его свойства
    // center - определяем точку на которой карта будет центрироваться
    center: {
      lat: 49.997161,
      lng: 36.235177
    },
    // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
    zoom: 16.9,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,

    // Добавляем свои стили для отображения карты
    styles: [{
        "stylers": [{
            "hue": "#cbd8ea"
          },
          {
            "saturation": 3
          }
        ]
      },
      {
        // "featureType": "text",
        "elementType": "labels",
        "stylers": [{
          "visibility": "hidden"
        }]
      },
      {
        "featureType": "administrative",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative",
        "stylers": [{
            "saturation": 100
          },
          {
            "lightness": -100
          },
          {
            "visibility": "off"
          },
          {
            "weight": 3
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.icon",
        "stylers": [{
            "saturation": 50
          },
          {
            "lightness": -5
          },
          {
            "weight": 8
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [{
          "color": "#7497c6"
        }]
      },
      {
        "featureType": "landscape.man_made",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "lightness": 50
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
          "visibility": "on"
        }]
      }
    ]
  });

  // Создаем маркер на карте
  var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: {
      lat: 49.997720,
      lng: 36.236610
    },
    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,
    // position: myLatlng,

    // Пишем название маркера - появится если навести на него курсор и немного подождать
    title: 'Чернишевська, 13',

    // Укажем свою иконку для маркера
    icon: './img/pug.png'
  });

  // Создаем наполнение для информационного окна
  var contentString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Агенство Недвижимости "Контраст"</h1>' +
    '<div id="bodyContent">' +
    '<p>Привет!Мы находимся здесь!</p>' +
    '<p>Приходи к нам!</p>' +
    '<p>Будем рады с 8.00 до 18.00!</p>' +
    '<p><b>Наш веб-сайт:</b> <a href="http://contrast.com/" target="_blank">contrast.com</a>' +
    '</p>' +
    '</div>' +
    '</div>';

  //Создаем информационное окно
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400
  });

  // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}
