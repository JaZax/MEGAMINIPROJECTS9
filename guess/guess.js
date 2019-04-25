function main()
{
    var randnum = Math.floor(Math.random()*10)+1;
    var answer = document.getElementById("txt1").value;
    var output = document.getElementById("output");
    
    if(answer>=1)
    {
    if(answer<=10)
    {
    if(randnum == answer)
    {
        output.innerHTML = "brawo"
    }
    else
    {
        output.innerHTML = "spróbuj ponownie"
    }
    }
    else
    {
        output.innerHTML = "liczba nie może być większa od 10"
    }
    }
    else
    {
        output.innerHTML = "liczba nusi być większa od zera"
    }
}