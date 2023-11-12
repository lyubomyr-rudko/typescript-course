import { Creature } from "./Creature"

export class Player extends Creature{
    constructor(name:string){
        super(name)
        console.log(`Creating Player - ${name}...`)
    }
}
