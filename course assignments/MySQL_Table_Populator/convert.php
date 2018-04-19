<?php

//Converting the resulted .txt file to an .xml file

$uploaddir = '/assignII';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);


if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    echo "<br/>"."<h2 style='text-align:center'> Text File is successfully uploaded."."<br/>"."An xml file is created."."<br/>"."Press back and reload please! </h2>";
} else {
    echo "File upload is unsuccessful!\n";
}

$filename = $_FILES['userfile']['name'];


$myfile = fopen($filename, 'r');

$xml = new XMLWriter;
$xml->openURI('outVII.xml');
$xml->startDocument();
$xml->setIndent(true); // makes output cleaner

$xml->startElement('WeatherInfo');
while ($line = fgetcsv($myfile, 4096, " ")) {

$xml->startElement('DayInfo');

$xml->writeElement('Day', $line[2]);

$xml->writeElement('Highest', $line[1]);

$xml->writeElement('Lowest', $line[0]);

$xml->endElement();
}
$xml->endElement();
fclose($myfile);

?>