let token = document.getElementById('token').value;
let apikey = document.getElementById('apikey').value;
let tables = Array();
let cards = Array();
let lists = Array();


/**
 * Bekéri a táblázatot az api kulcs és token alapján
 */
async function getTables(){   
    let response = await fetch("https://api.trello.com/1/members/me/boards?key="+apikey.trim()+"&token="+token.trim());
    let data = await response.json();
    tables = data;
    showTables();
    document.getElementById('maketable').style.display = "none";
    console.log(tables)
}

function showTables(){
    tables.forEach(element => {
        let button = document.createElement('button');
        button.innerText = element.name;
        button.className = "col tableButton";
        button.onclick = function() { displayTable(element.id); }
        document.getElementById('main').append(button);
    })
}

function displayTable(tableid){
    document.getElementById('main').style.display = "none";
    getCards(tableid);
    getLists(tableid);
    let template = document.getElementsByTagName('template')[0];
    lists.forEach(element=>{
        let list = document.importNode(template,true);
        list.querySelector('h5').innerHTML = element.name;
        cards.forEach(card => {
            if(card.idList == element.id){
                let p = document.createElement('p');
                p.innerHTML = card.name;
                list.getElementsByClassName('card-body').append(p);
            }
        })
        document.getElementById('main').append(list);
    })
}

async function getLists(tableid){
    let response = await fetch("https://api.trello.com/1/boards/"+tableid+"/lists?key="+apikey.trim()+"&token="+token.trim());
    let data = await response.json();
    lists = data;
    console.log(lists);
}

async function getCards(tableid){
    let response = await fetch("https://api.trello.com/1/boards/"+tableid+"/cards?key="+apikey.trim()+"&token="+token.trim());
    let data = await response.json();
    cards = data;
    console.log(cards);
}


