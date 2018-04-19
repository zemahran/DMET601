var request = new XMLHttpRequest();
request.open("GET", "outVII.xml", false);
request.send();
var xmlDoc = request.responseXML;

var table = document.getElementById("table");

//first row (tables's header) (arabic is read backwards)
//index 0
var row = table.insertRow(0);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);

    cell0.innerHTML = xmlDoc.getElementsByTagName("Day")[0].childNodes[0].nodeValue;

    cell1.innerHTML = xmlDoc.getElementsByTagName("Highest")[0].childNodes[0].nodeValue;

    cell2.innerHTML = xmlDoc.getElementsByTagName("Lowest")[0].childNodes[0].nodeValue;

//the rest of the rows (2-8)
//indices 1-7
for (var i = 1; i <= 7; i++) {
    var row = table.insertRow(i);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);

    cell0.innerHTML = xmlDoc.getElementsByTagName("Lowest")[i].childNodes[0].nodeValue;

    cell1.innerHTML = xmlDoc.getElementsByTagName("Highest")[i].childNodes[0].nodeValue;

    cell2.innerHTML = xmlDoc.getElementsByTagName("Day")[i].childNodes[0].nodeValue;

}








