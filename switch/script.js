var picture = 1;

function wpisz(direction)
{
    
    if(direction == 'right')
    {
        picture++

        if(picture == 5)
        {
            picture = 1
        }
        if(picture == 0)
        {
            picture = 4
        }
    };


    if(direction == 'left')
    {
        picture--

        if(picture == 5)
        {
            picture = 1
        }
        if(picture == 0)
        {
            picture = 4
        }

    };

    document.getElementById('img').innerHTML = '<img src="img/' + picture + '.jpg">';

    console.log(picture)
}