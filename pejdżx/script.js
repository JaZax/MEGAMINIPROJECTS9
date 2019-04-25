document.addEventListener('click', printMousePos, true);

var color = 
[

  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'white',
]

function printMousePos(e)
{
  var randnum = Math.floor(Math.random()*color.length);
  var cursorX = e.pageX;
  var cursorY= e.pageY; 
  var x = cursorX - 25;
  var y = cursorY - 25;


  document.getElementById('sq').style.display = 'block';
  document.getElementById('sq').style.borderColor = color[randnum];
  document.getElementById('sq').style.left = x + 'px';
  document.getElementById('sq').style.top = y + 'px';

  console.log(randnum)
}