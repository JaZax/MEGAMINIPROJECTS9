function print (){
    
    const input = 
    {
        one : parseInt(document.getElementById('i1').value),
        two : parseInt(document.getElementById('i2').value),
        three : parseInt(document.getElementById('i3').value),
        four : parseInt(document.getElementById('i4').value),
        five : parseInt(document.getElementById('i5').value),
        six : parseInt(document.getElementById('i6').value),
        seven : parseInt(document.getElementById('i7').value),
        eight : parseInt(document.getElementById('i8').value),
        nine : parseInt(document.getElementById('i9').value),
    }

    const cases = 
    {
        one : input.one + input.two + input.three,
        two : input.four + input.five + input.six,
        three : input.seven + input.eight + input.nine,
        four : input.one + input.four + input.seven,
        five : input.two + input.five + input.eight,
        six : input.three + input.six + input.nine,
        seven : input.one + input.five + input.nine,
        eight : input.three + input.five + input.seven,
    }

    var sum = cases

    console.log(sum)
}