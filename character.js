<<<<<<< HEAD
//Draw the game character 
function drawGameCharacter() {
	if (isLeft && isFalling) {  //game character jumping left
		fill(255, 195, 170);
		ellipse(gameChar_x, gameChar_y - 50, 18, 20);
		ellipse(gameChar_x, gameChar_y - 40, 10, 5);
		fill(0);
		ellipse(gameChar_x - 2, gameChar_y - 50, 5, 5)
		fill(8, 96, 168);
		rect(gameChar_x - 4, gameChar_y - 39, 9, 22);
		rect(gameChar_x - 10, gameChar_y - 39, 12, 6);
		fill(0);
		rect(gameChar_x, gameChar_y - 18, 11, 7)
		rect(gameChar_x - 10, gameChar_y - 18, 15, 7)
		fill(255, 0, 0);
		ellipse(gameChar_x, gameChar_y - 60, 18, 10);
		rect(gameChar_x - 5, gameChar_y - 70, 10, 6);
		fill(255, 195, 170);
		triangle(gameChar_x - 18, gameChar_y - 36, gameChar_x - 10, gameChar_y - 39, gameChar_x - 10, gameChar_y - 33);
		fill(161, 127, 26);
		rect(gameChar_x + 5, gameChar_y - 40, 6, 20);
		fill(255, 69, 0);
		triangle(gameChar_x + 8, gameChar_y - 22, gameChar_x + 3 + random(-3, 3), gameChar_y + 5 + random(-2, 2), gameChar_x + 11 + random(-3, 3), gameChar_y - 22);
		triangle(gameChar_x + 5, gameChar_y - 22, gameChar_x + 2 + random(-3, 3), gameChar_y + 5 + random(-2, 2), gameChar_x + 10 + random(-3, 3), gameChar_y - 22);
		fill(255, 140, 0);
		triangle(gameChar_x + 7, gameChar_y - 20, gameChar_x + 4 + random(-2, 2), gameChar_y + random(0, 5), gameChar_x + 9 + random(-2, 2), gameChar_y - 20);
		triangle(gameChar_x + 6, gameChar_y - 18, gameChar_x + 3 + random(-2, 2), gameChar_y + random(0, 5), gameChar_x + 8 + random(-2, 2), gameChar_y - 18);

	}

	else if (isRight && isFalling) {   //game character jumping right
		fill(255, 195, 170);
		ellipse(gameChar_x, gameChar_y - 50, 18, 20);
		ellipse(gameChar_x, gameChar_y - 40, 10, 5);
		fill(0);
		ellipse(gameChar_x + 2, gameChar_y - 50, 5, 5);
		fill(8, 96, 168);
		rect(gameChar_x - 4, gameChar_y - 39, 9, 22);
		rect(gameChar_x, gameChar_y - 39, 12, 6);
		fill(0);
		rect(gameChar_x, gameChar_y - 18, 15, 7)
		rect(gameChar_x - 10, gameChar_y - 18, 15, 7)
		fill(255, 0, 0);
		ellipse(gameChar_x, gameChar_y - 60, 18, 10);
		rect(gameChar_x - 5, gameChar_y - 70, 10, 6);
		fill(255, 195, 170);
		triangle(gameChar_x + 19, gameChar_y - 36, gameChar_x + 12, gameChar_y - 39, gameChar_x + 12, gameChar_y - 33)
		fill(161, 127, 26);
		rect(gameChar_x - 10, gameChar_y - 40, 6, 20);
		fill(255, 69, 0);
		triangle(gameChar_x - 10, gameChar_y - 22, gameChar_x - 14 + random(-3, 3), gameChar_y + 5 + random(-2, 2), gameChar_x - 6 + random(-3, 3), gameChar_y - 22);
		triangle(gameChar_x - 8, gameChar_y - 22, gameChar_x - 12 + random(-3, 3), gameChar_y + 5 + random(-2, 2), gameChar_x - 4 + random(-3, 3), gameChar_y - 22);
		fill(255, 140, 0);
		triangle(gameChar_x - 10, gameChar_y - 20, gameChar_x - 13 + random(-2, 2), gameChar_y + random(0, 5), gameChar_x - 7 + random(-2, 2), gameChar_y - 20);
		triangle(gameChar_x - 8, gameChar_y - 20, gameChar_x - 11 + random(-2, 2), gameChar_y + random(0, 5), gameChar_x - 5 + random(-2, 2), gameChar_y - 20);
	}

	else if (isLeft) { //game character walking left
		fill(255, 195, 170);
		ellipse(gameChar_x, gameChar_y - 50, 18, 20);
		ellipse(gameChar_x, gameChar_y - 40, 10, 5);
		fill(0);
		ellipse(gameChar_x - 2, gameChar_y - 50, 5, 5);
		fill(8, 96, 168);
		rect(gameChar_x - 4, gameChar_y - 39, 9, 22);
		rect(gameChar_x - 10, gameChar_y - 39, 14, 6)
		fill(0);
		beginShape();
		vertex(gameChar_x - 4, gameChar_y - 17);
		vertex(gameChar_x - 11, gameChar_y + 3);
		vertex(gameChar_x - 6, gameChar_y + 3);
		vertex(gameChar_x + 2, gameChar_y - 17);
		endShape(CLOSE);
		beginShape();
		vertex(gameChar_x, gameChar_y - 17);
		vertex(gameChar_x + 6, gameChar_y + 3);
		vertex(gameChar_x + 11, gameChar_y + 3);
		vertex(gameChar_x + 5, gameChar_y - 17);
		endShape(CLOSE);
		fill(255, 0, 0);
		ellipse(gameChar_x, gameChar_y - 60, 18, 10);
		rect(gameChar_x - 4, gameChar_y - 70, 10, 6);
		fill(255, 195, 170);
		triangle(gameChar_x - 18, gameChar_y - 36, gameChar_x - 10, gameChar_y - 39, gameChar_x - 10, gameChar_y - 33);
		fill(161, 127, 26);
		rect(gameChar_x + 5, gameChar_y - 42, 6, 20);
		fill(255, 69, 0);
		triangle(gameChar_x + 8, gameChar_y - 24, gameChar_x + 6 + random(-2, 2), gameChar_y - 16 + random(0, 5), gameChar_x + 6 + random(-2, 2), gameChar_y - 23);
		triangle(gameChar_x + 10, gameChar_y - 24, gameChar_x + 7 + random(-2, 2), gameChar_y - 8 + random(0, 5), gameChar_x + 7 + random(-2, 2), gameChar_y - 23);
		fill(255, 140, 0);
		triangle(gameChar_x + 10, gameChar_y - 14, gameChar_x + 8 + random(-1, 1), gameChar_y - 13 + random(0, 3), gameChar_x + 8 + random(-1, 1), gameChar_y - 18);
	}

	else if (isRight) { //game character walking right
		fill(255, 195, 170);
		ellipse(gameChar_x, gameChar_y - 50, 18, 20);
		ellipse(gameChar_x, gameChar_y - 40, 10, 5);
		fill(0);
		ellipse(gameChar_x + 2, gameChar_y - 50, 5, 5)
		fill(8, 96, 168);
		rect(gameChar_x - 4, gameChar_y - 39, 9, 22);
		rect(gameChar_x, gameChar_y - 39, 12, 6);
		fill(0);
		beginShape();
		vertex(gameChar_x - 1, gameChar_y - 18);
		vertex(gameChar_x + 6, gameChar_y + 3);
		vertex(gameChar_x + 11, gameChar_y + 3);
		vertex(gameChar_x + 5, gameChar_y - 18);
		endShape(CLOSE);
		beginShape();
		vertex(gameChar_x + 1, gameChar_y - 18);
		vertex(gameChar_x - 6, gameChar_y + 3);
		vertex(gameChar_x - 11, gameChar_y + 3);
		vertex(gameChar_x - 4, gameChar_y - 18);
		endShape(CLOSE);
		fill(255, 0, 0);
		ellipse(gameChar_x, gameChar_y - 60, 18, 10);
		rect(gameChar_x - 5, gameChar_y - 70, 10, 6);
		fill(255, 195, 170);
		triangle(gameChar_x + 19, gameChar_y - 36, gameChar_x + 12, gameChar_y - 39, gameChar_x + 12, gameChar_y - 33);
		fill(161, 127, 26);
		rect(gameChar_x - 10, gameChar_y - 42, 6, 20);
		fill(255, 69, 0);
		triangle(gameChar_x - 9, gameChar_y - 23, gameChar_x - 11 + random(-2, 2), gameChar_y - 7 + random(0, 5), gameChar_x - 5 + random(-2, 2), gameChar_y - 22);
		fill(255, 140, 0);
		triangle(gameChar_x - 10, gameChar_y - 19, gameChar_x - 12 + random(-1, 1), gameChar_y - 5 + random(0, 3), gameChar_x - 6 + random(-1, 1), gameChar_y - 17);
	}

	else if (isFalling || isPlummeting) { //game character jumping straight

		fill(161, 127, 26);
		rect(gameChar_x - 10, gameChar_y - 50, 6, 20);
		rect(gameChar_x + 4, gameChar_y - 50, 6, 20);
		fill(255, 69, 0);
		triangle(gameChar_x - 10, gameChar_y - 30, gameChar_x - 13 + random(-3, 3), gameChar_y - 10 + random(-2, 2), gameChar_x - 7 + random(-3, 3), gameChar_y - 30);
		triangle(gameChar_x + 4, gameChar_y - 30, gameChar_x + 1 + random(-3, 3), gameChar_y - 10 + random(-2, 2), gameChar_x + 7 + random(-3, 3), gameChar_y - 30);
		fill(255, 140, 0);
		triangle(gameChar_x - 10, gameChar_y - 25, gameChar_x - 12 + random(-2, 2), gameChar_y - 15 + random(0, 5), gameChar_x - 8 + random(-2, 2), gameChar_y - 25);
		triangle(gameChar_x + 4, gameChar_y - 25, gameChar_x + 2 + random(-2, 2), gameChar_y - 15 + random(0, 5), gameChar_x + 6 + random(-2, 2), gameChar_y - 25);
		fill(255, 195, 170);
		ellipse(gameChar_x, gameChar_y - 60, 20, 20);
		ellipse(gameChar_x, gameChar_y - 50, 13, 5);
		fill(0);
		ellipse(gameChar_x - 3, gameChar_y - 60, 5, 5);
		ellipse(gameChar_x + 3, gameChar_y - 60, 5, 5);
		fill(8, 96, 168);
		rect(gameChar_x - 7, gameChar_y - 49, 14, 22);
		rect(gameChar_x - 15, gameChar_y - 49, 14, 6);
		rect(gameChar_x + 3, gameChar_y - 49, 14, 6);
		fill(0);
		rect(gameChar_x - 7, gameChar_y - 27, 5, 19);
		rect(gameChar_x + 2, gameChar_y - 27, 5, 19);
		fill(255, 0, 0);
		ellipse(gameChar_x, gameChar_y - 70, 20, 10);
		rect(gameChar_x - 6, gameChar_y - 80, 14, 8);
		fill(255, 195, 170);
		triangle(gameChar_x - 22, gameChar_y - 47, gameChar_x - 15, gameChar_y - 49, gameChar_x - 15, gameChar_y - 43);
		triangle(gameChar_x + 24, gameChar_y - 47, gameChar_x + 17, gameChar_y - 49, gameChar_x + 17, gameChar_y - 43);
	}

	else { //game character facing forward(default stance)
		fill(161, 127, 26);
		rect(gameChar_x - 10, gameChar_y - 40, 6, 20);
		rect(gameChar_x + 4, gameChar_y - 40, 6, 20);
		fill(255, 69, 0);
		triangle(gameChar_x - 8, gameChar_y - 22, gameChar_x - 10 + random(-2, 2), gameChar_y - 22 + random(5, 10), gameChar_x - 6 + random(-2, 2), gameChar_y - 22 + random(5, 10));
		fill(255, 140, 0);
		triangle(gameChar_x - 7, gameChar_y - 22, gameChar_x - 5 + random(-1, 1), gameChar_y - 22 + random(7, 9));
		fill(255, 69, 0);
		triangle(gameChar_x + 8, gameChar_y - 22, gameChar_x + 6 + random(-2, 2), gameChar_y - 22 + random(5, 10), gameChar_x + 10 + random(-2, 2), gameChar_y - 22 + random(5, 10));
		fill(255, 140, 0);
		triangle(gameChar_x + 7, gameChar_y - 22, gameChar_x + 9 + random(-1, 1), gameChar_y - 22 + random(7, 9));
		fill(255, 195, 170);
		ellipse(gameChar_x, gameChar_y - 50, 20, 20);
		ellipse(gameChar_x, gameChar_y - 40, 13, 5);
		fill(0);
		ellipse(gameChar_x - 3, gameChar_y - 50, 5, 5);
		ellipse(gameChar_x + 3, gameChar_y - 50, 5, 5);
		fill(8, 96, 168);
		rect(gameChar_x - 7, gameChar_y - 39, 14, 22);
		rect(gameChar_x - 15, gameChar_y - 39, 14, 6);
		rect(gameChar_x, gameChar_y - 39, 14, 6);
		fill(0);
		rect(gameChar_x - 7, gameChar_y - 17, 5, 19);
		rect(gameChar_x + 2, gameChar_y - 17, 5, 19);
		fill(255, 0, 0);
		ellipse(gameChar_x, gameChar_y - 60, 20, 10);
		rect(gameChar_x - 6, gameChar_y - 70, 14, 8);
		fill(255, 195, 170);
		triangle(gameChar_x - 22, gameChar_y - 36, gameChar_x - 15, gameChar_y - 39, gameChar_x - 15, gameChar_y - 33); triangle(gameChar_x + 21, gameChar_y - 36, gameChar_x + 14, gameChar_y - 39, gameChar_x + 14, gameChar_y - 33);
	}
}

