//define global variables, functions, and objects
const FOURSQUARE_SEARCH_URL = "https://api.foursquare.com/v2/venues/explore?&client_id=FPRD2S2RFIB4QLBNBBHNAMLYOUF2AZSZ21ZK53QYASWCRJ1Z&client_secret=FEFA44EG0YDZ0XKA1UWX5ZWLZJLE30E2GYRLGB44PKE5KZ0E&v=20170915";

function searchFood(query) {
$.ajax(FOURSQUARE_SEARCH_URL, {
            data: {
                near: query,
                venuePhotos: 1,
                limit: 9,
                query: 'recommended',
                section: 'FOOD',
            },
            dataType: 'json',
            type: 'GET',
            success: function (data) {
            	console.log(data);
 				try {
                    let results = data.response.groups[0].items.map(function (item, index) {
                        return displayFoodResults(item);
                    });
                    $('.results').html(results);
                    scrollPageTo('#foursquare-results', 15);
                } catch (e) {
                    $('#foursquare-results').html("<div class='result'><p>Sorry! No Results Found.</p></div>");
                }
            },
            error: function () {
                $('#foursquare-results').html("<div class='result'><p>Sorry! No Results Found.</p></div>");
            }
        });
}

function displayFoodResults(result) {
    return `
      		<div class="col-4 results">
  		  <div class="container_results">
          <div class="venue_name">
            <a href="${result.venue.url}" target="_blank">${result.venue.name}</a>
          </div>
          <div class="result-image venue_image" style="background-image: url(https://igx.4sqi.net/img/general/width960${result.venue.photos.groups[0].items[0].suffix})" ;>
          </div>
          <div class="venue_category">
            <img src="${result.venue.categories[0].icon.prefix}bg_32${result.venue.categories[0].icon.suffix}" alt="category-icon">
            <p class="venue_category_name">${result.venue.categories[0].name}</p>
          </div>
          <p class="venue_address">${result.venue.location.formattedAddress[0]}</p>
          <p class="venue_address">${result.venue.location.formattedAddress[1]}</p>
          <p class="venue_address">${result.venue.location.formattedAddress[2]}</p>
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
	if (query === '') {alert('Please Enter a City')}
		else {searchFood(query)}
});

$('.sights').on('click', function(event) {
	event.preventDefault();
	let query = $('#search-input').val();
	if (query === '') {alert('Please Enter a City')}
		else {searchSights(query)}
});

$('.shops').on('click', function(event) {
	event.preventDefault();
	let query = $('#search-input').val();
	if (query === '') {alert('Please Enter a City')}
		else {searchShops(query)}
});