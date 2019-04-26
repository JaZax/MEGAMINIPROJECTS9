var output = document.getElementById('output')
window.addEventListener('keypress' , function(event){
    var keyid = event.keyCode;
    document.getElementById('output').innerHTML = keyid
})