export abstract class Magic{
    constructor(private name:string){
        console.log(`Creating Magic - ${name}`)
    }

    getName(){
        return this.name
    }
}

export class CSharp extends Magic{
    constructor(){
        super("C#")
    }
}

export class CPlusPlus extends Magic{
    constructor(){
        super("C++")
    }
}

export class Python extends Magic{
    constructor(){
        super("Python")
    }
}
