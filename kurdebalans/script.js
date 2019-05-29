const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
let x;
let y;

btn.addEventListener('click', ()=>{
    
    x = 0;
    y = 0;
    console.clear()

    for(i = 0 ; i < input.value.length ; i++)
    {
        if(input.value.toString().charAt(i) == 'x')
        {
            x++;
        }
        else if(input.value.toString().charAt(i) == 'y')
        {
            y++;
        }
    }

    if(x==y)
    {
        console.log('true')
    }else{
        console.log('false')
    }
})

window.onkeypress = function(event) {
    if (event.keyCode == 13) {
        btn.click()
    }
 }