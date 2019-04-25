function rotate()
{
    var degr = document.getElementById("num").value;
    var square = document.getElementById("square");
    var output = document.getElementById("output");
    
    square.style.transform = "rotate("+degr+"deg)";
    
    if(degr==180)
    {
    square.style.border = "9px solid white";       
    }
    else if(degr==0)
    {    
    square.style.border = "9px solid white";       
    }
    else if(degr==90)
    {    
    square.style.border = "9px solid white";       
    }
    else if(degr==270)
    {    
    square.style.border = "9px solid white";       
    }
    else if(degr==360)
    {    
    square.style.border = "9px solid white";       
    }
    else
    {    
    square.style.border = "9px solid #01cf92";       
    }
    output.innerHTML = degr;
    setTimeout(rotate, 1)
}
