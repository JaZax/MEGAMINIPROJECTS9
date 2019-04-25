function main()
{
    var liczba1 = document.getElementById("liczba1").value;
    var liczba2 = document.getElementById("liczba2").value;
    var output = document.getElementById("output");
    var po = " ";
    
    
    if(liczba2 > liczba1)
    {
        for(i = liczba1; i <= liczba2 ; i++)
        {
        var po = po + i + " ";
        output.innerHTML = po + " ";
        }
    }

    else if (liczba1 > liczba2)
    {
        for(i = liczba1; i >= liczba2 ; i--)
        {
        var po = po + i + " ";
        output.innerHTML = po;
        }
    }

    else if (liczba1 == liczba2)
    {
        output.innerHTML = "wewe liczby takie same są nie oszukuj"
    }
}