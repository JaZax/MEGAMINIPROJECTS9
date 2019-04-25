
function zegar()
{
    var data = new Date();
    var hour = data.getHours();
    if(hour < 10)
    {
        hour = "0" + hour;
    }
    if(hour == "00")
    {
        document.getElementById("zegar").style.color = "#FFCB76"
    }
    var minutes = data.getMinutes();
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }
    var seconds = data.getSeconds();
    if(seconds < 10)
    {
        seconds = "0" + seconds;
    }
    var day = data.getDay();
    if(day === 3)
    {
        document.getElementById("image").style.display = "block";
    }
    
    else
    {
        document.getElementById("image").style.display = "none";
    }
    document.getElementById("zegar").innerHTML = hour + ":" + minutes + ":" + seconds;
    setTimeout(zegar, 1000)
}