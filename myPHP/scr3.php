<?php

require "functions.php";

$login = $_REQUEST['login'] . "";
$password = $_REQUEST['password'] . "";

$number = $_REQUEST['number'] . "";
$number = $number + 0;

$b = correctLogPas($login,$password);

if($b == false)
{
	stop("NO");
}

$userId = getNumberOfLogin($login . "") + 0;

addPoints($userId + 0, $number + 0);

stop("YES");


?>