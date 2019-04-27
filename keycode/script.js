const keys = 
{
    13 : 'enter',
    32 : 'space',
    45 : '-',
    48 : '0',
    49 : '1',
    50 : '2',
    51 : '3',
    52 : '4',
    53 : '5',
    54 : '6',
    55 : '7',
    56 : '8',
    57 : '9',
    61 : '+',
    96 : '`',
    97 : 'a',
    98 : 'b',
    99 : 'c',
    100 : 'd',
    101 : 'e',
    102 : 'f',
    103 : 'g',
    104 : 'h',
    105 : 'i',
    106 : 'j',
    107 : 'k',
    108 : 'l',
    109 : 'm',
    110 : 'n',
    111 : 'o',
    112 : 'p',
    113 : 'q',
    114 : 'r',
    115 : 's',
    116 : 't',
    117 : 'u',
    118 : 'v',
    119 : 'w',
    120 : 'x',
    121 : 'y',
    122 : 'z',
}

window.addEventListener('keypress' , function(event){

    var keyid = event.which;
    var location = event.location;
    document.getElementById('output').innerHTML = keyid;
    document.getElementById('key').innerHTML = keys[keyid]
})