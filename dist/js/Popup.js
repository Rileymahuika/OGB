function complexToggle(string) { //whatever you pass to 'string' will be the ID that is used to find an element in your html
var target = document.getElementById(string);
target.classList.toggle('visable'); //put the class you want to toggle here

setTimeout(function () {
    target.classList.toggle('visable'); //put the class you want to toggle here
}, 3000); //set the time in milliseconds here
}