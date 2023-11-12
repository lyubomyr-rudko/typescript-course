export abstract class Creature{
    constructor(private name:string){
        console.log(`Initializing Creature - ${name}...`)
    }

    public getName(){
        return this.name
    }
}

