import { Ground, Lava, Plains, Rock } from "./Ground/Ground"
import { eventsArray } from "./GameEvents/GameEvents"
import { generateRandomNumber } from "./utility"
import { CPlusPlus, CSharp, Magic, Python } from "./Magic/Magic"
import { Dragon, Enemy, Goblin, Orc } from "./Creature/Enemy"
import { Player } from "./Creature/Player"

class GameFacade{
    private event:string = this.getRandomEvent()
    private enemy:Enemy = this.getRandomEnemy()
    private magic:Magic = this.getRandomMagic()
    private ground:Ground = this.getRandomGround()
    private protagonist:Player = new Player("Jorge")

    constructor(){
        console.log("Game Facade")
        console.log(this.generateLore())
    }
    private generateLore():string {
        return `\n\tHello ${this.protagonist.getName()}.\n\t${this.event}.\n\tYou need to master ${this.magic.getName()} to slain ${this.enemy.getName()}.\n\tThere will be a lot of challenges and ${this.ground.getName()} in your way.\n\tGood luck!\n`
    }

    private getRandomEvent():string{
        if(eventsArray.length){
            return eventsArray[generateRandomNumber(0, eventsArray.length-1)]
        }

        return "Unknown event"
    }

    private getRandomMagic():Magic{
        const magicTypes = [CSharp, CPlusPlus, Python]
        const randomIndex = generateRandomNumber(0, magicTypes.length - 1)
        
        const randomMagicType = magicTypes[randomIndex]
        return new randomMagicType() 
    }

    private getRandomEnemy():Enemy{
        const enemyTypes:(typeof Orc)[] = [Orc, Goblin, Dragon]
        const randomIndex = generateRandomNumber(0, enemyTypes.length - 1)
        
        const randomEnemyType = enemyTypes[randomIndex]
        return new randomEnemyType() 
    }

    private getRandomGround():Ground{
        const groundTypes:(typeof Lava)[] = [Lava, Plains, Rock]
        const randomIndex = generateRandomNumber(0, groundTypes.length - 1)
        
        const randomGroundType = groundTypes[randomIndex]
        return new randomGroundType() 
    }
}

const game = new GameFacade()