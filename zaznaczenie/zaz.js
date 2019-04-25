function bold()
{
    var sel = window.getSelection().toString();
    var output = document.getElementById('output');

    output.style.fontWeight = "900"
    output.innerHTML = sel;

    setTimeout(select, 1)
}
function italic()
{
    var sel = window.getSelection().toString();
    var output = document.getElementById('output');

    output.style.fontStyle = "italic";
    output.innerHTML = sel;

    setTimeout(select, 1)
}
function under()
{
    var sel = window.getSelection().toString();
    var output = document.getElementById('output');

    output.style.textDecoration = "underline";
    output.innerHTML = sel;

    setTimeout(select, 1)
}