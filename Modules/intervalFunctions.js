function heroInterval()
{
	isPulaHitSomebody();
	pullsMove();
	deleteSomeVrags();
	deleteSomePulls();
	heroMove();
	allVragsMove();
	isHeroDead();
	clearAll();
	printAllWallsAndVrags();
	drawAllPulls();
	drawHero();
}

function fireInterval()
{
	pushPull(hero.x + 25,hero.y + 25);
	incTimeOfAllPulls();
	console.log("Pulls:  " + pullsCount + " __ " + pulls.length);
	console.log("Vrags:  " + vragCount + " __ " + vrag.length);
	console.log("__________________");
}

