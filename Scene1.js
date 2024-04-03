class Scene1 extends Phaser.Scene {
    constructor () {
        super("bootGame");
    }

    preload(){
        this.add.image("background", "assets/images/background.png");
    }
    

    create() {
        this.add.text(20, 20, "Loading game...");
    }
}