//smooth gradient background            
function drawBackground() {
    noStroke();
    for (let y = 0; y < height; y++) {
        let inter = map(y, 0, height, 0, 1);
        let colorTop = color(169, 186, 198);
        let colorBottom = color(54, 69, 79);
        let gradientColor = lerpColor(colorTop, colorBottom, inter);
        stroke(gradientColor);
        line(0, y, width, y);
    }
}

//draw mountains with a 3d effect
function drawMountains() {
    for (let i = 0; i < mountains.length; i++) {
        let x = mountains[i].x_pos;
        let baseY = mountains[i].floorPos_y;
        let peakY = mountains[i].height;

        noStroke();

        fill(105, 105, 105);
        triangle(x, baseY, x + 130, peakY, x + 260, baseY);

        fill(169, 169, 169);
        triangle(x + 130, peakY, x + 260, baseY, x + 300, baseY);

        fill(220, 220, 220);
        triangle(x + 114, peakY + 30, x + 130, peakY, x + 140, peakY + 20);

        fill(255, 255, 255);
        triangle(x + 130, peakY, x + 140, peakY + 20, x + 144, peakY + 22);
    }
}

//draw trees with a 3d effect
function drawTrees() {
    for (var i = 0; i < trees_x.length; i++) {
        let x = trees_x[i];

        fill(54, 34, 4);
        rect(x, floorPos_y - 60, 20, 60);
        54, 34, 4
        fill(76, 42, 10);
        rect(x + 10, floorPos_y - 60, 10, 60);

        fill(1, 80, 32);
        triangle(x - 30, floorPos_y - 60, x + 10, floorPos_y - 120, x + 50, floorPos_y - 60);

        fill(44, 124, 44);
        triangle(x + 10, floorPos_y - 60, x + 10, floorPos_y - 120, x + 50, floorPos_y - 60);

        fill(1, 90, 32);
        triangle(x - 20, floorPos_y - 90, x + 10, floorPos_y - 140, x + 40, floorPos_y - 90);

        fill(44, 124, 44);
        triangle(x + 10, floorPos_y - 90, x + 10, floorPos_y - 140, x + 40, floorPos_y - 90);

        fill(1, 100, 32);
        triangle(x - 10, floorPos_y - 110, x + 10, floorPos_y - 160, x + 30, floorPos_y - 110);

        fill(44, 124, 44);
        triangle(x + 10, floorPos_y - 110, x + 10, floorPos_y - 160, x + 30, floorPos_y - 110);
    }
}

// Creates soft, layered clouds with a 3d effect
function drawClouds() {
    for (let i = 0; i < clouds.length; i++) {
        let x = clouds[i].x_pos;
        let y = clouds[i].y_pos;
        let scale = clouds[i].scale;

        noStroke();

        fill(210, 210, 210, 160);
        ellipse(x + 40, y, 85 * scale, 55 * scale);
        ellipse(x + 95, y - 3, 65 * scale, 45 * scale);
        ellipse(x - 10, y + 2, 70 * scale, 50 * scale);

        fill(245, 245, 245, 200);
        ellipse(x + 38, y - 5, 80 * scale, 50 * scale);
        ellipse(x + 90, y - 8, 60 * scale, 42 * scale);
        ellipse(x - 5, y - 5, 65 * scale, 42 * scale);

        fill(255, 255, 255, 220);
        ellipse(x + 35, y - 7, 75 * scale, 48 * scale);
        ellipse(x + 88, y - 10, 58 * scale, 40 * scale);
        ellipse(x - 3, y - 7, 60 * scale, 38 * scale);
        //simulate drifting clouds
        clouds[i].x_pos += random(0.3, 1.2);
        // Reset cloud position when out of bounds
        if (clouds[i].x_pos > width + 6000) {
            clouds[i].x_pos = -random(100, 300);
            clouds[i].y_pos = random(50, 200);
        }
    }
}

