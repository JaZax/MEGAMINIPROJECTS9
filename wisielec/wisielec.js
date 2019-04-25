var passes = new Array(10)

passes[0] = "elektryka prąd nie tyka";
passes[1] = "czas to pieniądz";
passes[2] = "diabeł nie śpi";
passes[3] = "fortuna kołem się toczy";
passes[4] = "bez pracy nie ma kołaczy";
passes[5] = "człowiek człowiekowi wilkiem";
passes[6] = "ćwiczenie czyni mistrza";
passes[7] = "czego oko nie widzi, tego sercu nie żal";
passes[8] = "do trzech razy sztuka";
passes[9] = "dla chcącego nic trudnego";

var random = Math.floor(Math.random()*passes.length);

var pass = passes[random];
var length = pass.length;
var fault = 0;
pass = pass.toUpperCase();

var pass2 = "";

for(i=0 ; i < length ; i++)
{
    if(pass.charAt(i)==" ")
    {
        pass2 = pass2 + " "
    }
    else
    {
        pass2 = pass2 + "_"
    }
}

function writepass()
{

    document.getElementById("word").innerHTML = pass2;

}


var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start()
{
    var divcontent = "";

    for(i=0 ; i<35 ; i++)
    {   
        var element = "let" + i;

        divcontent = divcontent + '<div class="letter" id="let' + i + '" onclick="check('+ i +')">' + litery[i] +'</div>'

        if((i+1)%7 == 0)
        {
            divcontent = divcontent + '<div class="clear"></div>'
        }
    };
    
    document.getElementById("letters").innerHTML = divcontent;
    writepass();
}

String.prototype.setChar = function(place, char)
{
    if(place> this.length-1)
    {
        return this.toString();
    }
    else
    {
        return this.substr(0, place) + char + this.substr(place+1)
    }
}


function check(nr)
{
    var hit = false;

    for(i=0 ; i<length ; i++)
    {
        if(pass.charAt(i)== litery[nr])
        {
            pass2 = pass2.setChar(i , litery[nr]);
            hit = true;
        }
    };
    
    if(hit == true)
    {
        var element = "let" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00ff00";
        document.getElementById(element).style.cursor = "default"
        document.getElementById(element).style.borderColor = "#00ff00";

        if(pass == pass2)
        {
        document.getElementById("letters").innerHTML = '<br>Wygrałeś <br><br> <span onclick="location.reload();" id="reload">Spróbuj ponownie</span><br><br>'+
        'Prawidłowe hasło to: ' + pass;
        }
        writepass()
    }
    else
    {
        var element = "let" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#ff0000";
        document.getElementById(element).style.cursor = "default"
        document.getElementById(element).style.borderColor = "#ff0000";
        fault++
        if(fault<9)
        {
            document.getElementById("hang").innerHTML = '<img src="img/s'+fault+'.jpg"></img>'
        }
        else
        {
            document.getElementById("hang").innerHTML = '<img src="img/s9.jpg"></img>'
            document.getElementById("letters").innerHTML = '<br>Przegrałeś <br><br> <span onclick="location.reload();" id="reload">Spróbuj ponownie</span><br><br>'+
            'Prawidłowe hasło to: ' + pass;
        }
    }
}

window.onload = start;