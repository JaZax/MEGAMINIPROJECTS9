
const block = document.querySelector('#block');

block.addEventListener('click', ()=>{

    if(block.style.background != 'red')
    {
        block.style.background = 'red'
    }else{
        block.style.background = 'transparent'
    }
        

})