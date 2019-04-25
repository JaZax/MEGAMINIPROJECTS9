

function main()
{
var object = document.getElementById('object');

var rand1 = Math.floor(Math.random()*650)+1;
var rand2 = Math.floor(Math.random()*750)+1;

object.style.left =  rand1 + 'px';

object.style.top =  rand2 + 'px';

};

window.onload = main;