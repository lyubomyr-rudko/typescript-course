function lesson19Homework() {
  type TMember = { role: string };

  abstract class Player implements TMember {
    role = "player";
    abstract getInfoOfMember(): void;
  }
  abstract class Staff implements TMember {
    role = "stuff";
    abstract getInfoOfMember(): void;
  }

  class Coach extends Staff {
    constructor(public age: number, public position: string, public expirience: number) {
      super();
    }
    getInfoOfMember(): void {
      console.log(
        `Role of this member is ${this.role} and position ${this.position} , his age is ${this.age} and his expirience is ${this.expirience}`
      );
    }
  }
  class Doctor extends Staff {
    constructor(public age: number, public position: string, public expirience: number) {
      super();
    }
    getInfoOfMember(): void {
      console.log(
        `Role of this member is ${this.role} and position ${this.position} , his age is ${this.age} and his expirience is ${this.expirience}`
      );
    }
  }
  class Masseur extends Staff {
    constructor(public age: number, public position: string, public expirience: number) {
      super();
    }
    getInfoOfMember(): void {
      console.log(
        `Role of this member is ${this.role} and position ${this.position} , his age is ${this.age} and his expirience is ${this.expirience}`
      );
    }
  }

  class Reciever extends Player {
    constructor(public age: number, public position: string, public expirience: number) {
      super();
    }
    getInfoOfMember(): void {
      console.log(
        `Role of this member is ${this.role} and position ${this.position} , his age is ${this.age} and his expirience is ${this.expirience}`
      );
    }
  }
  class Opposite extends Player {
    constructor(public age: number, public position: string, public expirience: number) {
      super();
    }
    getInfoOfMember(): void {
      console.log(
        `Role of this member is ${this.role} and position ${this.position} , his age is ${this.age} and his expirience is ${this.expirience}`
      );
    }
  }
  class Setter extends Player {
    constructor(public age: number, public position: string, public expirience: number) {
      super();
    }
    getInfoOfMember(): void {
      console.log(
        `Role of this member is ${this.role} and position ${this.position} , his age is ${this.age} and his expirience is ${this.expirience}`
      );
    }
  }

  class PlayersFactory {
    public createTeamMember(age: number, role: string, expirience: number): Player {
      let member: Player | null = null;
      if (role === "reciever") {
        member = new Reciever(age, role, expirience);
      } else if (role === "opposite") {
        member = new Opposite(age, role, expirience);
      } else if (role === "setter") {
        member = new Setter(age, role, expirience);
      } else {
        throw new Error("this position doesn't exist in team");
      }
      return member;
    }
  }
  class StaffFactory {
    public createTeamMember(age: number, role: string, expirience: number): Staff {
      let member: Staff | null = null;
      if (role === "coach") {
        member = new Coach(age, role, expirience);
      } else if (role === "doctor") {
        member = new Doctor(age, role, expirience);
      } else if (role === "masseur") {
        member = new Masseur(age, role, expirience);
      } else {
        throw new Error("this position doesn't exist in team");
      }
      return member;
    }
  }

  type Factory = StaffFactory | PlayersFactory;

  class TeamMemberStore {
    public factory: Factory;
    public constructor(factory: Factory) {
      this.factory = factory;
    }

    public createTeamMember(age: number, role: string, expirience: number) {
      let member;
      member = this.factory.createTeamMember(age, role, expirience);
      return member;
    }
  }

  const player = new TeamMemberStore(new PlayersFactory());
  const staff = new TeamMemberStore(new StaffFactory());
  const reciever = player.createTeamMember(26, "reciever", 12);
  const opposite = player.createTeamMember(32, "opposite", 15);
  const setter = player.createTeamMember(36, "setter", 8);
  const coach = staff.createTeamMember(58, "coach", 44);
  const doctor = staff.createTeamMember(47, "doctor", 22);
  const masseur = staff.createTeamMember(42, "masseur", 12);

  console.log(reciever);
  console.log(opposite);
  console.log(setter);
  console.log(coach);
  console.log(doctor);
  console.log(masseur);

  doctor.getInfoOfMember()
  reciever.getInfoOfMember()
}
lesson19Homework();
