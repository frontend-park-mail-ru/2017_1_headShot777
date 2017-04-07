<?php

require "functions.php";

$login = $_REQUEST['login'] . "";
$password = $_REQUEST['password'] . "";

if( isLoginIdDB($login) == true )
{
	stop("NO");
}

addUser($login,$password);

stop("YES");

?>