function addtxt()
{

    var input = document.getElementById('input').value;
    var output = document.getElementById('output');

    var message = document.createElement('message');

    message.className = 'message';
    message.innerHTML = input;

    output.appendChild(message);

}