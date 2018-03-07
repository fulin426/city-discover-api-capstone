//define global variables, functions, and objects
const FOURSQUARE_SEARCH_URL = 'https://api.foursquare.com/v2/venues/explore';

function searchFood(city) {
  const settings = {
    url: FOURSQUARE_SEARCH_URL,
    data: {
      client_id: 'WOFGARYG4DKBTTWRO5VHIFSGIOB1NVTC21XLV1JLWTYERERC',
      client_secret: 'UIYIKPU1WY132RBMKBFSZVGFMNP30PPJXCJPR4MLJFVZAPNM',
      query: 'recommended',
      near: `${city}`,
      section: 'FOOD',
      v: 20180301,
      venuePhotos: 1,
      limit: 12
    },
    dataType: 'json',
    type: 'GET',
    success: function(data) {
              console.log(data);
              let results = data.response.groups[0].items.map (function (item, index) {
                return displayFoodResults(item);
              });
              $('.results').html(results);
            }
    };        
    $.ajax(settings);
}

function displayFoodResults(result) {
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
          <p class="venue_address">${result.venue.location.formattedAddress[0]}</p>
          <p class="venue_address">${result.venue.location.formattedAddress[1]}</p>
          <p class="venue_address">${result.venue.location.formattedAddress[2]}</p>
          <p class="venue_address">${result.venue.contact.formattedPhone}</p>
        </div>
      </div>`
}

function searchSights(city) {
  const settings = {
    url: FOURSQUARE_SEARCH_URL,
    data: {
      client_id: 'WOFGARYG4DKBTTWRO5VHIFSGIOB1NVTC21XLV1JLWTYERERC',
      client_secret: 'UIYIKPU1WY132RBMKBFSZVGFMNP30PPJXCJPR4MLJFVZAPNM',
      query: 'recommended',
      near: `${city}`,
      section: 'SHOPPING',
      v: 20180301,
      venuePhotos: 1,
      limit: 12
    },
    dataType: 'json',
    type: 'GET',
    success: function(data) {
              console.log(data);
              let results = data.response.groups[0].items.map (function (item, index) {
                return displayFoodResults(item);
              });
              $('.results').html(results);
            }
    };        
    $.ajax(settings);
}

function displaySightsResults(result) {
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
          <p class="venue_address">${result.venue.location.formattedAddress[0]}</p>
          <p class="venue_address">${result.venue.location.formattedAddress[1]}</p>
          <p class="venue_address">${result.venue.location.formattedAddress[2]}</p>
          <p class="venue_address">${result.venue.contact.formattedPhone}</p>
        </div>
      </div>`
}

function searchSights(query) {
alert('search for sights');
}


function searchShops(query) {
alert('search for shops');
}

//use global variables, functions, and objects (triggers)
$('.food').on('click', function(event) {
	event.preventDefault();
	let query = $('#search-input').val();
  $('#search-input').val('');
	if (query === '') {alert('Please Enter a City')}
		else {searchFood(query)}
});

$('.sights').on('click', function(event) {
	event.preventDefault();
	let query = $('#search-input').val();
  $('#search-input').val('');
	if (query === '') {alert('Please Enter a City')}
		else {searchSights(query)}
});

$('.shops').on('click', function(event) {
	event.preventDefault();
	let query = $('#search-input').val();
  $('#search-input').val('');
	if (query === '') {alert('Please Enter a City')}
		else {searchShops(query)}
});