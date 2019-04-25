function clr()
{
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    var bgColor = "rgb(" + r + "," + g + "," + b + ")";

    console.log(bgColor)

    document.body.style.background = bgColor;
    document.getElementById('btn').style.color = bgColor;
    document.getElementById('text').innerHTML = bgColor;
}
function printt()
{
    window.print();
}