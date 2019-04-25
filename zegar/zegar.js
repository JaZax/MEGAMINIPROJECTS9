function zegar()
{
    var data = new Date();

    var godzina = data.getHours();
    if(godzina < 10)
    {
        godzina = "0"+godzina;
    }
    var minuta = data.getMinutes();
    if(minuta < 10)
    {
        minuta = "0"+minuta;
    }
    var sekunda = data.getSeconds();
    if(sekunda < 10)
    {
        sekunda = "0"+sekunda;
    }
    var dzien = data.getDay();
    if(dzien < 10)
    {
        dzien = "0"+dzien;
    }
    var miesiac = data.getMonth()+1;
    if(miesiac < 10)
    {
        miesiac = "0"+miesiac;
    }
    var rok = data.getFullYear();

    document.getElementById("zegar").innerHTML = 
    godzina + ":" + minuta + ":" + sekunda + "&ensp;" + dzien + "/" + miesiac + "/" + rok;

    setTimeout(zegar, 1000)
}
