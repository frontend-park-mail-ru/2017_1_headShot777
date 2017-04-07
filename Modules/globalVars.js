
let s1;
let s2;
let s3;
let s4;

let kkkk;

let login;
let password;

let t1;
let t2;

let can = document.getElementById('can');
let holst = can.getContext('2d');

let enemy = new Image();
enemy.src = ("Images/enemy.png");

let wall = new Image();
wall.src = ("Images/wall.jpg");

let backFon = new Image();
backFon.src = ("Images/backFon.jpg");

let m1 = new Image();
m1.src = ("Images/m1.png");

let m2 = new Image();
m2.src = ("Images/m2.png");

let m3 = new Image();
m3.src = ("Images/m3.png");

let m4 = new Image();
m4.src = ("Images/m4.png");

let worldX = 0;
let worldY = 0;

let vectorBefore = "UP";
let vector = "STOP";

let hero = new Object();
hero.x = 275;
hero.y = 275;
hero.speed = 5;

let vrag = new Array();
let vragCount = 0;

let walls = new Array();
let wallsCount = 0;

let pulls = new Array();
pullsCount = 0;
