
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

        for(let i = 1 ; i <= 5 ; i++)
        {
            document.getElementById('star' + i).innerHTML = '<img src="img/disactive.png" height="100px">'
        }

    })

    document.getElementById(star_id).addEventListener('mouseover', ()=>{

        strength = star_nr;

        for(i = 1; i <= strength ; i++)
        {
            document.getElementById('star' + i).innerHTML = '<img src="img/active.png" height="100px">'
        }

    })

}

