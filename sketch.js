/*
Final Project submission
*/
//=======Global variables========
let gameChar_x, gameChar_y, floorPos_y;
let isLeft, isRight, isFalling, isPlummeting;
let lives;
let mountains, trees_x, canyons, hearts;
let cloud, clouds, raindrops, numRaindrops;
let gameOver, game_score;
let cameraPosX, isFound, rotation;
let level2Timer, levelMessage, level3Timer, lastCheckpoint, level4Timer;
let jumpCount, platforms, onPlatforms, onPlatform;
let platformFactory, platform;
let jumpSound, rainSound, coinSound, plummetingSound, gameoverSound;
let levelupSound, victorySound, bombblastSound;
let enemyrobotcollisionSound, enemyrobotlazerSound;
let haslazerCollided;
let soundsLoadedCount = 0;
let enemyRobots;
let hasCollided;
let char_x, char_y, charWidth, charHeight;
let velocityY, gravity, onGround;
var minTreeX, maxTreeX, treeCount, minTreeSpacing, isInCanyon;
let numCollectables, numHearts, minSpacing;
let showIntro;
let soundsStarted;

//Load sound effects
function preload() {
	soundFormats('mp3', 'wav');

	// Load both sounds and ensure they are fully ready before use
	rainSound = loadSound('sounds/rain_background.mp3', soundsLoaded);
	jumpSound = loadSound('sounds/jump_sound.mp3', soundsLoaded);
	coinSound = loadSound('sounds/collectable_sound.wav', soundsLoaded);
	plummetingSound = loadSound('sounds/canyonplummetingsound.mp3', soundsLoaded);
	gameoverSound = loadSound('sounds/gameoverSound.wav', soundsLoaded);
	levelupSound = loadSound('sounds/levelup_sound.wav', soundsLoaded);
	bombblastSound = loadSound('sounds/bomb_blast.mp3', soundsLoaded);
	enemyrobotcollisionSound = loadSound('sounds/enemyrobotcollisionSound.mp3', soundsLoaded);
	enemyrobotlazerSound = loadSound('sounds/robot_enemy_lazer.wav', soundsLoaded);
	victorySound = loadSound('sounds/victory_sound.wav', soundsLoaded);
}

// Callback to adjust sound settings once all sounds are loaded
function soundsLoaded() {
	soundsLoadedCount++;

	if (soundsLoadedCount === 10) {
		jumpSound.setVolume(0.4);
		jumpSound.playMode('restart');
		rainSound.setVolume(0.2);
		rainSound.play();
		rainSound.loop();
		coinSound.setVolume(0.6);
		plummetingSound.setVolume(0.5);
		gameoverSound.setVolume(0.5);
		levelupSound.setVolume(0.5);
		bombblastSound.setVolume(0.5);
		enemyrobotcollisionSound.setVolume(0.5);
		enemyrobotlazerSound.setVolume(0.5);
		victorySound.setVolume(0.5);
	}
}

//initialise game environment
function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	startgame();//initialise game state
}

