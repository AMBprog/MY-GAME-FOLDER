var link = document.createElement("link");
link.href = "style.css";
link.rel = "stylesheet";

document.head.appendChild(link);

class Character {
    constructor (name, hitpoints, damage) {
        this.name = name
        this.hitpoints = hitpoints;
        this.damage = damage;
        this.phaserImage = ""

        this.attack = function (target) {
            target.hitpoints -= this.damage;
            console.log(`${target.name} a ${target.hitpoints} points de vie restants.`)
        }    
    }
}

const main = new Character ("Till", 100, 10);
const enemy1 = new Character ("Tali", 80, 5);
let endingText = ""


class Scene2 extends Phaser.Scene {
    constructor () {
        super("playGame");
    }


    create (){        
        this.background = this.add.image(0,0,"city");
        this.background.setOrigin(0,0);
        
        main.phaserImage = this.add.image(config.width/2 - 50, config.height/2 + 150, "charachter1");
        main.phaserImage.setScale(5);
        main.phaserImage.setInteractive();
        enemy1.phaserImage = this.add.image(config.width/2 + 100, config.height/2 + 150, "charachter2");
        enemy1.phaserImage.setScale(5);
        enemy1.phaserImage.setInteractive();

        this.input.on('gameobjectup', function(pointer, gameObject){
            gameObject.emit('clicked', gameObject)
        }, this)

        enemy1.phaserImage.on('clicked', this.attack)
        
        this.add.text(20, 20, "Playing game", {
            font: "25px Arial", 
            fill: "yellow"
        });

        endingText = this.add.text(40, 40, "", {
            font: "25px Arial", 
            fill: "white"
        });
    }

    update(){
    }
    
    attack(){
        main.attack(enemy1);
        if(enemy1.hitpoints <= 0){
            endingText.text = "enemy1 a été vaincu !"
        }   
    }
}