function gameCharacterMovement() {
	//moving left & right while respecting screen boundary
	if (!isPlummeting) {
		if (isLeft == true && gameChar_x > -150) {
			gameChar_x -= 4;
		}

		if (isRight == true && gameChar_x < 6500) {
			gameChar_x += 4;
		}
	}

	// If plummeting, disable left/right movement
	if (isPlummeting) {
		velocityY += gravity * 1.5; // Increase gravity for realistic fall
		gameChar_y += velocityY;
		return; // Prevents further movement checks
	}

	// Apply gravity and jump mechanics
	gameChar_y += velocityY;
	velocityY += gravity; // Apply gravity effect

	// Check if character is landing
	if (gameChar_y >= floorPos_y) {
		gameChar_y = floorPos_y; // Keep character on ground
		velocityY = 0;
		isFalling = false;
		jumpCount = 0; // Reset double jump when landing
	}

	// Check if character is on a platform
	platformFactory.checkCharacterOnAnyPlatform(gameChar_x, gameChar_y);

}

function checkCharacterDie() {
	// Check if player falls off the screen, collides, or gets hit by a bomb
	if (gameChar_y > height + 100 || hasCollided || haslazerCollided || bombs.some(bomb => bomb.blast)) {
		lives--; // Reduce life count

		if (lives > 0) {
			// Respawn at last checkpoint (portal) if one is reached
			if (portal[0].isReached || portal[1].isReached || portal[2].isReached) {
				gameChar_x = lastCheckpoint.x - 28;
				gameChar_y = lastCheckpoint.y - 50; // Slightly above ground to avoid instant collision
			} else {
				//If no portal is reached, restart at the game start
				gameChar_x = 10
				gameChar_y = floorPos_y - 50;
			}

			// Reset movement states
			isRight = false;
			isLeft = false;
			isFalling = false;
			isPlummeting = false;
			hasCollided = false;
			haslazerCollided = false;

			// Reset bomb explosion states
			bombs.forEach(bomb => (bomb.blast = false));

		} else {
			// End the game if no lives remain
			gameOver = true;
			gameoverSound.play();
			noLoop(); // Stop the game loop
		}

		// Stop the plummeting sound when player resets
		plummetingSound.stop();
	}
}

