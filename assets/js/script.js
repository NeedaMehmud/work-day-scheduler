var text = document.getElementById('#text');
var hours = document.getElementById('#hour')
var saveButton = document.getElementsByClassName('saveButton');

var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#current-time").append(currentDay);



