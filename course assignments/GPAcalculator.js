
var table = document.getElementById("table");


function add_row() {
	if(table.rows.length<=11){
		var row = table.insertRow(2);
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);

		cell0.innerHTML = '<input class="box" type="text" id="myID" value="">';
		cell1.innerHTML = '<input class="credits box" type="text" id="myID" value="">';

		var contents =
		'<select class="grade box">'
		+ '<option value="0.7">A+</option>'
		+ '<option value="1.0">A</option>'
		+ '<option value="1.3">A-</option>'
		+ '<option value="1.7">B+</option>'
		+ '<option value="2.0">B</option>'
		+ '<option value="2.3">B-</option>'
		+ '<option value="2.7">C+</option>'
		+ '<option value="3.0">C</option>'
		+ '<option value="3.3">C-</option>'
		+ '<option value="3.7">D+</option>'
		+ '<option value="4.0">D</option>'
		+ '<option value="5.0">F</option>'
		+ '</select>';

		//write whatever i like in form of a string

		cell2.innerHTML = contents;

	}
}


function calculate() {
	
	var txt = 0;
	var tmp1;
	var tmp2;
	var tmp3 = 0;
	var credits = 0;
	var e;
	var GPA;
	
	for (var i = 2, row; row = table.rows[i]; i++) {

		tmp1 = parseInt(document.getElementsByClassName("credits")[i-2].value);

		e = document.getElementsByClassName("grade")[i-2];
		tmp2 = parseFloat(e.options[e.selectedIndex].value);

		tmp3 += tmp1 * tmp2;

		credits += tmp1;
	}

	GPA = (tmp3/credits);
	GPA = GPA.toFixed(2);
	
	alert("Credits: "+credits+"\nGPA: "+GPA);
	
}
