
function write()
{
    var output = output = document.getElementById("output");

    var price = document.getElementById("price").value;
    var people = document.getElementById("people").value;

    var percent = document.getElementById("percent").value;

    var tip = price * percent/100;
    var alltip  = tip / people;

    const alltip_string = alltip.toString();
    const alltip_after = Number(alltip_string.slice(0,4));
    alltip = alltip_after;

    var totalprice = price * 1 + tip* 1;
    const totalprice_string = totalprice.toString();
    const totalprice_after = Number(totalprice_string.slice(0,4));
    totalprice = totalprice_after;

    var divided_price = totalprice/people;
    
    const divided_price_string = divided_price.toString();
    const divided_price_cut = Number(divided_price_string.slice(0,4))
    divided_price = divided_price_cut;
    
    
    output.innerHTML = 
    'cena: ' + price + 
    '<br> liczba ludzi: ' + people +
    '<br> procent napiwku: ' + percent + 
    '<br> napiwek: ' + tip + 
    '<br> napiwek od każdego: ' + alltip + 
    '<br> Do zapłaty: ' + totalprice + 
    '<br> Do zapłaty na osobę: ' + divided_price;

    
    setTimeout(write, 1)
}