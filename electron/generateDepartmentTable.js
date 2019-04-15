var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "scheduleDB"
});

let queryString1 = "select * from scheduleCSV where Instructors in (select name from professorData) and (Course like \'%CPSC%\' or Course like \'%DATA%\' or Course like \'%CYBR%\' or Course like \'%FSEM%\');";
let queryString2 = "select * from professorData;";

con.connect(function(err) {
    if (err) throw err;
    con.query(queryString1, function(err, courseData, fields) {
        if (err) throw err;
        con.query(queryString2, function(err, profData, fields) {
            if (err) throw err;
            console.log(courseData);
            console.log(profData);

            let tableHTML = '';
            tableHTML = tableHTML.concat('<thead>');
            tableHTML = tableHTML.concat('<tr>');
            tableHTML = tableHTML.concat('<th rowspan="2" scope="col">');
            tableHTML = tableHTML.concat('Instructors');
            tableHTML = tableHTML.concat('<a href="prof_data.html"><img class="icon" src="images/edit_icon.png" height="25px" width="25px"></a>');
            tableHTML = tableHTML.concat('</th>');
            tableHTML = tableHTML.concat('<th colspan="5" scope="colgroup">Office Hours</th>');
            tableHTML = tableHTML.concat('<th rowspan="2" scope="col">Course(s)</th>');
            tableHTML = tableHTML.concat('<th rowspan="2" scope="col">Times/Days of Classes</th>');
            tableHTML = tableHTML.concat('<th rowspan="2" scope="col">Rm. No.</th>');
            tableHTML = tableHTML.concat('</tr>');
            tableHTML = tableHTML.concat('<tr>');
            tableHTML = tableHTML.concat('<th scope="col">M</th>');
            tableHTML = tableHTML.concat('<th scope="col">T</th>');
            tableHTML = tableHTML.concat('<th scope="col">W</th>');
            tableHTML = tableHTML.concat('<th scope="col">Th</th>');
            tableHTML = tableHTML.concat('<th scope="col">F</th>');
            tableHTML = tableHTML.concat('</tr>');
            tableHTML = tableHTML.concat('</thead>');

            function mapFunction(index, professor) {
              if(index.Instructors == professor.name) {
                return index;
              }
              else{
                return null;
              }
            }

            // Each professor gets a <tbody> tag
            for (let i = 0; i <  profData.length; i++) {
                let professor= profData[i];
                let profCourses= courseData.map(index => mapFunction(index, professor));
                console.log(profCourses);

                /*tableHTML = tableHTML.concat('<tbody contenteditable="true">');

                // Init empty office hour cells
                tableHTML = tableHTML.concat('<tr>');
                for (let i = 0; i < 6; i++) {
                    tableHTML = tableHTML.concat('<td rowspan="' + ? ? NUM CLASSES ? ? +'"></td>');
                }
                tableHTML = tableHTML.concat('</tr>');

                // Make a <tr> for each class this prof has
                for (let i = 0; i < ? ? NUM CLASSES ? ? ; i++) {
                    tableHTML = tableHTML.concat('<tr>');

                    tableHTML = tableHTML.concat('<td>' + ? ? COURSE ? ? +'</td>');
                    tableHTML = tableHTML.concat('<td>' + ? ? MEETING TIME ? ? +'</td>');
                    tableHTML = tableHTML.concat('<td>' + ? ? ROOM NUM ? ? +'</td>');

                    tableHTML = tableHTML.concat('</tr>');
                }

                tableHTML = tableHTML.concat('</tbody>');*/

            }

            /*document.getElementById('schedule_table').innerHTML = tableHTML;*/
        });
    });
});