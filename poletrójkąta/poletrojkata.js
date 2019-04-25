function oblicz()
{
    var a = document.getElementById("a").value;
    var h = document.getElementById("h").value;
    var output = document.getElementById("output");

    var wynik = (a/2) * h;
    
    if (wynik > 0)
    {
    output.innerHTML = wynik;
    }
    setTimeout(oblicz , 1)
}