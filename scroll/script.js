var num = 0;

function skrol()
{
    if(num< 300)
    {
        window.scroll(0, num);
        setTimeout(skrol(), 200)
        console.log(num)
    }
    else if(num >= 300)
    {
        num = 0;
        setTimeout(skrol(), 200)
    }
}

