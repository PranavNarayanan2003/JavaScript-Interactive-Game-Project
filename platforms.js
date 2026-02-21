//Factorry pattern used and represents an individual platform in the game world
class Platform {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    //Draws the platform as a rectangle on the screen
    draw() {
        fill(156, 39, 6);
        rect(this.x, this.y, this.width, this.height);
    }
    //checks if the character is landing on the platform
    checkContact(gc_x, gc_y) {
        if (gc_x + 5 > this.x && gc_x < this.x + this.width) {//check horizontal overlap
            let d = this.y - gc_y;//Distance between character and platform
            if (d >= -5 && d <= 5) { //small leeway to allow smooth landing
                return true;//charcter is standing on the platform
            }
        }
        return false;//no contact with platform
    }
}

//Manages creation and handling of multiple platforms
class PlatformFactory {
    constructor() {
        this.platforms = [];
    }
    //creates a new platform and adds it to the list
    createPlatform(x, y, width, height) {
        let platform = new Platform(x, y, width, height);
        this.platforms.push(platform);
        return platform;
    }
    //Draws all platforms in the game
    drawAllPlatforms() {
        this.platforms.forEach(platform => platform.draw());
    }
    // Checks if the character is standing on any platform.
    checkCharacterOnAnyPlatform(gc_x, gc_y) {
        let isContact = false;// Tracks whether character is on a platform
        onPlatform = false; // Global state for platform standing


        for (let platform of this.platforms) {
            if (platform.checkContact(gc_x, gc_y)) {
                onPlatform = true;//character on platform
                isContact = true;
                gameChar_y = platform.y; // Snap character onto platform
                velocityY = 0; // Stop downward movement
                isFalling = false;  // Prevent further falling
                jumpCount = 0; // Reset jump count for double jump
                break;
            }
        }

        // If no platform is detected and the character is above the ground, apply gravity.
        if (!isContact && gameChar_y < floorPos_y) {
            isFalling = true;
            gameChar_y += 1; // Apply gravity
        }
    }
}

//checks if a platform exists at a given X position
function getPlatformAtX(x) {
    if (!Array.isArray(platforms)) return null; // Ensure platforms is an array

    for (let platform of platforms) {
        if (x > platform.x && x < platform.x + platform.width) {
            return platform;
        }
    }
    return null;
}
