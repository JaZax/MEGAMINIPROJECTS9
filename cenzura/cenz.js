function censure()
{
    var output = document.getElementById("output");
    var text = document.getElementById("text").value;
    var length = text.length;
    var result = text.slice(1,length-1);
    
    output.innerHTML = text + '<br> ' + result;
}