class Character {
    constructor (name, hitpoints, damage) {
        this.name = name
        this.hitpoints = hitpoints;
        this.damage = damage;
        this.phaserImage = ""

        this.attack = function (target) {
            target.hitpoints -= this.damage;
            console.log(target.hitpoints);
        }
    }
}

const main = new Character ("You", 100, 10);
const enemy1 = new Character ("Enemy1", 80, 5);


class Scene2 extends Phaser.Scene {
    constructor () {
        super("playGame");
    }


    create (){        
        this.background = this.add.image(0,0,"city");
        this.background.setOrigin(0,0);
        
        main.phaserImage = this.add.image(config.width/2 - 50, config.height/2 + 60, "charachter1");
        main.phaserImage.setScale(3);
        main.phaserImage.setInteractive();
        enemy1.phaserImage = this.add.image(config.width/2 + 50, config.height/2 + 60, "charachter2");
        enemy1.phaserImage.setScale(3);

        this.input.on('gameobjectup', function(pointer, gameObject){
            gameObject.emit('clicked', gameObject)
        }, this)

        main.phaserImage.on('clicked', this.attack)
        
        this.add.text(20, 20, "Playing game", {
            font: "25px Arial", 
            fill: "yellow"
        });
    }
    
    attack(){
        main.attack(enemy1);
    }
}