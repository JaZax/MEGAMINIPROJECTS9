function fuel()
{
    var output = document.getElementById("output");

    var price = document.getElementById("price").value; 
    var distance = document.getElementById("distance").value; 
    var firing = document.getElementById("firing").value; 
  
    var totalcost = (price*firing);

    output.innerHTML = totalcost;
}