<<<<<<< HEAD
// Constructor function that defines an enemy robot with movement, shooting lasers, and collision detection.
class EnemyRobot {
    constructor(x_start, x_end, y_pos, size, speed, range, shootInterval = null) {
        // Initialize robot movement properties
        this.x_pos = x_start;
        this.x_end = x_end;
        this.y_pos = y_pos;
        this.size = size;
        this.speed = speed;
        this.range = range;
        this.direction = 1;
        this.shootInterval = shootInterval;
        this.lasers = [];
        this.lastShotTime = 0;
    }
    // Moves the enemy robot left and right within its patrol range
    move() {
        this.x_pos += this.speed * this.direction;
        // Reverse direction when reaching patrol limits
        if (this.x_pos < (this.x_end - this.range) || this.x_pos > (this.x_end + this.range)) {
            this.direction *= -1;
        }
    }
    // Draws the enemy robot
    draw() {
        fill(255, 255, 255);
        rect(this.x_pos + 5, this.y_pos, this.size - 10, this.size);

        arc(
            this.x_pos + this.size / 2,
            this.y_pos - this.size / 40,
            this.size / 2,
            this.size / 2,
            PI,
            0
        );
        fill(255, 0, 0);
        ellipse(this.x_pos + this.size / 3, this.y_pos - this.size / 4, this.size / 8);
        ellipse(this.x_pos + (2 * this.size) / 3, this.y_pos - this.size / 4, this.size / 8);
        fill(217, 217, 217);
        rect(this.x_pos - 5, this.y_pos + 6, 10, 30);
        rect(this.x_pos - 5 + this.size, this.y_pos + 6, 10, 30);

        push();
        translate(this.x_pos + this.size / 2, this.y_pos - 8 + this.size + 5);
        for (let j = 0; j < 3; j++) {
            fill(255, 165, 0, 200 - j * 60);
            fill(255, 140, 0, 200 - j * 60);
            triangle(
                random(-6, 6),
                random(8, 15) + j * 5,
                -this.size / 6,
                this.size / 5 + j * 6,
                this.size / 6,
                this.size / 5 + j * 6
            );
        }
        pop();
        // Handles laser shooting if the robot has a shooting interval
        if (this.shootInterval) {
            this.shootLaser();
            this.moveLasers();
            this.drawLasers();
        }
    }
    // Fires a laser at regular intervals
    shootLaser() {
        if (millis() - this.lastShotTime > this.shootInterval) {
            this.lasers.push({
                x_pos: this.x_pos,
                y_pos: this.y_pos + 20,
                speed: 4 * this.direction,
                active: true,
                start_x: this.x_pos
            });
            this.lastShotTime = millis();
        }
    }
    // Moves the lasers forward
    moveLasers() {
        for (let laser of this.lasers) {
            if (laser.active) {
                laser.x_pos += laser.speed;
                if (Math.abs(laser.x_pos - laser.start_x) >= 300) {
                    laser.active = false;
                }
            }
        }
    }
    // Draws the lasers fired by the robot
    drawLasers() {
        fill(255, 0, 0);
        for (let laser of this.lasers) {
            if (laser.active) {
                rect(laser.x_pos, laser.y_pos, 10, 3);
            }
        }
    }
    // Checks if the robot's laser hits the player
    checkLaserCollision(playerX, playerY) {
        for (let laser of this.lasers) {
            const hitbox = {
                left: playerX - 10,
                right: playerX + 10,
                top: playerY - 50,
                bottom: playerY
            };

            if (
                laser.active &&
                laser.x_pos > hitbox.left &&
                laser.x_pos < hitbox.right &&
                laser.y_pos > hitbox.top &&
                laser.y_pos < hitbox.bottom
            ) {
                laser.active = false;
                return true;
            }
        }
        return false;
    }
    // Checks if the player collides with the enemy robot
    checkCollision(gameChar_x, gameChar_y) {
        return (
            gameChar_x + 10 > this.x_pos &&
            gameChar_x - 10 < this.x_pos + this.size &&
            gameChar_y > this.y_pos &&
            gameChar_y - 50 < this.y_pos + this.size
        );
    }
}

