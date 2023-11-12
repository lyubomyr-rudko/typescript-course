import { Creature } from "./Creature"

export class NPC extends Creature{
    constructor(name:string){
        super(name)
        console.log(`Creating NPC - ${name}...`)
    }
}
