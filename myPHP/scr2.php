<?php

require "functions.php";

$login = $_REQUEST['login'] . "";
$password = $_REQUEST['password'] . "";

$b = correctLogPas($login,$password);

if($b == true) 
	stop("YES");
else
	stop("NO");

?>