function clr()
{
    var r = document.getElementById('r').value;
    var g = document.getElementById('g').value;
    var b = document.getElementById('b').value;

    var bgColor = "rgb(" + r + "," + g + "," + b + ")";

    console.log(bgColor)

    document.getElementById('sq').style.backgroundColor = bgColor;
    document.getElementById('sq').innerHTML = bgColor;
}