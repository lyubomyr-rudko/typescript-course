import { Creature } from "./Creature"

export abstract class Enemy extends Creature{
    constructor(name:string){
        super(name)
        console.log(`Creating Enemy - ${name}...`)
    }
}

export class Orc extends Enemy{
    constructor(){
        super("Orc")
    }
}

export class Goblin extends Enemy{
    constructor(){
        super("Goblin")
    }
}

export class Dragon extends Enemy{
    constructor(){
        super("Dragon")
    }
}