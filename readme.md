# Cit-Discover-API-Capstone
Thinkful (https://www.thinkful.com) First Capstone Project - App integrating with YouTube API

![landing page] (https://github.com/kimcheru18/coffee-search-wikipedia-api-capstone/blob/master/github_images/screenshot_landing_page.png)

![overlay for googlemaps] (https://github.com/kimcheru18/coffee-search-wikipedia-api-capstone/blob/master/github_images/screenshot_google-map.png)

![overlay for youtube] (https://github.com/kimcheru18/coffee-search-wikipedia-api-capstone/blob/master/github_images/screenshot_youtube.png)

## Background
I really like sweet, delicious coffee and thought it would be interesting to see what kinds of coffee drinks are available around the world.

## Use Case
This app includes 20 different coffee drinks from different countries. A person can read through the descriptions, view the images and choose a coffee. An overlay will then show where the coffee can be found, two YouTube videos on how to make it and some coffee trivia from Wikipedia.

## Working Prototype
You can access a working prototype of the app here: https://kimcheru18.github.io/coffee-search-wikipedia-api-capstone/

## Functionality
The app's functionality includes:
* The option to select one of 20 coffee drinks.
* The app returns a google map indicating what country the coffee originates from.
* The app returns 2 YouTube video tutorials on how to make the selected coffee.
* The app returns coffee trivia from Wikipedia.
* A 'Try another flavor' button that takes one back to the main screen.

## Technology
* HTML
* CSS
* JavaScript
* jQuery

The app uses AJAX JSON calls to the <a href="https://www.googleapis.com/youtube/v3/search">YouTube Videos</a>Open Platform API to return YouTube results.
The app uses AJAX JSON calls to the <a href="https://en.wikipedia.org/w/api.php">Wiki Trivia</a>Open Platform API to return Wikipedia results.


## Responsive
App is built to be responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Add list of cafe's where visiter can find these coffees
* Add comment section for visiter to comment on their favorite coffee flavors or recommend other coffee types and cafe's