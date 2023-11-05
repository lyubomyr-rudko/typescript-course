function lesson19Homework() {
  abstract class Player {
    abstract setHeight(height: number): void;
    abstract setWeight(weight: number): void;
  }

  class Reciever extends Player {
    constructor(public height: number, public weight: number) {
      super();
    }
    setHeight(height: number): void {
      this.height = height;
    }
    setWeight(weight: number): void {
      this.weight = weight;
    }
  }
  class Opposite extends Player {
    constructor(public height: number, public weight: number) {
      super();
    }
    setHeight(height: number): void {
      this.height = height;
    }
    setWeight(weight: number): void {
      this.weight = weight;
    }
  }
  class Setter extends Player {
    constructor(public height: number, public weight: number) {
      super();
    }
    setHeight(height: number): void {
      this.height = height;
    }
    setWeight(weight: number): void {
      this.weight = weight;
    }
  }
  class MiddleBlocker extends Player {
    constructor(public height: number, public weight: number) {
      super();
    }
    setHeight(height: number): void {
      this.height = height;
    }
    setWeight(weight: number): void {
      this.weight = weight;
    }
  }
  class Libero extends Player {
    constructor(public height: number, public weight: number) {
      super();
    }
    setHeight(height: number): void {
      this.height = height;
    }
    setWeight(weight: number): void {
      this.weight = weight;
    }
  }

  class PlayersFactory {
    public createPlayer(position: string, height: number, weight: number): Player {
      let player: Player | null = null;
      if (position === "reciever") {
        player = new Reciever(height, weight);
      } else if (position === "opposite") {
        player = new Opposite(height, weight);
      } else if (position === "setter") {
        player = new Setter(height, weight);
      } else if (position === "middleBlocker") {
        player = new MiddleBlocker(height, weight);
      } else if (position === "libero") {
        player = new Libero(height, weight);
      } else {
        throw new Error("this position doesn't exist in volleyball");
      }
      return player;
    }
  }

  class PlayersStore {
    public constructor(public factory: PlayersFactory) {}

    public addPlayer(position: string, height: number, weight: number) {
      let player;
      player = this.factory.createPlayer(position, height, weight);
      return player;
    }
  }

  const player = new PlayersStore(new PlayersFactory());
  const reciever = player.addPlayer("reciever", 192, 86);
  const opposite = player.addPlayer("opposite", 199, 96);
  const libero = player.addPlayer("libero", 179, 73);
  libero.setHeight(220);
  libero.setWeight(120);
  console.log(reciever);
  console.log(opposite);
  console.log(libero);
}
lesson19Homework();
