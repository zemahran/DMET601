<?php
echo "<h3 style='text-align:center'>Weather table populated by SQL :</h3><br/>";
echo "<table align='center'>
            <tr>
                <td style = 'border: 2px solid black; padding: 15px'>Day</td>
                <td style = 'border: 2px solid black; padding: 7px'>Highest</td>
                <td style = 'border: 2px solid black; padding: 7px'>Lowest</td>
            </tr>";

$db = mysqli_select_db($conn,"weatherconditions");
$query = mysqli_query($conn,"SELECT * FROM weatherinfo");
while($row = mysqli_fetch_array($query)){
    echo "<tr>";
    echo "<td style = 'border: 2px solid black; padding: 10px'>".$row["Day"]."</td>";
    echo "<td style = 'border: 2px solid black; padding: 5px'>".$row["Highest"]."</td>";
    echo "<td style = 'border: 2px solid black; padding: 5px'>".$row["Lowest"]."</td>";
    echo "</tr>";
}

echo "</table align='center'>";

echo "<br/>";

echo "<h3 style='text-align:center'>Records for which high temperature exceeds 28°C :</h3><br/>";

$queryii = mysqli_query($conn,"SELECT * FROM weatherinfo WHERE Highest > 28");
while($row = mysqli_fetch_array($queryii)){
    echo "<table align='center'><tr>";
    echo "<td style = 'border: 2px solid black; padding: 10px'>".$row["Day"]."</td>";
    echo "<td style = 'border: 2px solid black; padding: 5px'>".$row["Highest"]."</td>";
    echo "<td style = 'border: 2px solid black; padding: 5px'>".$row["Lowest"]."</td>";
    echo "</tr></table>";
}

echo "<br/>";

echo "<h3 style='text-align:center'>Records for which low temperature drops below 16°C :</h3><br/>";

$queryiii = mysqli_query($conn,"SELECT * FROM weatherinfo WHERE Lowest < 16");
while($row = mysqli_fetch_array($queryiii)){
    echo "<table align='center'><tr>";
    echo "<td style = 'border: 2px solid black; padding: 10px'>".$row["Day"]."</td>";
    echo "<td style = 'border: 2px solid black; padding: 5px'>".$row["Highest"]."</td>";
    echo "<td style = 'border: 2px solid black; padding: 5px'>".$row["Lowest"]."</td>";
    echo "</tr></table>";
}

mysqli_close($conn);
?>