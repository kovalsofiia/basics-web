var rows = document.getElementById('rows');
var cols = document.getElementById('cols');
var tableContainer = document.getElementById('tableContainer');

function buildTable(){

  var table = 'Table ' + rows.value+ ' and '+ cols.value;
  table+='<table border= 1 width= 100%>';
  for (var i = 1; i<= rows.value; i++){
    table+='<tr>';

    for(var j = 1; j<= cols.value; j++)
        table+='<td>'+i+j+ '</td>';
    
    table+='</tr>';
  }
  table+='</table>';
  tableContainer.innerHTML=table;
    
  }
buildTable();

rows.oninput = function(){
    buildTable;
}

cols.oninput = function(){
    buildTable;
}

