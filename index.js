//define global variables, functions, and objects
const FOURSQUARE_SEARCH_URL = 

function searchFood(query) {

function displayFoodResults(result) {
    return
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