class Engine {
    start() {
        console.log("Engine started");
    }

    stop() {
        console.log("Engine stopped");
    }
}

class AirConditioner {
    turnOn() {
        console.log("Air Conditioner turned on");
    }

    turnOff() {
        console.log("Air Conditioner turned off");
    }
}

class Lights {
    turnOn() {
        console.log("Lights turned on");
    }

    turnOff() {
        console.log("Lights turned off");
    }
}

class CarSystemFacade {
    private engine: Engine;
    private airConditioner: AirConditioner;
    private lights: Lights;

    constructor() {
        this.engine = new Engine();
        this.airConditioner = new AirConditioner();
        this.lights = new Lights();
    }

    startCar() {
        this.engine.start();
        this.airConditioner.turnOn();
        this.lights.turnOn();
        console.log("Car started and ready to go!");
    }

    stopCar() {
        this.engine.stop();
        this.airConditioner.turnOff();
        this.lights.turnOff();
        console.log("Car stopped");
    }
}

const carSystem = new CarSystemFacade();

carSystem.startCar();

carSystem.stopCar();
