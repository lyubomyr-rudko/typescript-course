
type TBrain='smart' | 'regular' | 'idiot';
type TSkinn = 'black' | 'white';

abstract class HumanConstructor {
  protected name:string;
  constructor(name:string){
    this.name=name;
  }
  abstract addBrain(quality:TBrain):this;
  abstract addArms(quantity:number):this;
  abstract addLegs(quantity:number):this;
}


function HumanFactoryAbstract<
  A extends string,
  B extends TSkinn,
  C extends number,
  D extends number,
  F extends TBrain,
  T extends HumanConstructor
>(
  humanName:A,  
  legs:C, 
  arms:D, 
  brain:F, 
  Constructor:new (name:string) => T):T{
    return new Constructor(humanName).addArms(arms).addLegs(legs).addBrain(brain);
}


class HumanFactoryHolding {
  static getHuman(name:string, type:'black' | 'white', legs:number, arms:number, brain:TBrain){
    switch (type) {
      case 'black':
        return HumanFactoryAbstract(name,legs,arms,brain,AfricanHumanConstructor);
        break;
      case 'white':
        return HumanFactoryAbstract(name,legs,arms,brain,EuropianHumanConstructor);
        break;
      default:
        console.log(`Sorry, cant create this creature`);
    }
  }
}

class EuropianHumanConstructor extends HumanConstructor{
  protected brain:string;
  protected arms:number;
  protected legs:number;
  protected skin = 'white';
  constructor(name:string){
    super(name);
    this.brain='initial';
    this.arms=0;
    this.legs=0;
  }
  addBrain(quality:TBrain){
    this.brain=quality;
    return this
  }
  addArms(quantity:number){
    this.arms=quantity;
    return this
  }
  addLegs(quantity:number){
    this.legs=quantity;
    return this
  }
}
class AfricanHumanConstructor extends HumanConstructor{
  protected brain:string;
  protected arms:number;
  protected legs:number;
  protected skin  = 'black';

  constructor(name:string){
    super(name);
    this.brain='initial';
    this.arms=0;
    this.legs=0;
  }
  addBrain(quality:TBrain){
    this.brain=quality;
    return this
  }
  addArms(quantity:number){
    this.arms=quantity;
    return this
  }
  addLegs(quantity:number){
    this.legs=quantity;
    return this
  }
}


const jon = HumanFactoryHolding.getHuman('Jon','black',2,2,'regular');
const ben = HumanFactoryHolding.getHuman('Ben','white',1,3,'idiot');
const yulian = HumanFactoryHolding.getHuman('Julian','white',2,2,'smart')


console.log(jon);
console.log(ben);
console.log(yulian);
