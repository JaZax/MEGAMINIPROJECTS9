function multi()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = num1 * num2;
    var output = document.getElementById("output");
    
    output.innerHTML = result;
}
function divide()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = num1 / num2;
    var output = document.getElementById("output");
    
    output.innerHTML = result;
}
function plus()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = num1 * 1 + num2 * 1;
    var output = document.getElementById("output");
    
    output.innerHTML = result;
}
function minus()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = num1 - num2;
    var output = document.getElementById("output");
    
    output.innerHTML = result;
}
