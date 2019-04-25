function random()
{
    var num = document.getElementById("number").value;
    
    if(num > 0)
    {
    var result = Math.floor(Math.random()*num)+1

    document.getElementById("output").innerHTML =
    result;
    }
    else
    {
    document.getElementById("output").innerHTML =
    "liczba musi być dodatnia";
    }
}