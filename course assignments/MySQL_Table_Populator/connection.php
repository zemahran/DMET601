<?php
$servername = "localhost";
$username = "root";
$password = "";

//create connection
$conn = new mysqli($servername, $username, $password);

//check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error. "<br>");
} 
echo "Connected successfully". "<br>";


//create database
$db = "CREATE DATABASE weatherconditions";

if ($conn->query($db) === TRUE) {
    echo "Database created successfully". "<br>";
} else {
    echo "Error creating database: " . $conn->error. "<br>";
}


//create table
$create = "CREATE TABLE weatherconditions.WeatherInfo (
Day VARCHAR(30) PRIMARY KEY,
Highest VARCHAR(30),
Lowest VARCHAR(30)
)";

if ($conn->query($create) === TRUE) {
    echo "Table 'WeatherInfo' created successfully". "<br>";
} else {
    echo "Error creating table: " . $conn->error. "<br>";
}

//insert into table
$insert = "INSERT INTO weatherconditions.weatherinfo (Day,Highest,Lowest)
VALUES ('Sat','26°C','14°C'),
('Sun','28°C','15°C'),
('Mon','26°C','18°C'),
('Tue','29°C','14°C'),
('Wed','30°C','17°C'),
('Thu','32°C','19°C'),
('Fri','31°C','14°C')";

if ($conn->query($insert) === TRUE) {
    echo "New records created successfully". "<br>";
} else {
    echo "Error: " . $insert . "<br>" . $conn->error. "<br>";
}

?>







