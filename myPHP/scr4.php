<?php

require "functions.php";

$login = $_REQUEST['login'] . "";
$password = $_REQUEST['password'] . "";

$userId = getNumberOfLogin($login) + 0;

$info = getInfoOfUser($userId);

$u0 = $info[0] + 0;
$u1 = $info[1] . "";
$u2 = $info[2] . "";
$x1 = $info[3] + 0;
$x2 = $info[4] + 0;
$x3 = $info[5] + 0;
$x4 = $info[6] + 0;
$x5 = $info[7] + 0;

$s = $x1 . "_" . $x2 . "_" .  $x3 . "_" .  $x4 . "_" . $x5;

stop($s);

?>