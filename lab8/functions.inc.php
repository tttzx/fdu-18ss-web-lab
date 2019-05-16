<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        echo "<tr>";
        echo "<td><img src='images/books/tinysquare/".$file."'></td>";
        echo "<td class='mdl-data-table__cell--non-numeric'>".$title."</td>";
        echo "<td>".$quantity."</td>";
        echo "<td>$".$price."</td>";
        echo "<td>$".$quantity*$price."</td>";
        echo "</tr>";
    }
?>