//Handle key presses for movement
function keyPressed() {
	// If the intro is still showing, hide it when a movement key is pressed
	if (showIntro && (keyCode === 65 || keyCode === 68 || keyCode === 87)) {
		showIntro = false;
		startSounds(); // Start sounds when the player first interacts
		return; // Prevent further key execution before the game starts
	}
	if (!gameOver) {
		if (keyCode == 65) { // "a" key (move left)
			isLeft = true;
		}
		else if (keyCode == 68) { // "d" key (move right)
			isRight = true;
		}

		if (keyCode == 87 && jumpCount < 2) { // "w" key (jump)
			if (jumpCount == 0 && (onPlatform || gameChar_y >= floorPos_y)) {
				velocityY = -13; // First jump (only from solid ground)
				if (jumpSound.isLoaded()) {
					jumpSound.play();
				}
			}
			else if (jumpCount == 1) {
				velocityY = -7; // Slightly lower second jump (mid-air jump)
				if (jumpSound.isLoaded()) {
					jumpSound.play();
				}
			}
			jumpCount++; // Increase jump count
			isFalling = true;
		}
	}
	if (key == ' ' && gameOver) {//space bar to restart the game
		startgame();
		loop(); // Restart the draw loop
	}
}

//handles key releases to stop movement
function keyReleased() {
	if (!gameOver) {
		if (keyCode == 65) { //"a"key is released
			isLeft = false;
		}
		else if (keyCode == 68) { //"d"key is released
			isRight = false;
		}

		if (keyCode == 87) { //"w"key is released
			isFalling = true;
		}
	}
}
=======
//Draw the game character 
function drawGameCharacter() {
	if (isLeft && isFalling) {  //game character jumping left
		fill(255, 195, 170);
		ellipse(gameChar_x, gameChar_y - 50, 18, 20);
		ellipse(gameChar_x, gameChar_y - 40, 10, 5);
		fill(0);
		ellipse(gameChar_x - 2, gameChar_y - 50, 5, 5)
		fill(8, 96, 168);
		rect(gameChar_x - 4, gameChar_y - 39, 9, 22);
		rect(gameChar_x - 10, gameChar_y - 39, 12, 6);
		fill(0);
		rect(gameChar_x, gameChar_y - 18, 11, 7)
		rect(gameChar_x - 10, gameChar_y - 18, 15, 7)
		fill(255, 0, 0);
		ellipse(gameChar_x, gameChar_y - 60, 18, 10);
		rect(gameChar_x - 5, gameChar_y - 70, 10, 6);
		fill(255, 195, 170);
		triangle(gameChar_x - 18, gameChar_y - 36, gameChar_x - 10, gameChar_y - 39, gameChar_x - 10, gameChar_y - 33);
		fill(161, 127, 26);
		rect(gameChar_x + 5, gameChar_y - 40, 6, 20);
		fill(255, 69, 0);
		triangle(gameChar_x + 8, gameChar_y - 22, gameChar_x + 3 + random(-3, 3), gameChar_y + 5 + random(-2, 2), gameChar_x + 11 + random(-3, 3), gameChar_y - 22);
		triangle(gameChar_x + 5, gameChar_y - 22, gameChar_x + 2 + random(-3, 3), gameChar_y + 5 + random(-2, 2), gameChar_x + 10 + random(-3, 3), gameChar_y - 22);
		fill(255, 140, 0);
		triangle(gameChar_x + 7, gameChar_y - 20, gameChar_x + 4 + random(-2, 2), gameChar_y + random(0, 5), gameChar_x + 9 + random(-2, 2), gameChar_y - 20);
		triangle(gameChar_x + 6, gameChar_y - 18, gameChar_x + 3 + random(-2, 2), gameChar_y + random(0, 5), gameChar_x + 8 + random(-2, 2), gameChar_y - 18);

	}

	else if (isRight && isFalling) {   //game character jumping right
		fill(255, 195, 170);
		ellipse(gameChar_x, gameChar_y - 50, 18, 20);
		ellipse(gameChar_x, gameChar_y - 40, 10, 5);
		fill(0);
		ellipse(gameChar_x + 2, gameChar_y - 50, 5, 5);
		fill(8, 96, 168);
		rect(gameChar_x - 4, gameChar_y - 39, 9, 22);
		rect(gameChar_x, gameChar_y - 39, 12, 6);
		fill(0);
		rect(gameChar_x, gameChar_y - 18, 15, 7)
		rect(gameChar_x - 10, gameChar_y - 18, 15, 7)
		fill(255, 0, 0);
		ellipse(gameChar_x, gameChar_y - 60, 18, 10);
		rect(gameChar_x - 5, gameChar_y - 70, 10, 6);
		fill(255, 195, 170);
		triangle(gameChar_x + 19, gameChar_y - 36, gameChar_x + 12, gameChar_y - 39, gameChar_x + 12, gameChar_y - 33)
		fill(161, 127, 26);
		rect(gameChar_x - 10, gameChar_y - 40, 6, 20);
		fill(255, 69, 0);
		triangle(gameChar_x - 10, gameChar_y - 22, gameChar_x - 14 + random(-3, 3), gameChar_y + 5 + random(-2, 2), gameChar_x - 6 + random(-3, 3), gameChar_y - 22);
		triangle(gameChar_x - 8, gameChar_y - 22, gameChar_x - 12 + random(-3, 3), gameChar_y + 5 + random(-2, 2), gameChar_x - 4 + random(-3, 3), gameChar_y - 22);
		fill(255, 140, 0);
		triangle(gameChar_x - 10, gameChar_y - 20, gameChar_x - 13 + random(-2, 2), gameChar_y + random(0, 5), gameChar_x - 7 + random(-2, 2), gameChar_y - 20);
		triangle(gameChar_x - 8, gameChar_y - 20, gameChar_x - 11 + random(-2, 2), gameChar_y + random(0, 5), gameChar_x - 5 + random(-2, 2), gameChar_y - 20);
	}

	else if (isLeft) { //game character walking left
		fill(255, 195, 170);
		ellipse(gameChar_x, gameChar_y - 50, 18, 20);
		ellipse(gameChar_x, gameChar_y - 40, 10, 5);
		fill(0);
		ellipse(gameChar_x - 2, gameChar_y - 50, 5, 5);
		fill(8, 96, 168);
		rect(gameChar_x - 4, gameChar_y - 39, 9, 22);
		rect(gameChar_x - 10, gameChar_y - 39, 14, 6)
		fill(0);
		beginShape();
		vertex(gameChar_x - 4, gameChar_y - 17);
		vertex(gameChar_x - 11, gameChar_y + 3);
		vertex(gameChar_x - 6, gameChar_y + 3);
		vertex(gameChar_x + 2, gameChar_y - 17);
		endShape(CLOSE);
		beginShape();
		vertex(gameChar_x, gameChar_y - 17);
		vertex(gameChar_x + 6, gameChar_y + 3);
		vertex(gameChar_x + 11, gameChar_y + 3);
		vertex(gameChar_x + 5, gameChar_y - 17);
		endShape(CLOSE);
		fill(255, 0, 0);
		ellipse(gameChar_x, gameChar_y - 60, 18, 10);
		rect(gameChar_x - 4, gameChar_y - 70, 10, 6);
		fill(255, 195, 170);
		triangle(gameChar_x - 18, gameChar_y - 36, gameChar_x - 10, gameChar_y - 39, gameChar_x - 10, gameChar_y - 33);
		fill(161, 127, 26);
		rect(gameChar_x + 5, gameChar_y - 42, 6, 20);
		fill(255, 69, 0);
		triangle(gameChar_x + 8, gameChar_y - 24, gameChar_x + 6 + random(-2, 2), gameChar_y - 16 + random(0, 5), gameChar_x + 6 + random(-2, 2), gameChar_y - 23);
		triangle(gameChar_x + 10, gameChar_y - 24, gameChar_x + 7 + random(-2, 2), gameChar_y - 8 + random(0, 5), gameChar_x + 7 + random(-2, 2), gameChar_y - 23);
		fill(255, 140, 0);
		triangle(gameChar_x + 10, gameChar_y - 14, gameChar_x + 8 + random(-1, 1), gameChar_y - 13 + random(0, 3), gameChar_x + 8 + random(-1, 1), gameChar_y - 18);
	}

	else if (isRight) { //game character walking right
		fill(255, 195, 170);
		ellipse(gameChar_x, gameChar_y - 50, 18, 20);
		ellipse(gameChar_x, gameChar_y - 40, 10, 5);
		fill(0);
		ellipse(gameChar_x + 2, gameChar_y - 50, 5, 5)
		fill(8, 96, 168);
		rect(gameChar_x - 4, gameChar_y - 39, 9, 22);
		rect(gameChar_x, gameChar_y - 39, 12, 6);
		fill(0);
		beginShape();
		vertex(gameChar_x - 1, gameChar_y - 18);
		vertex(gameChar_x + 6, gameChar_y + 3);
		vertex(gameChar_x + 11, gameChar_y + 3);
		vertex(gameChar_x + 5, gameChar_y - 18);
		endShape(CLOSE);
		beginShape();
		vertex(gameChar_x + 1, gameChar_y - 18);
		vertex(gameChar_x - 6, gameChar_y + 3);
		vertex(gameChar_x - 11, gameChar_y + 3);
		vertex(gameChar_x - 4, gameChar_y - 18);
		endShape(CLOSE);
		fill(255, 0, 0);
		ellipse(gameChar_x, gameChar_y - 60, 18, 10);
		rect(gameChar_x - 5, gameChar_y - 70, 10, 6);
		fill(255, 195, 170);
		triangle(gameChar_x + 19, gameChar_y - 36, gameChar_x + 12, gameChar_y - 39, gameChar_x + 12, gameChar_y - 33);
		fill(161, 127, 26);
		rect(gameChar_x - 10, gameChar_y - 42, 6, 20);
		fill(255, 69, 0);
		triangle(gameChar_x - 9, gameChar_y - 23, gameChar_x - 11 + random(-2, 2), gameChar_y - 7 + random(0, 5), gameChar_x - 5 + random(-2, 2), gameChar_y - 22);
		fill(255, 140, 0);
		triangle(gameChar_x - 10, gameChar_y - 19, gameChar_x - 12 + random(-1, 1), gameChar_y - 5 + random(0, 3), gameChar_x - 6 + random(-1, 1), gameChar_y - 17);
	}

	else if (isFalling || isPlummeting) { //game character jumping straight

		fill(161, 127, 26);
		rect(gameChar_x - 10, gameChar_y - 50, 6, 20);
		rect(gameChar_x + 4, gameChar_y - 50, 6, 20);
		fill(255, 69, 0);
		triangle(gameChar_x - 10, gameChar_y - 30, gameChar_x - 13 + random(-3, 3), gameChar_y - 10 + random(-2, 2), gameChar_x - 7 + random(-3, 3), gameChar_y - 30);
		triangle(gameChar_x + 4, gameChar_y - 30, gameChar_x + 1 + random(-3, 3), gameChar_y - 10 + random(-2, 2), gameChar_x + 7 + random(-3, 3), gameChar_y - 30);
		fill(255, 140, 0);
		triangle(gameChar_x - 10, gameChar_y - 25, gameChar_x - 12 + random(-2, 2), gameChar_y - 15 + random(0, 5), gameChar_x - 8 + random(-2, 2), gameChar_y - 25);
		triangle(gameChar_x + 4, gameChar_y - 25, gameChar_x + 2 + random(-2, 2), gameChar_y - 15 + random(0, 5), gameChar_x + 6 + random(-2, 2), gameChar_y - 25);
		fill(255, 195, 170);
		ellipse(gameChar_x, gameChar_y - 60, 20, 20);
		ellipse(gameChar_x, gameChar_y - 50, 13, 5);
		fill(0);
		ellipse(gameChar_x - 3, gameChar_y - 60, 5, 5);
		ellipse(gameChar_x + 3, gameChar_y - 60, 5, 5);
		fill(8, 96, 168);
		rect(gameChar_x - 7, gameChar_y - 49, 14, 22);
		rect(gameChar_x - 15, gameChar_y - 49, 14, 6);
		rect(gameChar_x + 3, gameChar_y - 49, 14, 6);
		fill(0);
		rect(gameChar_x - 7, gameChar_y - 27, 5, 19);
		rect(gameChar_x + 2, gameChar_y - 27, 5, 19);
		fill(255, 0, 0);
		ellipse(gameChar_x, gameChar_y - 70, 20, 10);
		rect(gameChar_x - 6, gameChar_y - 80, 14, 8);
		fill(255, 195, 170);
		triangle(gameChar_x - 22, gameChar_y - 47, gameChar_x - 15, gameChar_y - 49, gameChar_x - 15, gameChar_y - 43);
		triangle(gameChar_x + 24, gameChar_y - 47, gameChar_x + 17, gameChar_y - 49, gameChar_x + 17, gameChar_y - 43);
	}

	else { //game character facing forward(default stance)
		fill(161, 127, 26);
		rect(gameChar_x - 10, gameChar_y - 40, 6, 20);
		rect(gameChar_x + 4, gameChar_y - 40, 6, 20);
		fill(255, 69, 0);
		triangle(gameChar_x - 8, gameChar_y - 22, gameChar_x - 10 + random(-2, 2), gameChar_y - 22 + random(5, 10), gameChar_x - 6 + random(-2, 2), gameChar_y - 22 + random(5, 10));
		fill(255, 140, 0);
		triangle(gameChar_x - 7, gameChar_y - 22, gameChar_x - 5 + random(-1, 1), gameChar_y - 22 + random(7, 9));
		fill(255, 69, 0);
		triangle(gameChar_x + 8, gameChar_y - 22, gameChar_x + 6 + random(-2, 2), gameChar_y - 22 + random(5, 10), gameChar_x + 10 + random(-2, 2), gameChar_y - 22 + random(5, 10));
		fill(255, 140, 0);
		triangle(gameChar_x + 7, gameChar_y - 22, gameChar_x + 9 + random(-1, 1), gameChar_y - 22 + random(7, 9));
		fill(255, 195, 170);
		ellipse(gameChar_x, gameChar_y - 50, 20, 20);
		ellipse(gameChar_x, gameChar_y - 40, 13, 5);
		fill(0);
		ellipse(gameChar_x - 3, gameChar_y - 50, 5, 5);
		ellipse(gameChar_x + 3, gameChar_y - 50, 5, 5);
		fill(8, 96, 168);
		rect(gameChar_x - 7, gameChar_y - 39, 14, 22);
		rect(gameChar_x - 15, gameChar_y - 39, 14, 6);
		rect(gameChar_x, gameChar_y - 39, 14, 6);
		fill(0);
		rect(gameChar_x - 7, gameChar_y - 17, 5, 19);
		rect(gameChar_x + 2, gameChar_y - 17, 5, 19);
		fill(255, 0, 0);
		ellipse(gameChar_x, gameChar_y - 60, 20, 10);
		rect(gameChar_x - 6, gameChar_y - 70, 14, 8);
		fill(255, 195, 170);
		triangle(gameChar_x - 22, gameChar_y - 36, gameChar_x - 15, gameChar_y - 39, gameChar_x - 15, gameChar_y - 33); triangle(gameChar_x + 21, gameChar_y - 36, gameChar_x + 14, gameChar_y - 39, gameChar_x + 14, gameChar_y - 33);
	}
}

