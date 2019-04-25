
function pluralize(x, y)
{
    var word1 = document.getElementById("1").value;
    var word2 = document.getElementById("2").value;


    if(word1.length > 0)
    {
    x = word1;
    y = word2;

    document.getElementById("output").innerHTML = x + " " + y;
    }
    else
    {
    document.getElementById("output").innerHTML = "there are no given words in any place"
    }
};