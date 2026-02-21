<<<<<<< HEAD
//display level text
function displayLevelMessage(msg) {
	textAlign(CENTER);
	textSize(32);
	fill(0, 255, 0);
	text(msg, width / 2, height / 2);
}

//Draws the player's remaining lives as heart icons
function drawLives() {
	for (let i = 0; i < lives; i++) {
		let x = 350 + i * 30; 
		let y = 35; 
		// Draw heart shape
		fill(255, 0, 0);
		noStroke();
		beginShape();
		vertex(x, y);
		bezierVertex(x - 10, y - 10, x - 15, y + 10, x, y + 15);
		bezierVertex(x + 15, y + 10, x + 10, y - 10, x, y);
		endShape(CLOSE);

		// Display lives count 
		fill(0);
		textSize(20);
		textAlign(LEFT);
		text("Lives:", 270, 50);

	}
}

//Displays the "Game Over" or "Victory" message based on game progress
function displayGameOver() {
    
    let personalBest = getPersonalBest(); // Get the stored personal best
    updatePersonalBest(game_score); // Update if the current score is higher
    
    // If the player reaches the portal, display a victory message
	if (portal[2].isReached) {
        fill(255, 215, 0); 
        textSize(50);
        textAlign(CENTER);
        text("CONGRATULATIONS!", width/2, height/2 - 80);
        textSize(40);
        text("YOW WIN!", width/2, height/2 -20);
        
        textSize(30);
        text("Final Score: " + game_score, width/2, height/2 + 30);
        text("High Score: " + Math.max(game_score, personalBest), width/2, height/2 + 70);
    }  
    // Otherwise, display the "Game Over" message
    else {
        fill(255, 0, 0);
        textSize(50);
        textAlign(CENTER);
        text("GAME OVER", width/2, height/2 - 30);
        
        fill(255, 215, 0);
        textSize(30);
        text("Score: " + game_score, width/2, height/2 + 20);
        text("High Score: " + Math.max(game_score, personalBest), width/2, height/2 + 60);
    }
	// Add restart instructions for both win and loss scenarios
    textSize(20);
    fill(255);
    text("Press space to play again", width/2, height/2 + 120);
}

// Function to get the personal best score from localStorage
function getPersonalBest() {
    let best = sessionStorage.getItem('personalBest'); // Use sessionStorage
    return best ? parseInt(best) : 0;
}

// Function to update the personal best score
function updatePersonalBest(score) {
    let best = getPersonalBest();
    if (score > best) {
        sessionStorage.setItem('personalBest', score);
    }
}

// Function to display the intro message with game instructions
function displayIntroMessage() {
    background(0, 0, 0, 150); // Semi-transparent black overlay
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("Welcome to the Adventure!", width / 2, height / 2 - 110);
    
    textSize(24);
    text("Your goal is to complete all 3 levels and reach the final portal to win!", width / 2, height / 2 - 70);
    text("Collect coins, avoid enemies, and navigate obstacles along the way!", width / 2, height / 2 - 40);
    text("Collect hearts to gain extra lives and stay in the game longer!", width / 2, height / 2 - 10);
    
    textSize(28);
    fill(255, 204, 0);
    text("Controls:", width / 2, height / 2 + 30);
    
    textSize(22);
    text("A - Move Left", width / 2, height / 2 + 60);
    text("D - Move Right", width / 1.98, height / 2 + 90);
    text("W - Jump", width / 2.1, height / 2 + 120);

    fill(255);
    textSize(20);
    text("Press any key to start!", width / 2, height / 2 + 160);
}

// Function to start all background sounds
function startSounds() {
	if (!soundsStarted && soundsLoadedCount === 10) { 
		soundsStarted = true;
		rainSound.play();
		rainSound.loop();
	}
}
=======
//display level text
function displayLevelMessage(msg) {
	textAlign(CENTER);
	textSize(32);
	fill(0, 255, 0);
	text(msg, width / 2, height / 2);
}

//Draws the player's remaining lives as heart icons
function drawLives() {
	for (let i = 0; i < lives; i++) {
		let x = 350 + i * 30; 
		let y = 35; 
		// Draw heart shape
		fill(255, 0, 0);
		noStroke();
		beginShape();
		vertex(x, y);
		bezierVertex(x - 10, y - 10, x - 15, y + 10, x, y + 15);
		bezierVertex(x + 15, y + 10, x + 10, y - 10, x, y);
		endShape(CLOSE);

		// Display lives count 
		fill(0);
		textSize(20);
		textAlign(LEFT);
		text("Lives:", 270, 50);

	}
}

//Displays the "Game Over" or "Victory" message based on game progress
function displayGameOver() {
    
    let personalBest = getPersonalBest(); // Get the stored personal best
    updatePersonalBest(game_score); // Update if the current score is higher
    
    // If the player reaches the portal, display a victory message
	if (portal[2].isReached) {
        fill(255, 215, 0); 
        textSize(50);
        textAlign(CENTER);
        text("CONGRATULATIONS!", width/2, height/2 - 80);
        textSize(40);
        text("YOW WIN!", width/2, height/2 -20);
        
        textSize(30);
        text("Final Score: " + game_score, width/2, height/2 + 30);
        text("High Score: " + Math.max(game_score, personalBest), width/2, height/2 + 70);
    }  
    // Otherwise, display the "Game Over" message
    else {
        fill(255, 0, 0);
        textSize(50);
        textAlign(CENTER);
        text("GAME OVER", width/2, height/2 - 30);
        
        fill(255, 215, 0);
        textSize(30);
        text("Score: " + game_score, width/2, height/2 + 20);
        text("High Score: " + Math.max(game_score, personalBest), width/2, height/2 + 60);
    }
	// Add restart instructions for both win and loss scenarios
    textSize(20);
    fill(255);
    text("Press space to play again", width/2, height/2 + 120);
}

// Function to get the personal best score from localStorage
function getPersonalBest() {
    let best = sessionStorage.getItem('personalBest'); // Use sessionStorage
    return best ? parseInt(best) : 0;
}

// Function to update the personal best score
function updatePersonalBest(score) {
    let best = getPersonalBest();
    if (score > best) {
        sessionStorage.setItem('personalBest', score);
    }
}

// Function to display the intro message with game instructions
function displayIntroMessage() {
    background(0, 0, 0, 150); // Semi-transparent black overlay
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("Welcome to the Adventure!", width / 2, height / 2 - 110);
    
    textSize(24);
    text("Your goal is to complete all 3 levels and reach the final portal to win!", width / 2, height / 2 - 70);
    text("Collect coins, avoid enemies, and navigate obstacles along the way!", width / 2, height / 2 - 40);
    text("Collect hearts to gain extra lives and stay in the game longer!", width / 2, height / 2 - 10);
    
    textSize(28);
    fill(255, 204, 0);
    text("Controls:", width / 2, height / 2 + 30);
    
    textSize(22);
    text("A - Move Left", width / 2, height / 2 + 60);
    text("D - Move Right", width / 1.98, height / 2 + 90);
    text("W - Jump", width / 2.1, height / 2 + 120);

    fill(255);
    textSize(20);
    text("Press any key to start!", width / 2, height / 2 + 160);
}

// Function to start all background sounds
function startSounds() {
	if (!soundsStarted && soundsLoadedCount === 10) { 
		soundsStarted = true;
		rainSound.play();
		rainSound.loop();
	}
}
>>>>>>> 6fa39653a573b47887e6507c9382ea71beeb3ae0