function gameCharacterMovement() {
	//moving left & right while respecting screen boundary
	if (!isPlummeting) {
		if (isLeft == true && gameChar_x > -150) {
			gameChar_x -= 4;
		}

		if (isRight == true && gameChar_x < 6500) {
			gameChar_x += 4;
		}
	}

	// If plummeting, disable left/right movement
	if (isPlummeting) {
		velocityY += gravity * 1.5; // Increase gravity for realistic fall
		gameChar_y += velocityY;
		return; // Prevents further movement checks
	}

	// Apply gravity and jump mechanics
	gameChar_y += velocityY;
	velocityY += gravity; // Apply gravity effect

	// Check if character is landing
	if (gameChar_y >= floorPos_y) {
		gameChar_y = floorPos_y; // Keep character on ground
		velocityY = 0;
		isFalling = false;
		jumpCount = 0; // Reset double jump when landing
	}

	// Check if character is on a platform
	platformFactory.checkCharacterOnAnyPlatform(gameChar_x, gameChar_y);

}

function checkCharacterDie() {
	// Check if player falls off the screen, collides, or gets hit by a bomb
	if (gameChar_y > height + 100 || hasCollided || haslazerCollided || bombs.some(bomb => bomb.blast)) {
		lives--; // Reduce life count

		if (lives > 0) {
			// Respawn at last checkpoint (portal) if one is reached
			if (portal[0].isReached || portal[1].isReached || portal[2].isReached) {
				gameChar_x = lastCheckpoint.x - 28;
				gameChar_y = lastCheckpoint.y - 50; // Slightly above ground to avoid instant collision
			} else {
				//If no portal is reached, restart at the game start
				gameChar_x = 10
				gameChar_y = floorPos_y - 50;
			}

			// Reset movement states
			isRight = false;
			isLeft = false;
			isFalling = false;
			isPlummeting = false;
			hasCollided = false;
			haslazerCollided = false;

			// Reset bomb explosion states
			bombs.forEach(bomb => (bomb.blast = false));

		} else {
			// End the game if no lives remain
			gameOver = true;
			gameoverSound.play();
			noLoop(); // Stop the game loop
		}

		// Stop the plummeting sound when player resets
		plummetingSound.stop();
	}
}

