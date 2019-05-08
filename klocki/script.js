window.addEventListener("mousedown", (event)=>{
    
    var block = document.createElement("div");
    var x = event.clientX;
    var y = event.clientY;

    block.id = 'block';
    block.style.border = '1px solid white';
    block.style.left = (x - 25) + "px";
    block.style.top = (y - 25) + "px";
    document.body.appendChild(block)

    window.onkeypress = function(event) {
        if (event.keyCode == 32) 
        {
            document.location.reload()    
        }
     }
})

