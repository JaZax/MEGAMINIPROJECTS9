function check()
{
    var num = document.getElementById("num").value;

    var result = num%2
    
    if(result==0)
    {
        document.getElementById("output").innerHTML = "ta liczba jest parzysta";
    }
    else
    {
        document.getElementById("output").innerHTML = "ta liczba jest nieparzysta";
    }
    setTimeout(check, 1)
}