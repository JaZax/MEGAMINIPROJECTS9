
const btn = document.querySelector('#btn');
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
