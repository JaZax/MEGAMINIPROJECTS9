function main()
{
    var input = document.getElementById("input").value;
    var font_size = document.getElementById("size").value;
    document.getElementById("output").style.fontSize = font_size + 'px';

    document.getElementById("output").innerHTML = input + ' ' + font_size;

    setTimeout(main, 1)
}

window.onload = main;