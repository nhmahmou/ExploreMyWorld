<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Nour Mahmoud - Game Developer Portfolio | Explore projects, skills, and accomplishments through an interactive and engaging experience.">
    <meta name="keywords" content="Nour Mahmoud, Game Developer, Portfolio, GitHub, Interactive Game Portfolio, C++, SDL2, ZeroMQ, 2D Game Engine, Video Games, Game Design">
    <meta name="author" content="Nour Mahmoud">
    <meta name="robots" content="index, follow">
    <title>Nour Mahmoud - Game Developer Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>
    <link rel="icon" type="image/png" href="favicon.png">
</head>
<body>
    <div id="game-container"></div>

    <noscript>
        <p>This portfolio uses an interactive game format. Please enable JavaScript to explore fully.</p>
    </noscript>

    <footer>
        <div class="footer-content">
            <p>&copy; 2025 Nour Mahmoud. All rights reserved.</p>
            <p><a href="mailto:nour.mahmoud@example.com">Contact Me</a> | <a href="https://github.com/nour-mahmoud" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/nour-mahmoud" target="_blank">LinkedIn</a></p>
        </div>
    </footer>

    <script>
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            backgroundColor: '#1d1d1d',
            parent: 'game-container',
            scene: {
                preload: preload,
                create: create,
                update: update
            }
        };

        const game = new Phaser.Game(config);

        function preload() {
            this.load.image('background', 'assets/background.png');
            this.load.image('player', 'assets/player.png');
            this.load.image('project', 'assets/project.png');
            this.load.image('achievement', 'assets/achievement.png');
        }

        function create() {
            this.add.image(400, 300, 'background');

            const title = this.add.text(400, 50, 'Nour Mahmoud - Game Developer Portfolio', {
                font: '28px Arial',
                fill: '#ffffff',
                align: 'center'
            }).setOrigin(0.5);

            const startButton = this.add.text(400, 300, 'Start Exploring', {
                font: '22px Arial',
                fill: '#00ff00'
            }).setOrigin(0.5)
              .setInteractive()
              .on('pointerdown', () => startExploration.call(this));
        }

        function startExploration() {
            this.scene.start('exploration');
        }

        function update() {
            // Game loop updates
        }
    </script>
</body>
</html>