// Draws all enemy robots on the screen
function drawEnemyRobots() {
    for (let i = 0; i < enemyRobots.length; i++) {
        enemyRobots[i].draw();
    }
}
// Moves all enemy robots
function EnemyRobotMovement() {
    for (let i = 0; i < enemyRobots.length; i++) {
        enemyRobots[i].move();
    }
}
// Checks if the player collides with any enemy robot
function checkRobotCollision() {
    for (let i = 0; i < enemyRobots.length; i++) {
        if (enemyRobots[i].checkCollision(gameChar_x, gameChar_y)) {
            hasCollided = true;
            if (!enemyrobotcollisionSound.isPlaying()) {
                enemyrobotcollisionSound.play();
            }
            checkCharacterDie();
        }
    }
}
// Checks if the player gets hit by any robot's laser
function checkRobotLaserCollisions() {
    for (let robot of enemyRobots) {
        if (robot.checkLaserCollision(gameChar_x, gameChar_y)) {
            haslazerCollided = true;
            if (!enemyrobotlazerSound.isPlaying()) {
                enemyrobotlazerSound.play();
            }
            checkCharacterDie();
        }
    }
}

//draws bombs
function drawBombs(bomb) {
    for (let i = 0; i < bombs.length; i++) {
        let bomb = bombs[i];
        if (!bomb.blast) {
            push();
            fill(0);
            ellipse(bomb.x_pos, bomb.y_pos, bomb.size, bomb.size);
            stroke(100);
            strokeWeight(2);
            line(bomb.x_pos, bomb.y_pos - bomb.size / 2, bomb.x_pos, bomb.y_pos - bomb.size);
            noStroke();
            fill(255, 0, 0);
            ellipse(bomb.x_pos, bomb.y_pos - bomb.size, bomb.size / 6, bomb.size / 6);
            for (let j = 0; j < 3; j++) {
                let fireColor = color(255, 140 - j * 40, 0, 200 - j * 60);
                fill(fireColor);
                noStroke();
                triangle(
                    bomb.x_pos - random(2, 5),
                    bomb.y_pos - 15 - random(5, 8) - j * 5,
                    bomb.x_pos + random(2, 5),
                    bomb.y_pos - 15 - random(5, 8) - j * 5,
                    bomb.x_pos,
                    bomb.y_pos - 30 - j * 2
                );
            }
            pop();
        }
    }
}
// Checks if the player collides with any bomb
function checkBombCollision() {
    for (let bomb of bombs) {
        if (!bomb.blast && dist(gameChar_x, gameChar_y, bomb.x_pos, bomb.y_pos) < bomb.size / 2 + 10) {
            bomb.blast = true;
            if (!bombblastSound.isPlaying()) {
                bombblastSound.play();
            }
            checkCharacterDie();
        }
    }
=======
// Constructor function that defines an enemy robot with movement, shooting lasers, and collision detection.
class EnemyRobot {
    constructor(x_start, x_end, y_pos, size, speed, range, shootInterval = null) {
        // Initialize robot movement properties
        this.x_pos = x_start;
        this.x_end = x_end;
        this.y_pos = y_pos;
        this.size = size;
        this.speed = speed;
        this.range = range;
        this.direction = 1;
        this.shootInterval = shootInterval;
        this.lasers = [];
        this.lastShotTime = 0;
    }
    // Moves the enemy robot left and right within its patrol range
    move() {
        this.x_pos += this.speed * this.direction;
        // Reverse direction when reaching patrol limits
        if (this.x_pos < (this.x_end - this.range) || this.x_pos > (this.x_end + this.range)) {
            this.direction *= -1;
        }
    }
    // Draws the enemy robot
    draw() {
        fill(255, 255, 255);
        rect(this.x_pos + 5, this.y_pos, this.size - 10, this.size);

        arc(
            this.x_pos + this.size / 2,
            this.y_pos - this.size / 40,
            this.size / 2,
            this.size / 2,
            PI,
            0
        );
        fill(255, 0, 0);
        ellipse(this.x_pos + this.size / 3, this.y_pos - this.size / 4, this.size / 8);
        ellipse(this.x_pos + (2 * this.size) / 3, this.y_pos - this.size / 4, this.size / 8);
        fill(217, 217, 217);
        rect(this.x_pos - 5, this.y_pos + 6, 10, 30);
        rect(this.x_pos - 5 + this.size, this.y_pos + 6, 10, 30);

        push();
        translate(this.x_pos + this.size / 2, this.y_pos - 8 + this.size + 5);
        for (let j = 0; j < 3; j++) {
            fill(255, 165, 0, 200 - j * 60);
            fill(255, 140, 0, 200 - j * 60);
            triangle(
                random(-6, 6),
                random(8, 15) + j * 5,
                -this.size / 6,
                this.size / 5 + j * 6,
                this.size / 6,
                this.size / 5 + j * 6
            );
        }
        pop();
        // Handles laser shooting if the robot has a shooting interval
        if (this.shootInterval) {
            this.shootLaser();
            this.moveLasers();
            this.drawLasers();
        }
    }
    // Fires a laser at regular intervals
    shootLaser() {
        if (millis() - this.lastShotTime > this.shootInterval) {
            this.lasers.push({
                x_pos: this.x_pos,
                y_pos: this.y_pos + 20,
                speed: 4 * this.direction,
                active: true,
                start_x: this.x_pos
            });
            this.lastShotTime = millis();
        }
    }
    // Moves the lasers forward
    moveLasers() {
        for (let laser of this.lasers) {
            if (laser.active) {
                laser.x_pos += laser.speed;
                if (Math.abs(laser.x_pos - laser.start_x) >= 300) {
                    laser.active = false;
                }
            }
        }
    }
    // Draws the lasers fired by the robot
    drawLasers() {
        fill(255, 0, 0);
        for (let laser of this.lasers) {
            if (laser.active) {
                rect(laser.x_pos, laser.y_pos, 10, 3);
            }
        }
    }
    // Checks if the robot's laser hits the player
    checkLaserCollision(playerX, playerY) {
        for (let laser of this.lasers) {
            const hitbox = {
                left: playerX - 10,
                right: playerX + 10,
                top: playerY - 50,
                bottom: playerY
            };

            if (
                laser.active &&
                laser.x_pos > hitbox.left &&
                laser.x_pos < hitbox.right &&
                laser.y_pos > hitbox.top &&
                laser.y_pos < hitbox.bottom
            ) {
                laser.active = false;
                return true;
            }
        }
        return false;
    }
    // Checks if the player collides with the enemy robot
    checkCollision(gameChar_x, gameChar_y) {
        return (
            gameChar_x + 10 > this.x_pos &&
            gameChar_x - 10 < this.x_pos + this.size &&
            gameChar_y > this.y_pos &&
            gameChar_y - 50 < this.y_pos + this.size
        );
    }
}

// Draws all enemy robots on the screen
function drawEnemyRobots() {
    for (let i = 0; i < enemyRobots.length; i++) {
        enemyRobots[i].draw();
    }
}
// Moves all enemy robots
function EnemyRobotMovement() {
    for (let i = 0; i < enemyRobots.length; i++) {
        enemyRobots[i].move();
    }
}
// Checks if the player collides with any enemy robot
function checkRobotCollision() {
    for (let i = 0; i < enemyRobots.length; i++) {
        if (enemyRobots[i].checkCollision(gameChar_x, gameChar_y)) {
            hasCollided = true;
            if (!enemyrobotcollisionSound.isPlaying()) {
                enemyrobotcollisionSound.play();
            }
            checkCharacterDie();
        }
    }
}
// Checks if the player gets hit by any robot's laser
function checkRobotLaserCollisions() {
    for (let robot of enemyRobots) {
        if (robot.checkLaserCollision(gameChar_x, gameChar_y)) {
            haslazerCollided = true;
            if (!enemyrobotlazerSound.isPlaying()) {
                enemyrobotlazerSound.play();
            }
            checkCharacterDie();
        }
    }
}

//draws bombs
function drawBombs(bomb) {
    for (let i = 0; i < bombs.length; i++) {
        let bomb = bombs[i];
        if (!bomb.blast) {
            push();
            fill(0);
            ellipse(bomb.x_pos, bomb.y_pos, bomb.size, bomb.size);
            stroke(100);
            strokeWeight(2);
            line(bomb.x_pos, bomb.y_pos - bomb.size / 2, bomb.x_pos, bomb.y_pos - bomb.size);
            noStroke();
            fill(255, 0, 0);
            ellipse(bomb.x_pos, bomb.y_pos - bomb.size, bomb.size / 6, bomb.size / 6);
            for (let j = 0; j < 3; j++) {
                let fireColor = color(255, 140 - j * 40, 0, 200 - j * 60);
                fill(fireColor);
                noStroke();
                triangle(
                    bomb.x_pos - random(2, 5),
                    bomb.y_pos - 15 - random(5, 8) - j * 5,
                    bomb.x_pos + random(2, 5),
                    bomb.y_pos - 15 - random(5, 8) - j * 5,
                    bomb.x_pos,
                    bomb.y_pos - 30 - j * 2
                );
            }
            pop();
        }
    }
}
// Checks if the player collides with any bomb
function checkBombCollision() {
    for (let bomb of bombs) {
        if (!bomb.blast && dist(gameChar_x, gameChar_y, bomb.x_pos, bomb.y_pos) < bomb.size / 2 + 10) {
            bomb.blast = true;
            if (!bombblastSound.isPlaying()) {
                bombblastSound.play();
            }
            checkCharacterDie();
        }
    }
>>>>>>> 6fa39653a573b47887e6507c9382ea71beeb3ae0
}