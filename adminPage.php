<!doctype html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>CB AdminPage</title>
	
	<style>
	.myTr
	{
		padding-top: 15px;
		padding-bottom: 15px;
		padding-left: 30px;
		padding-right: 30px;
	}
	</style>
</head>
<body>

<?php

require "myPHP/functions.php";

if( isset($_REQUEST['xyz']) == false )
{
	stop("<h1>_ _ _ _ _ _ _</h1>");
}

$xyz = $_REQUEST['xyz'] . "";

if($xyz != "1996")
{
	stop("<h1>_ _ _ _ _ _ _</h1>");
}

printAllUsers();

?>

<br>
<br>
<br>
<br>

</body>
</html>
