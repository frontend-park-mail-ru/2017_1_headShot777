<?php

function stop($s)
{
	echo $s . "";
	exit();
	die("");
}

$GLOBALS["serv11"] = "localhost";
$GLOBALS["usr11"] = "root";
$GLOBALS["pas11"] = "";
$GLOBALS["db"] = "bbb";

function getLink()
{
	$link = mysqli_connect( $GLOBALS["serv11"] , $GLOBALS["usr11"], $GLOBALS["pas11"] );  
	return $link;
}

function correctLogPas($u1,$u2)
{
	$link = getLink();
	mysqli_select_db($link, $GLOBALS["db"]);
	
	$result = mysqli_query($link, 'select u1,u2 from u;');
	
	$flag = false;
	
	while( $row = mysqli_fetch_row($result) )
	{
		if($u1 == $row[0])
			if($u2 == $row[1])
				$flag = true;
	}
	
	mysqli_close($link); 
	
	return $flag;
}

function isLoginIdDB($u1)
{
	$link = getLink();
	mysqli_select_db($link, $GLOBALS["db"]);
	
	$result = mysqli_query($link, 'select u1 from u;');
	
	$flag = false;
	
	while( $row = mysqli_fetch_row($result) )
	{
		if($u1 == $row[0]) $flag = true;
	}
	
	mysqli_close($link); 
	
	return $flag;
}

function addUser($u1,$u2)
{
	$link = getLink();
	mysqli_select_db($link, $GLOBALS["db"]);	
	$result = mysqli_query($link, " insert into u (u1,u2,x1,x2,x3,x4,x5) values ('{$u1}','{$u2}',0,0,0,0,0); ");
	mysqli_close($link); 
}


function getNumberOfLogin($u1)
{
	$link = getLink();
	mysqli_select_db($link, $GLOBALS["db"]);
	
	$result = mysqli_query($link, 'select u0,u1 from u;');
	
	$answer = -1;
	
	while( $row = mysqli_fetch_row($result) )
	{
		if($u1 == $row[1])
		{
			$answer = $row[0] + 0;
		}
	}
	
	mysqli_close($link); 
	
	return $answer;
}

function getInfoOfUser($userId)
{
	$link = getLink();
	mysqli_select_db($link, $GLOBALS["db"]);	
	$result = mysqli_query($link, " select * from u where u0 = {$userId}; ");
	$answer = "";
	while( $row = mysqli_fetch_row($result) )
	{
		$answer = $row;
	}
	mysqli_close($link); 
	return $answer;
}

function addPoints($userId, $number)
{
	$info = getInfoOfUser($userId);
	
	$u0 = $info[0] + 0;
	$u1 = $info[1] . "";
	$u2 = $info[2] . "";
	$x1 = $info[3] + 0;
	$x2 = $info[4] + 0;
	$x3 = $info[5] + 0;
	$x4 = $info[6] + 0;
	$x5 = $info[7] + 0;
	
	if($number == 1) $x1++;
	if($number == 2) $x2++;
	if($number == 3) $x3++;
	if($number == 4) $x4++;
	if($number == 5) $x5++;
	
	$link = getLink();
	mysqli_select_db($link, $GLOBALS["db"]);
	
	$result = mysqli_query($link, " update u set x1 = {$x1}, x2 = {$x2}, x3 = {$x3}, x4 = {$x4}, x5 = {$x5} where u0 = {$userId}; ");
	mysqli_close($link); 
}


function printAllUsers()
{
	$link = getLink();
	mysqli_select_db($link, $GLOBALS["db"]);	
	$result = mysqli_query($link, 'select * from u order by u0;');	
	
	echo "<h1>CB AdminPage</h1><hr><br>";
	
	echo "<table border = '2px'>";
	
	echo "<tr>";
	echo "<td class = 'myTr'><h2>" . "u0" . "</h2></td>";
	echo "<td class = 'myTr'><h2>" . "u1" . "</h2></td>";
	echo "<td class = 'myTr'><h2>" . "u2" . "</h2></td>";
	echo "<td class = 'myTr'><h2>" . "x1" . "</h2></td>";
	echo "<td class = 'myTr'><h2>" . "x2" . "</h2></td>";
	echo "<td class = 'myTr'><h2>" . "x3" . "</h2></td>";
	echo "<td class = 'myTr'><h2>" . "x4" . "</h2></td>";
	echo "<td class = 'myTr'><h2>" . "x5" . "</h2></td>";
	echo "</tr>";
	
	while( $row = mysqli_fetch_row($result) )
	{
		echo "<tr>";
		echo "<td>" . $row[0] . "</td>";
		echo "<td>" . $row[1] . "</td>";
		echo "<td>" . $row[2] . "</td>";
		echo "<td>" . $row[3] . "</td>";
		echo "<td>" . $row[4] . "</td>";
		echo "<td>" . $row[5] . "</td>";
		echo "<td>" . $row[6] . "</td>";
		echo "<td>" . $row[7] . "</td>";
		echo "</tr>";
	}
	
	echo "</table>";
	
	mysqli_close($link); 
}



?>