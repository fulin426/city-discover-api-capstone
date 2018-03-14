# City-Discover-API-Capstone
Thinkful (https://www.thinkful.com) First Capstone Project - App integrating Foursquare and OpenWeatherMap API

## Screenshots 
![Screenshots](https://raw.githubusercontent.com/fulin426/city-discover-api-capstone/master/images/landingPage.png)

![Screenshots](https://raw.githubusercontent.com/fulin426/city-discover-api-capstone/master/images/resultsScreenshot.png)

## Background
When I'm traveling to a new city the typical things I look for are local foods, sights, and shopping areas. I also would like to know the current weather conditions before going out to explore. 

## Use Case
This app uses information from Foursquare to display venue information and photos near the location provided in the search. The app also includes current weather information from OpenWeatherMap. 

## User Stories
As a vistor I want to search by a city name in order to find out the weather, food, shops, and sights.

![User Stories](https://github.com/fulin426/city-discover-api-capstone/blob/master/images/user-stories.jpg)

## Working Prototype
You can access a working prototype of the app here: (https://fulin426.github.io/city-discover-api-capstone)

## Functionality
The app's functionality includes: generates recommendations based on city location, tabs through three different categories, and returns current weather conditons. 


## Technology
* HTML
* CSS
* JavaScript
* jQuery

The app uses AJAX JSON calls to the <a href="https://api.foursquare.com/v2/venues/explore">Foursquare</a> Open Platform API to return recommendations based on city location.

The app uses AJAX JSON calls to the <a href="https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=ac32d19346bf21abaa933d02472c8ece">OpenWeatherMap</a> Open Platform API to return weather results

## Responsive
App is built to be responsive across mobile, tablet, laptop, and desktop screen resolutions.

<!-- ## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* AutoComplete for search
* GoogleMaps Api  -->