// Simulates falling raindrops, resetting them when they hit the ground.
function drawRaindrops() {
    for (var i = 0; i < raindrops.length; i++) {
        fill(0, 0, 255, 150);
        ellipse(raindrops[i].x_pos, raindrops[i].y_pos, raindrops[i].size, raindrops[i].size * 2);
        raindrops[i].y_pos += raindrops[i].speed;

        // Reset raindrop position when it reaches the ground
        if (raindrops[i].y_pos > floorPos_y) {
            raindrops[i].y_pos = raindrops[i].cloud.y_pos + random(0, 50); // Reset to cloud position
            raindrops[i].x_pos = raindrops[i].cloud.x_pos + random(-50, 50); // Randomize x-position around cloud
        }
    }
}

// Creates canyons with depth shading for a 3D effect.
function drawCanyons(t_canyon) {
    noStroke();
    fill(139, 69, 19);
    beginShape();
    vertex(t_canyon.x_pos - 10, 432);
    vertex(t_canyon.x_pos + t_canyon.width + 7, 432);
    vertex(t_canyon.x_pos + t_canyon.width, 576);
    vertex(t_canyon.x_pos, 576);
    endShape(CLOSE);

    fill(115, 74, 18);
    beginShape();
    vertex(t_canyon.x_pos + 5, 432);
    vertex(t_canyon.x_pos + t_canyon.width - 5, 432);
    vertex(t_canyon.x_pos + t_canyon.width - 10, 576);
    vertex(t_canyon.x_pos + 10, 576);
    endShape(CLOSE);

    fill(150, 80, 30);
    beginShape();
    vertex(t_canyon.x_pos - 9, 432);
    vertex(t_canyon.x_pos + 10, 432);
    vertex(t_canyon.x_pos + 20, 576);
    vertex(t_canyon.x_pos, 576);
    endShape(CLOSE);
}

//check if character falls into canyon
function checkCanyons(t_canyon) {
    if (
        gameChar_y >= floorPos_y &&
        gameChar_x > t_canyon.x_pos &&
        gameChar_x < t_canyon.x_pos + t_canyon.width
    ) {
        isPlummeting = true;
        velocityY = 2;

        if (!plummetingSound.isPlaying()) {
            plummetingSound.play();
        }

    }

    if (isPlummeting) {
        velocityY += gravity * 1.5;
        gameChar_y += velocityY;
        if (gameChar_y > height + 100) {
            checkCharacterDie();
        }

    }
}

//check if either collectable or hearts are is in a canyon
function isInCanyon(x) {
    for (let canyon of canyons) {
        if (x > canyon.x_pos && x < canyon.x_pos + canyon.width) {
            return true;
        }
    }
    return false;
}

//portal with a pulsating effectd the portal changes colour from purpule to gold once the character passes through
function renderPortal() {
    let glowSize = 5 * sin(frameCount * 0.1); // Pulsating effect

    for (let i = 0; i < portal.length; i++) {
        let p = portal[i];
        // Outer glow of the portal
        fill(50, 50, 150, 200);
        ellipse(p.x_pos, floorPos_y - 60, 80 + glowSize, 120 + glowSize);

        if (!p.isReached) {
            // Inactive portal state
            fill(100, 0, 200, 150);
            ellipse(p.x_pos, floorPos_y - 60, 60 + glowSize, 90 + glowSize);
        } else {
            // Active portal state
            fill(255, 255, 0, 200);
            ellipse(p.x_pos, floorPos_y - 60, 80 + glowSize, 120 + glowSize);
            fill(255, 255, 255, 150);
            ellipse(p.x_pos, floorPos_y - 60, 50 + glowSize, 75 + glowSize);
        }
    }

}

function checkPortal() {
    // Check first portal
    if (!portal[0].isReached && dist(gameChar_x, gameChar_y, portal[0].x_pos, floorPos_y) < 50) {
        portal[0].isReached = true;
        lastCheckpoint = { x: gameChar_x, y: floorPos_y };
    }
    // Only check second portal if first is already reached
    else if (portal[0].isReached && !portal[1].isReached &&
        dist(gameChar_x, gameChar_y, portal[1].x_pos, floorPos_y) < 50) {
        portal[1].isReached = true;
        lastCheckpoint = { x: gameChar_x, y: floorPos_y };
    }
    // Only check third portal if second is already reached
    else if (portal[1].isReached && !portal[2].isReached &&
        dist(gameChar_x, gameChar_y, portal[2].x_pos, floorPos_y) < 50) {
        portal[2].isReached = true;
        lastCheckpoint = { x: gameChar_x, y: floorPos_y };
    }
}

