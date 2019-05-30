const btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>
{
    
    const r = parseInt(document.querySelector('#r').value);
    const g = parseInt(document.querySelector('#g').value);
    const b = parseInt(document.querySelector('#b').value);

    let newr = r.toString(16).toUpperCase();
    let newg = g.toString(16).toUpperCase();
    let newb = b.toString(16).toUpperCase();

    if(newr.length == 1)
    {
        newr = '0' + r.toString(16).toUpperCase()
    }

    if(newg.length == 1)
    {
        newg = '0' + g.toString(16).toUpperCase()
    }

    if(newb.length == 1)
    {
        newb = '0' + b.toString(16).toUpperCase()
    }

    const result = '#' + newr + newg + newb;

    document.body.style.background = result
})

// r/badcode intensifies