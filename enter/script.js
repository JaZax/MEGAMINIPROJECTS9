
function buttontest()
{
    var input = document.getElementById('input').value;

    var thing = document.createElement('div');
    thing.innerHTML = input;

    document.body.appendChild(thing);
}