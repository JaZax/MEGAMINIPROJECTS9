var nr = 1;

function slider()
{
    
    document.getElementById("slider").innerHTML = '<img src="img/' + nr + '.png" alt="no nie ma zdjęcia"></img>';
    document.getElementById("output").innerHTML = nr;
    
    nr++;

    if(nr <= 4)
    {
        setTimeout(slider, 2000)
    }

    if(nr > 4)
    {
        nr = 1;
        setTimeout(slider, 2000)
    }
}

function first()
{
    document.getElementById("slider").innerHTML = '<img src="img/' + nr + '.png" alt="no nie ma zdjęcia"></img>';
    nr = 1;
}

function second()
{
    document.getElementById("slider").innerHTML = '<img src="img/' + nr + '.png" alt="no nie ma zdjęcia"></img>';
    nr = 2;
}

function third()
{
    document.getElementById("slider").innerHTML = '<img src="img/' + nr + '.png" alt="no nie ma zdjęcia"></img>';
    nr = 3;
}

function fourth()
{
    document.getElementById("slider").innerHTML = '<img src="img/' + nr + '.png" alt="no nie ma zdjęcia"></img>';
    nr = 4;
}

window.onload = slider;