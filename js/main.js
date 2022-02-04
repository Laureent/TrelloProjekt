let token = document.getElementById('token').value;
let apikey =document.getElementById('apikey').value;
let tables = Array();


/**
 * Bekéri a táblázatot az api kulcs és token alapján
 */
async function getTables(){   
    let response = await fetch("https://api.trello.com/1/members/me/boards?key="+apikey+"&token="+token+"");
    let data = await response.json();
    tables = data;
    showTables();
    document.getElementById('maketable').style.display = "none";
}

function showTables(){
    tables.forEach(element => {
        let button = document.createElement('button');
        button.innerText = element.name;
        button.className = "col tableButton";
        button.onclick = function() { displayTable(element.name); }
        document.getElementById('main').append(button);
    })
}

function displayTable(table){
    document.getElementById('main').style.display = "none";
}


