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