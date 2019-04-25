
function testt()
{
    var navbarx = $('#navbar').width();
    var x = event.clientX;     
    
    if(x <= 70)
    {
        document.getElementById('navbar').style.left = '0';
    }
    else if(x >= navbarx)
    {
        document.getElementById('navbar').style.left = '-300px';
    }
}