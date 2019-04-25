window.onload = function main(){

    var x = 0;
    
    setInterval(move(), 500)
    
    function move()
    {

        if(x<250)
        {
            x+=1;
            document.getElementById('object').style.left = x + 'px'
        }
    }

    //document.getElementById('object').style.left = 50 + 'px';
        

}