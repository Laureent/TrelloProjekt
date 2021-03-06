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

/**
 * opciók megjelenítése
 */
function showTables(){
    tables.forEach(element => {
        let button = document.createElement('button');
        button.innerText = element.name;
        button.className = "col tableButton show-table";
        button.onclick = function() { displayTable(element.id); }
        document.getElementById('main').append(button);
    })
}

/**
 * táblák megjelenítése (listák, kártyák)
 * @param {number} tableid - a táblák id-ja
 */
async function displayTable(tableid){
    document.getElementById('main').innerHTML = "";
    await getCards(tableid);
    await getLists(tableid);
    let template = document.getElementsByTagName('template')[0].content;
    lists.forEach(element=>{
        let list = document.importNode(template,true);
        list.querySelector('h5').innerText = element.name;
        cards.forEach(card => {
            if(card.idList == element.id){
                let button = document.createElement('button');      
                let br = document.createElement('br');      
                button.innerHTML = card.name;
                button.className = "card-text";
                console.log(list);
                list.querySelector('.card-body').append(button);
                list.querySelector('.card-body').append(br);
            }
        })
        document.getElementById('main').append(list);       
    })
}



/**
 * Lista bekérése a tábla id-ja alapján
 * @param {number} tableid - a táblák id-ja
 */
async function getLists(tableid){
    let response = await fetch("https://api.trello.com/1/boards/"+tableid+"/lists?key="+apikey.trim()+"&token="+token.trim());
    let data = await response.json();
    lists = data;
    console.log(lists);
}

/**
 * kártyák bekérése a tábla id-ja alapján
 * @param {number} tableid - a táblák id-ja
 */
async function getCards(tableid){
    let response = await fetch("https://api.trello.com/1/boards/"+tableid+"/cards?key="+apikey.trim()+"&token="+token.trim());
    let data = await response.json();
    cards = data;
    console.log(cards);
}


