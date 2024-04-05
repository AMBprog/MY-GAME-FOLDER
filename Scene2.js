class Scene2 extends Phaser.Scene {
    constructor () {
        super("playGame");
    }


    create (){        
        this.background = this.add.image(0,0,"city");
        this.background.setOrigin(0,0);
        
        this.charachter1 = this.add.image(config.width/2 - 50, config.height/2 + 60, "charachter1");
        this.charachter1.setScale(3);
        this.charachter2 = this.add.image(config.width/2 + 50, config.height/2 + 60, "charachter2");
        this.charachter2.setScale(3);

        
        
        this.add.text(20, 20, "Playing game", {
            font: "25px Arial", 
            fill: "yellow"
        });
    }
}