function lesson19Homework() {
  abstract class Player {
    height: number;
    weight: number;
    constructor(height: number, weight: number) {
      this.height = height;
      this.weight = weight;
    }
    abstract setHeight(height: number): void;
    abstract setWeight(weight: number): void;
  }

  class Reciever extends Player {
    constructor(height: number, weight: number) {
      super(height, weight);
    }
    setHeight(height: number) {
      this.height = height;
    }
    setWeight(weight: number) {
      this.weight = weight;
    }
  }
  class Opposite extends Player {
    constructor(height: number, weight: number) {
      super(height, weight);
    }
    setHeight(height: number) {
      this.height = height;
    }
    setWeight(weight: number) {
      this.weight = weight;
    }
  }
  class Setter extends Player {
    constructor(height: number, weight: number) {
      super(height, weight);
    }
    setHeight(height: number) {
      this.height = height;
    }
    setWeight(weight: number) {
      this.weight = weight;
    }
  }
  class MiddleBlocker extends Player {
    constructor(height: number, weight: number) {
      super(height, weight);
    }
    setHeight(height: number) {
      this.height = height;
    }
    setWeight(weight: number) {
      this.weight = weight;
    }
  }
  class Libero extends Player {
    constructor(height: number, weight: number) {
      super(height, weight);
    }
    setHeight(height: number) {
      this.height = height;
    }
    setWeight(weight: number) {
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
    public factory: PlayersFactory;

    public constructor(factory: PlayersFactory) {
      this.factory = factory;
    }

    public create(position: string, height: number, weight: number) {
      let player;
      return (player = this.factory.createPlayer(position, height, weight));
    }
  }

  const player = new PlayersStore(new PlayersFactory());
  const reciever = player.create("reciever", 192, 86);
  const opposite = player.create("opposite", 199, 96);
  const libero = player.create("libero", 179, 73);
  libero.setHeight(220);
  libero.setWeight(120);
  console.log(reciever);
  console.log(opposite);
  console.log(libero);
}
lesson19Homework();
