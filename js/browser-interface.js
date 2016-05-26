var city;
var user_time;
var unixUser_time;
getResponseAndDisplay = require('../js/bike.js').getResponseAndDisplay;

$(document).ready(function(){
  $('#userInput').submit(function(event){
    event.preventDefault();
    city = $('#cityInput').val();
    $('#cityInput').val("");
    user_time = $('#user_time').val();
    unixUser_time = moment(user_time).format("X");

    $('.loadingImage').show();
    $('.bikeList').empty();
    $('.output').empty();
    getResponseAndDisplay(city, unixUser_time);
  });
});

exports.displayer = function(bikes) {

  $('.output').text("Here's a list of all bikes reported stolen in " + city + " since " + user_time + ":");

  bikes.forEach(function(bike) {
    $('.bikeList').append("<div class='col-md-4 bikeBox'>" + "Name: " + bike.name +
                          "<br>" + "Serial#: " + bike.serial +
                          "<br> <img src=" + bike.thumb + ">"  +
                          "<br>" + "Year: " + bike.year +
                          "<br>" + "Stolen Date: " + moment.unix(bike.date_stolen).format("dddd, MMMM Do YYYY, h:mm a") +
                          "</div>");
  });
};
