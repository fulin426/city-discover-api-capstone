//Define global variables, functions, and objects
const FOURSQUARE_SEARCH_URL = 'https://api.foursquare.com/v2/venues/explore';
const OPENWEATHERMAP_SEARCH_URL = 'https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=ac32d19346bf21abaa933d02472c8ece';

function searchRecommendations(city, category) {
  const settings = {
    url: FOURSQUARE_SEARCH_URL,
    data: {
      client_id: 'WOFGARYG4DKBTTWRO5VHIFSGIOB1NVTC21XLV1JLWTYERERC',
      client_secret: 'UIYIKPU1WY132RBMKBFSZVGFMNP30PPJXCJPR4MLJFVZAPNM',
      query: 'recommended',
      near: `${city}`,
      section: `${category}`,
      v: 20180301,
      venuePhotos: 1,
      limit: 27
    },
    dataType: 'json',
    type: 'GET',
    success: function(data) {
              try {
                  let results = data.response.groups[0].items.map(function (item, index) {
                    return displayRecommendations(item);
                  });
                  $('.results').prop('hidden', false).html(results);
                  } catch (e) {
                    $('.results').html("<div class='error_result'><p>Sorry! No Results Found. Please try a different category or search a different city</p></div>");
                    }
                  },
                  error: function() {
                    $('.results').prop('hidden', false).html("<div class='error_result'><p>Sorry! No Results Found. Please try a different category or search a different city</p></div>");
                 }
              };        
    $.ajax(settings);
}
//In cases where API returns undefined results
function checkForUndefined(inputText) {
  if (inputText === undefined) {
    return '';
  } else {
    return inputText;
  }
}

function displayRecommendations(result) {
    return `      
      <div class="col-4">
        <div class="container_results">
          <div class="venue_name">
            <a href="${result.venue.url}">${result.venue.name}</a>
          </div>
          <img class="venue_image" src="https://igx.4sqi.net/img/general/280x280${result.venue.photos.groups[0].items[0].suffix}" alt="venue image">
          <div class="venue_category">
            <img class="venue_category_logo" src="${result.venue.categories[0].icon.prefix}bg_32${result.venue.categories[0].icon.suffix}" alt="category logo">
            <p class="venue_category_name">${result.venue.categories[0].shortName}</p>
          </div>
          <p class="venue_address">${checkForUndefined(result.venue.location.formattedAddress[0])}</p>
          <p class="venue_address">${checkForUndefined(result.venue.location.formattedAddress[1])}</p>
          <p class="venue_address">${checkForUndefined(result.venue.location.formattedAddress[2])}</p>
          <p class="venue_address">${checkForUndefined(result.venue.contact.formattedPhone)}</p>
        </div>
      </div>`;
}

function searchWeather(city) {
  const settings = {
    url: OPENWEATHERMAP_SEARCH_URL,
    data: {
      units: 'imperial',
      q: `${city}`,
    },
    dataType: 'json',
    type: 'GET',
    success: function(data) {
              try {
              let results = displayWeather(data);
              $('.weather').prop('hidden', false).html(results);
            } catch (e) {
              $('.weather').html("<div class='error_result'><p>Sorry! No weather results found</p></div>");
              }
            },
            error: function() {
              $('.weather').prop('hidden', false).html("<div class='error_result'><p>Sorry! No weather results found</p></div>");
              }
            };        
    $.ajax(settings);
}

function displayWeather(data) {
  return `
      <div class="weather_result" aria-live="assertive" hidden>
            <h3 id="weather_title">${data.name}</h3>
            <img class="weather_logo" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather.png">
            <p id="temp_max" class ="temp_result">${Math.round(data.main.temp_max)}°F</p>
            <p id="temp_min" class ="temp_result">${Math.round(data.main.temp_min)}°F</p> 
            <p  id="weather_description">${data.weather[0].main}</p>
          </div>
        </div>
      </div>   `;
}
//Toggles button colors once clicked
function clickOnButton() {
  $('button').on('click', function() {
    let query = $('#search-input').val();
    if (query === '') {
      return;
    } else {
      $('button').removeClass('selected_button');
      $(this).addClass('selected_button');
      }
  });
}

$(clickOnButton);

function removeItemsAfterClick() {
  $('.space_holder').remove();
  $('.weather_result').empty();
  $('.intro_container').remove();
}

//Use global variables, functions, and objects (triggers)
$('#food').on('click', function(event) {
	event.preventDefault();
	let query = $('#search-input').val();
  let category = 'food';
	if (query === '') {
    alert('Please Enter a City');
  } else {
      removeItemsAfterClick();
      searchRecommendations(query, category); 
      searchWeather(query);
    }
});

$('#sights').on('click', function(event) {
	event.preventDefault();
	let query = $('#search-input').val();
  let category = 'sights';
	if (query === '') {
    alert('Please Enter a City')
  } else {
      removeItemsAfterClick();
      searchRecommendations(query, category); 
      searchWeather(query);
    }
});

$('#shops').on('click', function(event) {
	event.preventDefault();
	let query = $('#search-input').val();
  let category = 'shops';
	if (query === '') {
    alert('Please Enter a City')
  } else {
      removeItemsAfterClick();
      searchRecommendations(query, category); 
      searchWeather(query);
    }
});

function activatePlacesSearch() {
    let options = {
        types: ['(regions)']
    };
    let input = document.getElementById('search-input');
    let autocomplete = new google.maps.places.Autocomplete(input, options);
}

