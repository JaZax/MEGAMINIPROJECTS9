
function check()
{
    var input = document.getElementById("input").value;
    var inputlength = input.length;
    var regex = /a$/;

    var inputafter = regex.test(input);

    document.getElementById("result").innerHTML = inputafter;
    
    if(inputlength < 2)
    {
        document.getElementById("result").innerHTML = "coś za krótkie to jest halo";
    }

    else
    {

    if(inputafter == true)
    {
        document.getElementById("result").innerHTML = "To jest imie żeńskie";
    }
    
    if(inputafter != true)
    {
        document.getElementById("result").innerHTML = "To jest imie męskie";
    }

    }

    if(inputlength == 0)
    {
        document.getElementById("result").innerHTML = " ";
    }
    setTimeout(check, 1)
}

window.onload = check
