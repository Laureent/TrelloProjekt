let token = document.getElementById('token').value;
let apikey =document.getElementById('apikey').value;
let tables = Array();
let cards = Array();

/**
 * Bekéri a táblázatot az api kulcs és token alapján
 */
async function getTables(){   
    //let response = await fetch("https://api.trello.com/1/members/me/boards?key="+apikey+"&token="+token+"");
    let response = await fetch("https://api.trello.com/1/members/me/boards?key=7d05d50b5b8a4569bf25096ffbd2a384&token=bf48aa27fb42789832620a3c57ae6c8025c18bb94d7be86f11ce732f07c7dfa3");
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
    getCards(tableid)
}

// async function getCards(tableid){
//     let response = await fetch("https://api.trello.com/1/cards?key=7d05d50b5b8a4569bf25096ffbd2a384&token=bf48aa27fb42789832620a3c57ae6c8025c18bb94d7be86f11ce732f07c7dfa3");
// }


