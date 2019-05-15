
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const quests = document.querySelector('#quests');
let count = 0;

btn.addEventListener('click', ()=>{

    let questcontent = document.querySelector('#quest').value;

    if(questcontent)
    {
    count++;
    
    let quest = document.createElement('div')

    quest.innerHTML = questcontent
    quest.id = `nr${count}`
    quest.className = 'quest'
    quest.addEventListener('dblclick', ()=>{
        let currentid = quest.id;
        let currentquest = document.querySelector(`#${currentid}`)

        currentquest.remove();
    })

    quests.appendChild(quest)
    }else{
        alert("quest hasn't been passed")
    }
})  

btn2.addEventListener('click', ()=>{

    if(count > 0)
    {
        $('.quest').remove();
    }else{
        alert('There are not any quests')
    }

})

window.onkeypress = function(event) {
    if (event.keyCode == 13) {
        btn.click()
    }
 }