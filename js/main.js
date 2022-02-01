let token = document.getElementById('token').value;
let apikey = "6e9161711b4b1a09d3617140440da447";
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
    console.log(tables);
}


