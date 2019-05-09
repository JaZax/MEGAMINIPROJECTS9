var base, index, result, last;
const regex = /[1-9]$/

window.onload = ()=>
{
    var btn = document.getElementById("btn");

    btn.addEventListener('click', ()=>{
    
        base = document.getElementById('base').value;
        index = document.getElementById('index').value;
        result = Math.pow(base, index);
        console.log(regex.test(result));

        document.getElementById('result').innerHTML = result;

        last = regex.exec(result);

        console.log(last[0])
})
}

    