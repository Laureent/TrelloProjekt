let token = document.getElementById('token').value;
let apikey =document.getElementById('apikey').value;
let tables = Array();

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