//Handle key presses for movement
function keyPressed() {
	// If the intro is still showing, hide it when a movement key is pressed
	if (showIntro && (keyCode === 65 || keyCode === 68 || keyCode === 87)) {
		showIntro = false;
		startSounds(); // Start sounds when the player first interacts
		return; // Prevent further key execution before the game starts
	}
	if (!gameOver) {
		if (keyCode == 65) { // "a" key (move left)
			isLeft = true;
		}
		else if (keyCode == 68) { // "d" key (move right)
			isRight = true;
		}

		if (keyCode == 87 && jumpCount < 2) { // "w" key (jump)
			if (jumpCount == 0 && (onPlatform || gameChar_y >= floorPos_y)) {
				velocityY = -13; // First jump (only from solid ground)
				if (jumpSound.isLoaded()) {
					jumpSound.play();
				}
			}
			else if (jumpCount == 1) {
				velocityY = -7; // Slightly lower second jump (mid-air jump)
				if (jumpSound.isLoaded()) {
					jumpSound.play();
				}
			}
			jumpCount++; // Increase jump count
			isFalling = true;
		}
	}
	if (key == ' ' && gameOver) {//space bar to restart the game
		startgame();
		loop(); // Restart the draw loop
	}
}

//handles key releases to stop movement
function keyReleased() {
	if (!gameOver) {
		if (keyCode == 65) { //"a"key is released
			isLeft = false;
		}
		else if (keyCode == 68) { //"d"key is released
			isRight = false;
		}

		if (keyCode == 87) { //"w"key is released
			isFalling = true;
		}
	}
}
>>>>>>> 6fa39653a573b47887e6507c9382ea71beeb3ae0
