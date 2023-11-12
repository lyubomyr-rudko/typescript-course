export abstract class Ground{
    constructor(private name:string){
        console.log(`Creating Ground of - ${name}`)
    }

    getName(){
        return this.name
    }
}

export class Plains extends Ground{
    constructor(){
        super("Plains")
    }
}

export class Rock extends Ground{
    constructor(){
        super("Rock")
    }
}

export class Lava extends Ground{
    constructor(){
        super("Lava")
    }
}

