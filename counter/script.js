var count = 0;

function increase()
{
    count++;
    document.getElementById("count").innerHTML = count;
}

function reset()
{
    count = 0;
    document.getElementById("count").innerHTML = count;
}