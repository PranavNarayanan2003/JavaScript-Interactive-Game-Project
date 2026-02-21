<<<<<<< HEAD
//Draws collectables with a glowing and rotating effect.
function drawCollectables(t_collectable) {
    if (!t_collectable.isFound) {
        push();
        translate(t_collectable.x_pos, t_collectable.y_pos);

        let currentWidth = t_collectable.size * abs(cos(t_collectable.rotation));
        t_collectable.rotation += radians(4);

        let glowAlpha = 150 + 100 * sin(t_collectable.rotation);

        // Draw the coin
        fill(255, 223, 0, glowAlpha);
        ellipse(0, 0, currentWidth * 1.5, t_collectable.size * 1.5);
        fill(255, 215, 0);
        ellipse(0, 0, currentWidth, t_collectable.size);
        fill(0, 0, 0);
        ellipse(0, 0, currentWidth / 2, t_collectable.size / 2);

        pop();
    }
}

//Checks if the player has collected a collectable
function checkCollectables(t_collectable) {
    if (!t_collectable.isFound && dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 40) {
        t_collectable.isFound = true;
        game_score += 1;

        if (coinSound) {
            coinSound.play();
        }
    }
}

//Draws hearts (extra life power-ups) on the screen with a rotating effect.
function drawHearts() {
    for (let heart of hearts) {
        if (!heart.collected) {
            let x = heart.x;
            let y = heart.y;
            let rotation = sin(frameCount * 0.1);
            let heartWidth = 30 * abs(rotation);
            let heartHeight = 30;

            push();
            translate(x, y);
            fill(255, 0, 0);
            noStroke();
            beginShape();
            vertex(0, 0);
            bezierVertex(-heartWidth / 2, -heartHeight / 3, -heartWidth / 1.5, heartHeight / 3, 0, heartHeight);
            bezierVertex(heartWidth / 1.5, heartHeight / 3, heartWidth / 2, -heartHeight / 3, 0, 0);
            endShape(CLOSE);

            pop();
        }
    }
}

// Checks if the player has collected a heart (extra life).
function checkHeartCollection() {
    for (let heart of hearts) {
        if (!heart.collected && dist(gameChar_x, gameChar_y, heart.x, heart.y) < 60) {
            heart.collected = true;  // Mark as collected
            if (coinSound) {
                coinSound.play();
            }
            lives++;  // Increase lives
        }
    }
}

//checks if the collectable and hearts are overlapping each other
function isOverlapping(x, objectsArray, minSpacing, key) {
    if (!Array.isArray(objectsArray)) return false;

    for (let obj of objectsArray) {
        if (abs(x - obj[key]) < minSpacing) {
            return true;
        }
    }
    return false;
=======
//Draws collectables with a glowing and rotating effect.
function drawCollectables(t_collectable) {
    if (!t_collectable.isFound) {
        push();
        translate(t_collectable.x_pos, t_collectable.y_pos);

        let currentWidth = t_collectable.size * abs(cos(t_collectable.rotation));
        t_collectable.rotation += radians(4);

        let glowAlpha = 150 + 100 * sin(t_collectable.rotation);

        // Draw the coin
        fill(255, 223, 0, glowAlpha);
        ellipse(0, 0, currentWidth * 1.5, t_collectable.size * 1.5);
        fill(255, 215, 0);
        ellipse(0, 0, currentWidth, t_collectable.size);
        fill(0, 0, 0);
        ellipse(0, 0, currentWidth / 2, t_collectable.size / 2);

        pop();
    }
}

//Checks if the player has collected a collectable
function checkCollectables(t_collectable) {
    if (!t_collectable.isFound && dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 40) {
        t_collectable.isFound = true;
        game_score += 1;

        if (coinSound) {
            coinSound.play();
        }
    }
}

//Draws hearts (extra life power-ups) on the screen with a rotating effect.
function drawHearts() {
    for (let heart of hearts) {
        if (!heart.collected) {
            let x = heart.x;
            let y = heart.y;
            let rotation = sin(frameCount * 0.1);
            let heartWidth = 30 * abs(rotation);
            let heartHeight = 30;

            push();
            translate(x, y);
            fill(255, 0, 0);
            noStroke();
            beginShape();
            vertex(0, 0);
            bezierVertex(-heartWidth / 2, -heartHeight / 3, -heartWidth / 1.5, heartHeight / 3, 0, heartHeight);
            bezierVertex(heartWidth / 1.5, heartHeight / 3, heartWidth / 2, -heartHeight / 3, 0, 0);
            endShape(CLOSE);

            pop();
        }
    }
}

// Checks if the player has collected a heart (extra life).
function checkHeartCollection() {
    for (let heart of hearts) {
        if (!heart.collected && dist(gameChar_x, gameChar_y, heart.x, heart.y) < 60) {
            heart.collected = true;  // Mark as collected
            if (coinSound) {
                coinSound.play();
            }
            lives++;  // Increase lives
        }
    }
}

//checks if the collectable and hearts are overlapping each other
function isOverlapping(x, objectsArray, minSpacing, key) {
    if (!Array.isArray(objectsArray)) return false;

    for (let obj of objectsArray) {
        if (abs(x - obj[key]) < minSpacing) {
            return true;
        }
    }
    return false;
>>>>>>> 6fa39653a573b47887e6507c9382ea71beeb3ae0
}