
function check()
{
    var input = document.getElementById("input").value;
    document.getElementById("output").innerHTML = input;

    setTimeout(check, 1)
}
window.onload = check