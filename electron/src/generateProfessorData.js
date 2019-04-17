
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
