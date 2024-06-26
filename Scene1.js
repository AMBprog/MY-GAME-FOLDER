var link = document.createElement("link");
link.href = "style.css";
link.rel = "stylesheet";

document.head.appendChild(link);


class Scene1 extends Phaser.Scene {
    constructor () {
        super("bootGame");
    }

    preload()
                {     
        this.load.image("city", "assets/images/city_big.png");
        this.load.image("charachter1", "assets/images/charachter1.png");
        this.load.image("charachter2", "assets/images/charachter2.png");
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}