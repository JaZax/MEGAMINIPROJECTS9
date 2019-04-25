function main()
{
    var random = Math.floor(Math.random()*3)+1;
    var sentence = '<img src="img/' + random + '.jpg">';
    
    document.getElementById('img').innerHTML = sentence;

    switch(random)
    {
        case 1:
        document.getElementById('desc').innerHTML = 'Ten pies jest masny';
        break;

        case 2:
        document.getElementById('desc').innerHTML = 'Ten pies jest masniejszy';
        break;

        case 3:
        document.getElementById('desc').innerHTML = 'Ten pies jest najmaśniejszy';
        break;
    }
}

window.onload = main;