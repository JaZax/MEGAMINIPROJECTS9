function validate()
{
    var pass = document.getElementById("pass").value;
    var length = pass.length;
    var output = document.getElementById("output");
    var output1 = document.getElementById("output1");
    var hasNumber = /\d/;
    var resultnum = hasNumber.test(pass); 
    var hasLetter  = /[A-Z]/ig;
    var resultLett = hasLetter.test(pass);
    var strenth = 0;
    

    if(length < 8)
    {
        output.style.color = "#FF5957"
        output.innerHTML = "❌hasło musi zawierać conajmniej 8 znaków"
    }
    else if (length >= 8)
    {
        output.style.color = "#00DD64"
        output.innerHTML = "✅hasło musi zawierać conajmniej 8 znaków"
        strenth += 20;
    };
    if(resultnum == false)
    {
        output1.style.color = "#FF5957"
        output1.innerHTML = "❌hasło musi zawierać conajmniej 1 liczbe"
    }
    else if(resultnum == true)
    {
        output1.style.color = "#00DD64"
        output1.innerHTML = "✅hasło musi zawierać conajmniej 1 liczbe"
        strenth += 20;
    };
    
    if(resultLett == false)
    {
        output2.style.color = "#FF5957"
        output2.innerHTML = "❌hasło musi zawierać conajmniej 1 litere"
    }
    else if(resultLett == true)
    {
        output2.style.color = "#00DD64";
        output2.innerHTML = "✅hasło musi zawierać conajmniej 1 litere";
    }
    setTimeout(validate , 100)
}

