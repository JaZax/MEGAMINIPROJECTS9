function main()
{
    var rand = Math.floor(Math.random()*6)+1
    document.getElementById("dice").innerHTML = '<img src="img/' + rand + '.png" alt="dice here">'
}
