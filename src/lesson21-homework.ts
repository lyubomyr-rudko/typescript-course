type TBody = 'A' | 'B' | 'C';
type TEngin = 1.8 | 2 | 2.5;
type TWheel = 'FWD' | 'RWD' | '4WD';

class Wheel{
  protected dimension:string;
  constructor(type:TWheel){
    this.dimension = type;
  }
  get type(){
    return this.dimension
  }
}
class Engin{
  protected power:TEngin;
  constructor(power:TEngin){
    this.power = power;
  }
  get type(){
    return this.power
  }
}

class Body{
  protected bodyType:TBody;
  constructor(bodyType:TBody){
    this.bodyType = bodyType;
  }
  get type(){
    return this.bodyType
  }
}

class Car<T extends Body,F extends Engin,J extends Wheel>{
  protected body:T;
  protected engin:F;
  protected wheel:J;
  constructor(bodyType:T, engin: F, wheel:J){
    this.body = bodyType;
    this.engin = engin;
    this.wheel = wheel;
  }
  get info(){
    return `Engin-${this.engin.type}, Wheels - ${this.wheel.type}, Body - ${this.body.type}`
  }
}


//This is facade
class CarFactory{
  createCar(bodyType:TBody, wheelType:TWheel, engiType:TEngin) {
    const body = new Body(bodyType);
    const wheels = new Wheel(wheelType);
    const engin = new Engin(engiType);
    return new Car(body,engin,wheels);
  }
}

const factory = new CarFactory();
const myCar = factory.createCar('A','4WD',2.5);
console.log(myCar.info);