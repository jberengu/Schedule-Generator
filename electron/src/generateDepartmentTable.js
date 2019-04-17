var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "scheduleDB"
});

let queryString1 = "select * from scheduleCSV where Instructors in (select name from professorData) and (Course like \'%CPSC%\' or Course like \'%DATA%\' or Course like \'%CYBR%\' or Course like \'%FSEM%\');";
let queryString2 = "select * from professorData;";

//con.connect(function(err) {
  //  if (err) throw err;
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
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: orange;">M</th>');
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: lightpink;">T</th>');
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: lightblue;">W</th>');
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: olivedrab;">Th</th>');
            tableHTML = tableHTML.concat('<th scope="col" style="background-color: chocolate;">F</th>');
            tableHTML = tableHTML.concat('</tr>');
            tableHTML = tableHTML.concat('</thead>');

            for (let i = 0; i < profData.length; i++) {

                // Build an array full of our professor data
                let professor = profData[i];
                let profCourses = [];
                for (let x = 0; x < courseData.length; x++) {
                    if (courseData[x].Instructors == professor.name) {
                        profCourses.push(courseData[x]);
                    }
                }

                // Space each tbody with a green box
                tableHTML = tableHTML.concat('<tr style="background-color: lightgreen;"></tr>');

                // Each professor gets a <tbody> tag
                tableHTML = tableHTML.concat('<tbody contenteditable="true">');

                // Init empty office hour cells
                tableHTML = tableHTML.concat('<tr>');
                tableHTML = tableHTML.concat('<td rowspan="' + (profCourses.length + 1) + '"><div>' + professor.name + '</div>' + '<div>' + professor.office + ' - ' + professor.phone + '</div>' + '<div>' + professor.email + '</div></td>');
                for (let i = 0; i < 5; i++) {
                    tableHTML = tableHTML.concat('<td rowspan="' + (profCourses.length + 1) + '"></td>');
                }
                tableHTML = tableHTML.concat('</tr>');



                // Make a <tr> for each class this prof has
                for (let i = 0; i < profCourses.length; i++) {
                    tableHTML = tableHTML.concat('<tr>');

                    tableHTML = tableHTML.concat('<td>' + profCourses[i].Course + '</td>');
                    tableHTML = tableHTML.concat('<td>' + profCourses[i].TIME + ' (' + profCourses[i].Days + ')</td>');
                    tableHTML = tableHTML.concat('<td>' + profCourses[i].Bldgs + ' ' + profCourses[i].Rooms + '</td>');

                    tableHTML = tableHTML.concat('</tr>');
                }

                tableHTML = tableHTML.concat('</tbody>');

            }

            document.getElementById('schedule_table').innerHTML = tableHTML;
        //});
    });
});




