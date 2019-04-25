function swap()
{
    var output = document.getElementById("output");

    var input = document.getElementById("input").value;
    var regex = /\s/g;

    const input_string = input.toString()
    var result = input_string.replace(regex, "👏")
    input = result;
    output.innerHTML = input;

    setTimeout(swap, 1)
}