var option1 = 0;
var option2 = 0;
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

function increase1()
{
    option1++;
    let sum = option1 + option2;

    let percent1 = (100 * option1)/sum;
    let percent2 = (100 * option2)/sum;

    document.getElementById('fill1').style.width = percent1 + '%';
    document.getElementById('fill2').style.width = percent2 + '%';
    document.getElementById('fill1').innerHTML = Math.floor(percent1) + '%';
    document.getElementById('fill2').innerHTML = Math.floor(percent2) + '%';
    

    if(percent1 > percent2)
    {
    document.getElementById('fill1').style.background = '#b2ff5a';
    document.getElementById('fill2').style.background = 'red'; 
    }
    else if(percent1 == percent2)
    {
    document.getElementById('fill2').style.background = 'yellow';
    document.getElementById('fill1').style.background = 'yellow'; 
    }
    else
    {
    document.getElementById('fill2').style.background = '#b2ff5a';
    document.getElementById('fill1').style.background = 'red'; 
    }
}
function increase2()
{
    option2++;
    let sum = option1 + option2;
    
    let percent1 = (100 * option1)/sum;
    let percent2 = (100 * option2)/sum;

    document.getElementById('fill1').style.width = percent1 + '%';
    document.getElementById('fill2').style.width = percent2 + '%';
    document.getElementById('fill1').innerHTML = Math.floor(percent1) + '%';
    document.getElementById('fill2').innerHTML = Math.floor(percent2) + '%';

    if(percent1 > percent2)
    {
    document.getElementById('fill1').style.background = '#b2ff5a';
    document.getElementById('fill2').style.background = 'red'; 
    }
    else if(percent1 == percent2)
    {
    document.getElementById('fill2').style.background = 'yellow';
    document.getElementById('fill1').style.background = 'yellow'; 
    }
    else
    {
    document.getElementById('fill2').style.background = '#b2ff5a';
    document.getElementById('fill1').style.background = 'red'; 
    }
}
function reset()
{
    option1 = 0;
    option2 = 0;
    document.getElementById('fill1').style.width = '0%';
    document.getElementById('fill2').style.width = '0%';
}