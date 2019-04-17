<<<<<<< HEAD
document.getElementById("profDropDown").onchange = function() { myFunction() };

function myFunction() {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "scheduleDB"
    });
    var d = new Date();
    var month= d.getMonth();
    var semester;
    if(month >= 7 && month <= 11){
        semester = "Fall";
    }else if(month <= 4){
        semester = "Spring";
    }else{
        semester = "Summer";
    }
    var tableHTML = '';
    var element = document.getElementById("profDropDown");
    var strUser = element.options[element.selectedIndex];
    console.log(strUser.value);
    queryString1 = "select * from professorData where name='"+strUser.value+"';";
    console.log(queryString1);
    con.connect(function(err) {
        if (err) throw err;
        
        con.query(queryString1, function(err, results, fields) {
            console.log(results[0]);
            tableHTML= tableHTML.concat('<h2>'+semester+' '+ d.getFullYear()+'</h2>');
            tableHTML= tableHTML.concat('<h2>'+strUser.value+'</h2>');
            tableHTML= tableHTML.concat('<h3>'+results[0].office+'</h3>');
            tableHTML= tableHTML.concat('<h3>'+results[0].phone+'</h3>');
            tableHTML= tableHTML.concat('<h3>'+results[0].email+'</h3>');
            console.log(tableHTML);
            if (err) throw err;
            /*tableHTML = tableHTML.concat('<select>');
            for (let i = 0; i < results.length; i++) {
                tableHTML = tableHTML.concat('<option value="' + results[i].name + '">' + results[i].name + '</option>');
            }
            tableHTML = tableHTML.concat('</select>');*/
            document.getElementById('Professor Table').innerHTML = tableHTML;
        })
    });
}
=======
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "scheduleDB"
});

//let queryString1 = "select * from scheduleCSV where Instructors in (select name from professorData) and (Course like \'%CPSC%\' or Course like \'%DATA%\' or Course like \'%CYBR%\' or Course like \'%FSEM%\');";
let query = "select * from professorData;";

con.connect(function(err) {
    con.query(query, function(err, profData, fields) {
        if (err) throw err;
        //console.log(profData);

        let tableHTML = '';
        tableHTML = tableHTML.concat('<thead>');
        tableHTML = tableHTML.concat('<th>Professor</th>');
        tableHTML = tableHTML.concat('<th>Phone</th>');
        tableHTML = tableHTML.concat('<th>Office</th>');
        tableHTML = tableHTML.concat('<th>Email</th>');
        tableHTML = tableHTML.concat('<th>Delete Me?</th>');
        tableHTML = tableHTML.concat('</thead>');
        tableHTML = tableHTML.concat('<tbody contenteditable="true">');

        for (let i = 0; i < profData.length; i++) {
            tableHTML = tableHTML.concat('<tr>');
            tableHTML = tableHTML.concat('<td>' + profData[i].name + '</td>');
            tableHTML = tableHTML.concat('<td>' + profData[i].phone + '</td>');
            tableHTML = tableHTML.concat('<td>' + profData[i].office + '</td>');
            tableHTML = tableHTML.concat('<td>' + profData[i].email + '</td>');
           // <input type="button" id="bt" value="Create Checkbox" onclick="createChk(prod)" />
            tableHTML = tableHTML.concat("<td> <input class=deleteMe name=" + "'" + profData[i].name +"'" + 'type=button onclick=deleteThis(this) value=DELETE></td>')
            tableHTML = tableHTML.concat('</tr>');
        }

        tableHTML = tableHTML.concat('</tbody>');

        //console.log(tableHTML)
        document.getElementById('ProfessorTable').innerHTML = tableHTML;
    })
});
>>>>>>> b20e2e3916cee46d7c4c99724f1926447984e0f8
