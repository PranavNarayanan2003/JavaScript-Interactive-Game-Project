A p5.js interactive 2D Cyber-Adventure Platformer 2D Game

A dynamic side-scrolling platformer game built with p5.js and p5.sound. This project demonstrates core game design principles including collision detection, state management, procedural environment rendering, and object-oriented programming in JavaScript.

- Game Features
-Game Features
Advanced Movement: Smooth character physics featuring jumping and a double-jump mechanic.

Dynamic Environments: Multi-layered backgrounds with gradient skies, 3D-effect mountains, trees, and canyons.
Collectibles & Progression: Gather coins to increase your score and find hidden

Immersive Audio: Integrated sound effects for jumping, collecting items, environmental rain, and game states (level up, game over, victory).

- Getting Started
Prerequisites
To run this game locally, you just need a modern web browser. The project uses:

Run the game:
Simply open index.html in any web browser.

-Controls

A: Move Left
D: Move Right
W: Jump (Press twice for Double Jump)

Spacebar: Restart Game (when Game Over)

- Project Structure
The codebase is modularized to separate concerns:

sketch.js: The main entry point; handles the game loop (setup and draw), global state, and camera logic.
collectables.js: Manages coins and extra-life hearts.

UI.js: Handles the Heads-Up Display (HUD) for scores, lives, and game-over screens.

- Technical Highlights
Factory Pattern: Used in platforms.js to efficiently create and manage multiple platform instances.
Camera System: Implemented using p5 push(), pop(), and translate() to create a scrolling effect that follows the player.
