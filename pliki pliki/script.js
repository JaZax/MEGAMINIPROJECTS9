function get()
{
    var file = document.getElementById("file").files;

    document.getElementById("output").innerHTML = file;
}