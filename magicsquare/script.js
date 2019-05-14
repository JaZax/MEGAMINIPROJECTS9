function print (){

    const inputvalues = new Array(9);

    inputvalues[0] = parseInt(document.getElementById('i1').value);
    inputvalues[1] = parseInt(document.getElementById('i2').value);
    inputvalues[2] = parseInt(document.getElementById('i3').value);
    inputvalues[3] = parseInt(document.getElementById('i4').value);
    inputvalues[4] = parseInt(document.getElementById('i5').value);
    inputvalues[5] = parseInt(document.getElementById('i6').value);
    inputvalues[6] = parseInt(document.getElementById('i7').value);
    inputvalues[7] = parseInt(document.getElementById('i8').value);
    inputvalues[8] = parseInt(document.getElementById('i9').value);

    for(i = 0 ; i < inputvalues.length ; i++)
    {   

        switch(i)
        {
            case 0:
            console.log(inputvalues[0] + inputvalues[1] + inputvalues[2]);
            
            case 3:
            console.log(inputvalues[3] + inputvalues[4] + inputvalues[5]);

            case 6:
            console.log(inputvalues[6] + inputvalues[7] + inputvalues[8]);

            default:
            console.log('nic')
        }
        
    }

}