function startgame() {
	// Reset character position and movement states
	gameChar_x = 10
	gameChar_y = floorPos_y;
	isRight = false;
	isLeft = false;
	isFalling = false;
	isPlummeting = false;
	hasCollided = false;
	haslazerCollided = false;
	gameOver = false;
	onPlatforms = false;
	soundsStarted = false;
	lastCheckpoint = { x: gameChar_x, y: floorPos_y };
	jumpCount = 0;
	lives = 3
	showIntro = true;
	// Character properties
	char_x = 100;
	char_y = 200;
	charWidth = 50;
	charHeight = 50;
	// Physics and movement
	velocityY = 0;
	gravity = 0.5;
	onGround = false;
	// Tree & Environment settings
	minTreeX = -100;
	maxTreeX = 500;
	treeCount = 10;
	minTreeSpacing = 100;
	// Collectables & Hearts
	numCollectables = 12;
	numHearts = 5;
	minSpacing = 100;
	// Initialize camera and score variables
	cameraPosX = 0;
	numRaindrops = 160
	game_score = 0;
	level2Timer = null;
	level3Timer = null;
	level4Timer = null;
	levelMessage = "";
	// Initialize the platform factory
	platformFactory = new PlatformFactory();

	// sun position and size
	sun = { x_pos: 80, y_pos: 80, size: 150 };


	// Initialize canyons with positions and widths
	canyons = [
		{ x_pos: 150, width: 100 },
		{ x_pos: 1250, width: 170 },
		{ x_pos: 2370, width: 130 },
		{ x_pos: 3370, width: 80 },
		{ x_pos: 4800, width: 150 },
		{ x_pos: 5550, width: 100 },
	];

	// Initialise mountains that are dynamically positioned across the game world with random heights and spacing.
	mountains = [];
	let mountainX = minTreeX;

	while (mountainX < 6000) {
		if (!isInCanyon(mountainX)) {
			let clusterSize = floor(random(1, 4));

			for (let j = 0; j < clusterSize; j++) {
				let xOffset = j * random(30, 80);
				let selectedHeight = random([170, 180, 185]);

				mountains.push({
					x_pos: mountainX + xOffset,
					height: selectedHeight,
					floorPos_y: floorPos_y
				});
			}
		}
		mountainX += 400 + random(100, 250);
	}

	// Initialize trees that are positioned dynamically, ensuring they don't appear inside canyons.
	trees_x = [];
	let x = minTreeX;

	while (x < 6500) {
		if (!isInCanyon(x)) {
			trees_x.push(x);
		}
		x += 500 + Math.floor(Math.random() * 200);
	}

	// Initialize clouds that are dynamically generated along the full game
	clouds = [];
	let lastX = -250;
	for (let i = 0; i < 40; i++) {
		let x_pos = lastX + random(150, 300);
		let y_pos = random(50, 200);
		let scale = 1;
		clouds.push({ x_pos, y_pos, scale });
		lastX = x_pos;
	}

	// Initialize raindrops with random positions and speeds
	raindrops = [];
	for (let i = 0; i < numRaindrops; i++) {
		let cloud = clouds[floor(random(0, clouds.length))];
		raindrops.push({
			x_pos: cloud.x_pos + random(30, 130),
			y_pos: cloud.y_pos + random(0, 2),
			size: random(3, 4),
			speed: random(3, 5),
			cloud: cloud
		});
	}

	// Initialize enemy robots with position, size,movement range,and lazer speed
	enemyRobots = [
		new EnemyRobot(450, 400, floorPos_y - 50, 40, 1, 100),
		new EnemyRobot(1000, 950, floorPos_y - 50, 40, 1, 180),
		new EnemyRobot(1150, 1100, floorPos_y - 255, 40, 1, 100),
		new EnemyRobot(1600, 1600, floorPos_y - 50, 40, 1, 150),
		new EnemyRobot(2200, 2150, floorPos_y - 50, 40, 2, 90),
		new EnemyRobot(2700, 2650, floorPos_y - 50, 40, 2, 150),
		new EnemyRobot(3200, 3150, floorPos_y - 50, 40, 2, 100),
		new EnemyRobot(3750, 3700, floorPos_y - 50, 40, 2, 80),
		new EnemyRobot(4350, 4300, floorPos_y - 50, 40, 2, 90, 4000),
		new EnemyRobot(4700, 4650, floorPos_y - 255, 40, 2, 80, 4000),
		new EnemyRobot(5300, 5250, floorPos_y - 50, 40, 2, 90, 4000),
	]

	//initaialise portal with position and state
	portal = [
		{ isReached: false, x_pos: 2000 },
		{ isReached: false, x_pos: 4000 },
		{ isReached: false, x_pos: 6000 }
	];

	//Initialise bombs with position,size and state
	bombs = [
		{ x_pos: 2290, y_pos: floorPos_y - 115, size: 25, blast: false },
		{ x_pos: 2700, y_pos: floorPos_y - 15, size: 25, blast: false },
		{ x_pos: 3040, y_pos: floorPos_y - 135, size: 25, blast: false },
		{ x_pos: 3580, y_pos: floorPos_y - 135, size: 25, blast: false },
		{ x_pos: 3650, y_pos: floorPos_y - 15, size: 25, blast: false },
		{ x_pos: 4300, y_pos: floorPos_y - 15, size: 25, blast: false },
		{ x_pos: 4600, y_pos: floorPos_y - 15, size: 25, blast: false },
		{ x_pos: 5080, y_pos: floorPos_y - 135, size: 25, blast: false },
		{ x_pos: 5400, y_pos: floorPos_y - 15, size: 25, blast: false },
		{ x_pos: 5800, y_pos: floorPos_y - 15, size: 25, blast: false },
	];

	//Initialise platforms with position,height and size
	platforms = [
		platformFactory.createPlatform(750, floorPos_y - 120, 120, 20),
		platformFactory.createPlatform(1000, floorPos_y - 200, 250, 20),
		platformFactory.createPlatform(2170, floorPos_y - 100, 140, 20),
		platformFactory.createPlatform(2900, floorPos_y - 120, 170, 20),
		platformFactory.createPlatform(3550, floorPos_y - 120, 150, 20),
		platformFactory.createPlatform(4300, floorPos_y - 120, 120, 20),
		platformFactory.createPlatform(4550, floorPos_y - 200, 250, 20),
		platformFactory.createPlatform(5000, floorPos_y - 120, 150, 20),
	];

	// Initialize collectables that randomly placed such that they appear both on platforms and the ground
	collectables = [];
	for (let platform of platforms) {
		let x = platform.x + platform.width / 2;
		let y = platform.y - 30;
		collectables.push({ x_pos: x, y_pos: y, size: 30, isFound: false, rotation: 0 });
	}
	for (let i = 0; i < numCollectables; i++) {
		let validPosition = false;
		let x, y;

		while (!validPosition) {
			x = random(-100, 6000);
			if (!isInCanyon(x) && !isOverlapping(x, collectables, minSpacing, 'x_pos')) {
				validPosition = true;
			}
		}
		y = floorPos_y - 30;
		collectables.push({ x_pos: x, y_pos: y, size: 30, isFound: false, rotation: 0 });
	}

	// Initialize hearts that randomly placed such that they appear across the game
	hearts = [];
	for (let i = 0; i < numHearts; i++) {
		let validPosition = false;
		let x, y;

		while (!validPosition) {
			x = random(100, 6000);

			if (!isInCanyon(x) && !isOverlapping(x, collectables, minSpacing, 'x_pos') && !isOverlapping(x, hearts, minSpacing, 'x')) {
				validPosition = true;
			}
		}
		let platform = getPlatformAtX(x);
		y = platform ? platform.y - 20 : floorPos_y - 80; // Above platform or slightly higher than coins on ground
		hearts.push({ x: x, y: y, collected: false });
	}
}

