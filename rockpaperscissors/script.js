var usertype;
var comptype;

function show(thing)
{
    if(thing == 'paper')
    {
        usertype = 1;
    }

    if(thing == 'rock')
    {
        usertype = 2;
    }

    if(thing == 'sciss')
    {
        usertype = 3;
    }

    var element = document.getElementById(thing).innerHTML;

    document.getElementById('warrior1').innerHTML = element;

    var icon = document.getElementById('icon');

    icon.href = '"img/scissors.png"'

    main()
}


{
    document.getElementById(thing).innerHTML = '<img src="img/' + thing + 'after.png">'
}

function main()
{
    var elements = ['paper', 'rock', 'scissors'];

    var random = Math.floor(Math.random()*3);

    if(random == 0)
    {
        comptype = 1;
    }
    if(random == 1)
    {
        comptype = 2;
    }
    if(random == 2)
    {
        comptype = 3;
    }
    document.getElementById('warrior2').innerHTML = '<img src="img/' + elements[random] + '.png">'

    if(usertype == 1)
    {
        if(comptype == 1)
        {
            document.getElementById('warrior1').style.background = 'rgba(255,255,0,0.1)'
            console.log('remis!')
        }
        else if(comptype == 2)
        {
            document.getElementById('warrior1').style.background = 'rgba(0,255,0,0.1)'
            console.log('wygrana!')
        }
        else if(comptype == 3)
        {
            document.getElementById('warrior1').style.background = 'rgba(255,0,0,0.1)'
            console.log('przegrana!')
        }   
    }

    if(usertype == 2)
    {
        if(comptype == 1)
        {
            document.getElementById('warrior1').style.background = 'rgba(255,0,0,0.1)'
            console.log('przegrana!')
        }
        else if(comptype == 2)
        {
            document.getElementById('warrior1').style.background = 'rgba(255,255,0,0.1)'
            console.log('remis!')
        }
        else if(comptype == 3)
        {
            document.getElementById('warrior1').style.background = 'rgba(0,255,0,0.1)'
            console.log('wygrana!')
        }   
    }

    if(usertype == 3)
    {
        if(comptype == 1)
        {
            document.getElementById('warrior1').style.background = 'rgba(0,255,0,0.1)'
            console.log('wygrana!')
        }
        else if(comptype == 2)
        {
            document.getElementById('warrior1').style.background = 'rgba(255,0,0,0.1)'
            console.log('przegrana!')
        }
        else if(comptype == 3)
        {
            document.getElementById('warrior1').style.background = 'rgba(255,255,0,0.1)'
            console.log('remis!')
        }   
    }

    console.log('user: ' + usertype + '; computer: ' + comptype)
}
