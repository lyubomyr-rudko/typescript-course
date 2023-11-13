class Head {
  relax() {
    console.log("relax your head");
  }
  concentreate() {
    console.log("concetrate on task");
  }
}

class Hands {
  moveHands() {
    console.log("move your hands properly  to run faster");
  }
  relaxHands() {
    console.log("relax your hands");
  }
}

class Legs {
  moveLegs() {
    console.log("move yor legs to run faster");
  }
  relaxLegs() {
    console.log("relax your legs");
  }
}

class Lungs {
  deapBreathe() {
    console.log("breathe deep");
  }
  breatheOut() {
    console.log("breathe out you finished to run");
  }
}

class Human {
  protected head: Head;
  protected hands: Hands;
  protected legs: Legs;
  protected lungs: Lungs;
  constructor() {
    this.head = new Head();
    this.hands = new Hands();
    this.legs = new Legs();
    this.lungs = new Lungs();
  }
  startRunning() {
    this.head.concentreate();
    this.hands.moveHands();
    this.legs.moveLegs();
    this.lungs.deapBreathe();
  }
  relax() {
    this.head.relax();
    this.hands.relaxHands();
    this.legs.relaxLegs();
    this.lungs.breatheOut();
  }
}

class HumanFacade {
  private human: Human;
  constructor() {
    this.human = new Human();
  }
  run() {
    this.human.startRunning();
    console.log("We are running");
  }
  relax() {
    this.human.relax();
    console.log("You can rest");
  }
}

const humanFacade = new HumanFacade();
humanFacade.run();
humanFacade.relax();