//Main game loop
function draw() {
	//Draw  background
	drawBackground();

	//Camera follows character smoothly
	cameraPosX = constrain(gameChar_x - 160, -150, 6500 - width);

	//Draw ground
	noStroke();
	fill(107, 142, 35);
	rect(0, floorPos_y, width, height - floorPos_y); //ground

	//draw sun
	fill(255, 222, 131);
	ellipse(sun.x_pos, sun.y_pos, sun.size, sun.size);

	push();
	//Apply camera translation to follow the player	push();
	translate(-cameraPosX, 0);

	//====Draw environment elements====
	drawMountains();
	drawTrees();
	drawClouds();
	drawRaindrops();
	//Draw and check interaction with canyons
	for (let i = 0; i < canyons.length; i++) {
		drawCanyons(canyons[i]);
		checkCanyons(canyons[i]);
	}

	//Draw and check interaction with hearts and collectables
	drawHearts();
	checkHeartCollection();
	for (let i = 0; i < collectables.length; i++) {
		drawCollectables(collectables[i]);
		checkCollectables(collectables[i]);
	}

	// game character & movement
	drawGameCharacter();
	gameCharacterMovement();

	//Draw and check interaction with enemies
	drawEnemyRobots();
	EnemyRobotMovement();
	checkRobotCollision();
	checkRobotLaserCollisions();
	drawBombs();
	checkBombCollision();

	//Draw portal & check portal interaction
	renderPortal();
	if (!portal.isReached) {
		checkPortal();
	}

	//Draw platforms & check character on platform
	platformFactory.drawAllPlatforms();
	platformFactory.checkCharacterOnAnyPlatform(gameChar_x, gameChar_y);

	//camera pop
	pop();

	//display remaining player lives
	drawLives();

	//Handle player death senario
	checkCharacterDie();

	//Dispaly coins Collected
	fill(0);
	noStroke();
	text("Coins collected: " + game_score, 50, 50);

	//Display "Game Over" message
	if (gameOver) {
		displayGameOver();
		return;
	}
	//Check if first portal is reached
	if (portal[0].isReached && !portal[1].isReached) {
		levelMessage = "LEVEL 2";
		if (!level2Timer) {
			level2Timer = millis();
			levelupSound.play();
		}

		// Show "LEVEL 2" for 3 seconds
		if (millis() - level2Timer < 3000) {
			displayLevelMessage(levelMessage);
		}
	}
	//Check if second portal is reached
	else if (portal[1].isReached && !portal[2].isReached) {
		levelMessage = "LEVEL 3";
		if (!level3Timer) {
			level3Timer = millis();
			levelupSound.play();
		}

		//Show "LEVEL 3" for 3 seconds
		if (millis() - level3Timer < 3000) {
			displayLevelMessage(levelMessage);
		}
	}
	//check if third portal is reached
	else if (portal[2].isReached) {
		levelMessage = "YOU WIN";
		if (!level4Timer) {
			level4Timer = millis();
			victorySound.play();
		}

		//Display "YOU WIN" for 2 seconds, then stop game
		if (millis() - level4Timer > 2000) {
			gameOver = true;
			noLoop();
			displayGameOver();
		}
	}

	if (showIntro) {
		displayIntroMessage();
		return; // Stop execution of the rest of the game loop until movement starts
	}
}
