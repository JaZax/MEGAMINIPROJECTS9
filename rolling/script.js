function rollme()
{
    var range = document.getElementById('range').value;
    document.getElementById('img').style.left = range + 'px';
    
    console.log(range);

    if(range>250)
    {
    document.getElementById('img').style.left = range + 'px';
    document.getElementById('img').style.transform = 'scaleX(1)';
    }
    else if(range<250)
    {
    document.getElementById('img').style.left = range + 'px';
    document.getElementById('img').style.transform = 'scaleX(-1)';
    }
    setTimeout(rollme, 1)
}

window.onload = rollme;