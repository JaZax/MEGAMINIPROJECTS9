
function celsjusz()
{
    var c = document.getElementById("c").value;
    var f = (c * 18/10) + 32

    document.getElementById("output").innerHTML =c + "°C =" + " " + f + "°F";
}
function fahrenheit()
{
    var f = document.getElementById("f").value;
    var c = (f - 32) / (18/10);

    document.getElementById("output").innerHTML =f + "°F =" + " " + c + "°C";
}