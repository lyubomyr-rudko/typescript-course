
function factory() {
  class Project {
    constructor(
      public type: string,
      public name: string,
      public duration: number,
      public cost?: number | null,
    ) {
      this.type = type,
        this.name = name,
        this.duration = duration,
        this.cost = cost || null
    }
  }

  class ProjectFactory {
    create(type: string, name: string, duration: number, cost?: number): Project {
      switch (type) {
        case 'free':
          return new Project(type, name, duration);
        case 'paid':
          return new Project(type, name, duration, cost);
        default:
          throw new Error('Unknow type')
      }
    }
  }

  const factory = new ProjectFactory();

  const projectHornAndHooves = factory.create('free', 'hornAndHoves', 3);
  console.log('projectHornAndHooves', projectHornAndHooves)
  const projectJunior = factory.create('paid', 'junior', 5, 1000);
  console.log('projectJunior', projectJunior)

}

factory();