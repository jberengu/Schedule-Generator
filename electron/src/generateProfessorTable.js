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
    var month = d.getMonth();
    var semester;
    if (month >= 7 && month <= 11) {
        semester = "Fall";
    } else if (month <= 4) {
        semester = "Spring";
    } else {
        semester = "Summer";
    }
    var tableHTML = '';
    var element = document.getElementById("profDropDown");
    var strUser = element.options[element.selectedIndex];
    var queryString1 = "select * from professorData where name='" + strUser.value + "';";
    var queryString2 = "select * from scheduleCSV where Instructors = '" + strUser.value + "'  and (Course like '%CPSC%' or Course like '%DATA%' or Course like '%CYBR%' or Course like '%FSEM%');";
        con.query(queryString1, function(err, results, fields) {
            if (err) throw err;
            tableHTML = tableHTML.concat('<h2>' + semester + ' ' + d.getFullYear() + '</h2>');
            tableHTML = tableHTML.concat('<h2>' + strUser.value + '</h2>');
            tableHTML = tableHTML.concat('<h3>' + results[0].office + '</h3>');
            tableHTML = tableHTML.concat('<h3>' + results[0].phone + '</h3>');
            tableHTML = tableHTML.concat('<h3>' + results[0].email + '</h3>');
            tableHTML = tableHTML.concat('<table>');
            tableHTML = tableHTML.concat('<thead>');
            tableHTML = tableHTML.concat('</tr>');
            tableHTML = tableHTML.concat('<th colspan="5" scope="colgroup">Office Hours<br>(Other times available by appointment)</th>');
            tableHTML = tableHTML.concat('<tr>');
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: orange;">M</th>');
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: lightpink;">T</th>');
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: lightblue;">W</th>');
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: olivedrab;">Th</th>');
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: chocolate;">F</th>');
            tableHTML = tableHTML.concat('</tr>');
            tableHTML = tableHTML.concat('</thead>');
            tableHTML = tableHTML.concat('<tr>');
            for (let i = 0; i < 5; i++) {
                tableHTML = tableHTML.concat('<td rowspan="15" contenteditable="true"></td>');
            }
            tableHTML = tableHTML.concat('</tr>');
            tableHTML = tableHTML.concat('</table>');

            tableHTML = tableHTML.concat('<table>');
            tableHTML = tableHTML.concat('<thead>');
            tableHTML = tableHTML.concat('</tr>');
            tableHTML = tableHTML.concat('<th colspan="5" scope="colgroup">Class Schedule</th>');
            tableHTML = tableHTML.concat('<tr>');
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: khaki;">Course(s)</th>');
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: khaki;">Times/Days of Class(es)</th>');
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: khaki;">Rm. No.</th>');
            tableHTML = tableHTML.concat('</tr>');
            tableHTML = tableHTML.concat('</thead>');

            con.query(queryString2, function(err, results, fields) {
                if (err) throw err;
                for (let i = 0; i < results.length; i++) {
                    tableHTML = tableHTML.concat('<tbody>');
                    tableHTML = tableHTML.concat('<td rowspan="15" contenteditable="true">' + results[i].Course + '-' + results[i].Sec + '</td>');
                    tableHTML = tableHTML.concat('<td rowspan="15" contenteditable="true">' + results[i].TIME + ' (' + results[i].Days + ')</td>');
                    tableHTML = tableHTML.concat('<td rowspan="15" contenteditable="true">' + results[i].Rooms + '</td>');
                    tableHTML = tableHTML.concat('</tbody>');
                }
                tableHTML = tableHTML.concat('</table>');
                document.getElementById('Professor_Table').innerHTML = tableHTML;
        });
    });
}