
let strength = 0;

const stars = {

    'star1' : 1,
    'star2' : 2,
    'star3' : 3,
    'star4' : 4,
    'star5' : 5,

}

for(i = 1 ; i <= 5 ; i++)
{

    let star_id = 'star' + i;
    let star_nr = stars[star_id];

    document.getElementById(star_id).addEventListener('mouseleave', ()=>{

        strength = star_nr;

        for(i = 1; i <= strength ; i++)
        {
            document.getElementById('star' + i).style.background = 'transparent';
        }

        document.getElementById(star_id).style.background = 'transparent'

    })

    document.getElementById(star_id).addEventListener('mouseover', ()=>{

        strength = star_nr;

        for(i = 1; i <= strength ; i++)
        {
            document.getElementById('star' + i).style.background = '#1b1b1b';
        }

    })

}

