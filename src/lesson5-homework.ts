// use type narrowing to print the passanger info
function exercise23() {
  // TODO: define THuman type with properties name, age, driverLicenseId
  type THuman = {
    name: string
    age: number
    driverLicenseId: string
    type?: 'human'
  };
  // TODO: define TAnimal type with properties name, age, species
  type TAnimal = {
    name: string
    age: number
    species: string
    type?: 'animal'
  };
  // TODO: define TPassanger type as union of THuman and TAnimal
  type TPassenger = THuman | TAnimal

  // annotate the function to accept TPassanger type
  function printPassengerInfo(passenger: TPassenger) :void {
    // TODO: use type narrowing to print the passanger info
    console.log(passenger.name);
    console.log(passenger.age);
    // TODO: print driverLicenseId if passanger is human
    if ('driverLicenseId' in passenger) {
      console.log(passenger.driverLicenseId);
    }
    // TODO: print species if passanger is animal
    if ('species' in passenger) {
      console.log(passenger.species);
    }
  }
  // TODO: add missing properties to human and animal objects
  const human: THuman = {
    name: 'John',
    age: 18,
    driverLicenseId: 'HJ3H3443'
  };
  const animal: TAnimal = {
    name: 'Ace',
    age: 2,
    species: 'cat'
  };
  printPassengerInfo(human);
  printPassengerInfo(animal);
  // TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
  class Human implements THuman {
    constructor(public name: string, public age: number, public driverLicenseId: string) {
    }
  }
  class Animal implements TAnimal {
    constructor(public name: string, public age: number, public species: string) {
    }
  }

  function printPassengerInfo2(passenger: TPassenger): void {
    console.log(passenger.name)
    console.log(passenger.age)
    if (passenger instanceof Human) {
      console.log(passenger.driverLicenseId)
    }
    if (passenger instanceof Animal) {
      console.log(passenger.species)
    }
  }

  const passenger1 = new Human('John', 18, 'HK42H343')
  const passenger2 = new Animal('Ace', 2, 'cat')
  printPassengerInfo2(passenger1)
  printPassengerInfo2(passenger2)
  // TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
}

// TODO: compile and run the code
exercise23();

// use discriminated union to narrow the type of the object
function exercise24() {
  // TODO: add type property to TBlogMessage, TBlogImage, TBlogComment with literal type of 'message', 'image', 'comment'
  type TBlogMessage = {
    text: string
    type: 'message'
  };
  type TBlogImage = {
    url: string
    type: 'image'
  };
  type TBlogComment = {
    text: string
    messageId: string
    type: 'comment'
  };

  type TBlogPost = TBlogMessage | TBlogImage | TBlogComment;

  function printBlogPost(post: TBlogPost) {
    // TODO: use discriminated union to narrow the type of the object
    if (post.type === 'comment') {
      console.log("comment: ", post.text);
    }
    if (post.type === 'image') {
      console.log("image: ", post.url);
    }
    if (post.type === 'message') {
      console.log("message: ", post.text);
    }
  }

  // TODO: add missing type property to the objects
  printBlogPost({ text: "abc", type: 'message' });
  printBlogPost({ url: "abc", type: 'image' });
  printBlogPost({ text: "abc", messageId: "123", type: 'comment' });
}
// TODO: compile and run the code
exercise24();

// use non-null assertion operator
function exercise25() {
  type TPerson = {
    name: string;
    email?: string | null | undefined;
  };

  function sendEmail(email: string): void {
    console.log("sending email to", email);
  }

  function ensureContactable(person: TPerson) {
    // TODO: add check for null and undefined - throw error if person.email is null or undefined
    if (person.email === null || person.email === undefined) {
      throw new Error('person has no email');
    }
  }

  function contact(person: TPerson): void {
    ensureContactable(person);
    // TODO: uncomment code below and check that it compiles,  use non-null assertion operator to fix compile time error
    sendEmail(person.email!);
  }

  function contact2(person: TPerson): void {
    // Add inline check for null and undefined - throw error if person.email is null or undefined
    if (person.email === null || person.email === undefined) {
      throw new Error('person has no email');
    }
    // TODO: uncomment code below and check that it compiles
    sendEmail(person.email);
  }

  const person1: TPerson = {
    name: "John",
    email: "asdf@asdf.com",
  };
  const person2: TPerson = {
    name: "John",
    email: null,
  };

  contact(person1);
  contact2(person1);
  // contact(person2); this call throws an error

  // TODO: print the result to console
}
// TODO: compile and run the code
exercise25();

// Create an assertion function
function exercise26() {
  type TWidget = {
    name: string;
  };
  type TGadget = {
    os: string;
  };
  type TThing = TWidget | TGadget;

  // TODO: add your code to make the following function assert correctly
  function asserWidget(value: unknown): asserts value is TWidget {
    if (typeof value !== 'object' || value == null || !('name' in value)) {
      throw new TypeError('name property must exist');
    }
  }
  // TODO: add your code to make the following function assert correctly
  function asserGadget(value: unknown): asserts value is TGadget {
    if (typeof value !== 'object' || value == null || !('os' in value)) {
      throw new TypeError('os property must exist');
    }
  }

  const thing1 = { name: "widget" } as TThing;
  const thing2 = { os: "ubuntu" } as TThing;
  asserWidget(thing1);
  // TODO: uncomment the following lines after assertion is added
  thing1.name = 'weather widget';
  console.log(thing1.name);

  // TODO: uncomment the following lines after assertion is added
  asserGadget(thing2);
  thing2.os = 'android';
  console.log(thing2.os);
}
exercise26();

// use interface and compare with type alias
function exercise27() {
  type TPerson = {
    name:string
    age: number
  };

  // TODO: add TPersonWithPhone type definition - extend TPerson with phone property
  type TPersonWithPhone = TPerson & {phone: string}

  // TODO: uncomment the code below and check that it compiles
  const person: TPersonWithPhone = {
    name: 'John',
    age: 18,
    phone: '123-456-7890',
  };
  console.log('person data: ', person.name, person.age, person.phone);

  interface IPerson {
    name: string
    age: number
  }

  // TODO: add IPersonWithPhone interface definition - extend IPerson with phone property
  interface IPersonWithPhone extends IPerson {
    phone: string
  }

  // TODO: uncomment the code below and check that it compiles
  const person2: IPersonWithPhone = {
    name: 'John',
    age: 18,
    phone: '123-456-7890',
  };

  console.log('person data: ', person2.name, person2.age, person2.phone);
}
// TODO: compile and run the code
exercise27();

// use implements keyword to implement interface
function exercise28() {
  // TODO: declare interface IWidget with name property
  interface IWidget {
    name: string
  }
  // TODO: declare interface IWidgetWithSize which extends IWidget and adds width, height and color properties
  // TODO: add resize method to IWidgetWithSize interface
  interface IWidgetWithSize extends IWidget {
    width: number
    height: number
    color: string
    resize: () => void
  }

  // TOOD: declare interface IDesktopWidget which extends IWidgetWithSize and adds os property
  // TODO: add open method to IDesktopWidget interface
  interface IDesktopWidget extends IWidgetWithSize {
    os: string
    open: () => void
  }
  // TODO: declare interface IMobileWidget which extends IWidgetWithSize and adds space property
  // TODO: add install method to IMobileWidget interface
  interface IMobileWidget extends IWidgetWithSize {
    space: number
    install: () => void
  }

  // TODO: declare class Widget which implements IWidget
  class Widget implements IWidget, IWidgetPrintable {
    constructor(public name: string) {
    }
    toString (): string {
      const properties: string = Object.entries(this).flat().map((item: string | number, index: number): string | number => index % 2 === 0 ? `${item}:` : item).join(' ');
      const className: string = this.constructor.name
      return `${className} ${properties}`
    }
  }
  // TODO: declare class WidgetWithSize which implements IWidgetWithSize
  class WidgetWithSize extends Widget implements IWidgetWithSize {
    constructor(public name: string, public width: number, public height: number, public color: string) {
      super(name);
    }
    resize(): void {
      console.log('resizing')
    }
  }
  // TODO: declare class DesktopWidget which implements IDesktopWidget
  class DesktopWidget extends WidgetWithSize implements IDesktopWidget {
    constructor(public name: string, public width: number, public height: number, public color: string, public os: string) {
      super(name, width, height, color);
    }

    open() {
      console.log(`${this.os} is running`)
    }
  }
  // TODO: declare class MobileWidget which implements IMobileWidget
  class MobileWidget extends DesktopWidget implements IMobileWidget{
    constructor(public name: string, public width: number, public height: number, public color: string, public os: string, public space: number) {
      super(name, width, height, color, os);
    }
    install(): void {
      console.log(`${this.os} has been installed on on ${this.name} device`)
    }
  }
  // TODO: declare class DesktopAndMobileWidget which implements IDesktopWidget and IMobileWidget
  class DesktopAndMobileWidget extends MobileWidget implements IMobileWidget, IDesktopWidget, IWidgetPrintable {
    constructor(public name: string, public width: number, public height: number, public color: string, public os: string, public space: number) {
      super(name, width, height, color, os, space);
    }
  }

  // TODO: declare interface IWidgetPrintable wich has toString method
  interface IWidgetPrintable {
    toString: () => string
  }

  // TODO: add IWidgetPrintable to each of the classes above
  // implementation returns class name and all properties

  // TODO: create instance of each class
  const widget = new Widget('widget')
  const widgetWithSize = new WidgetWithSize('widgetwithsize', 10, 30, 'blue')
  const desktopWidget = new DesktopWidget('desktopWidget', 10, 30, 'blue', 'IOS')
  const mobileWidget = new MobileWidget('mobilewidget', 10, 30, 'blue', 'IOS', 128)
  const desktopAndMobileWidget = new DesktopAndMobileWidget('desktopAndMobileWidget', 10, 30, 'blue', 'IOS', 89)
  // TODO: print each instance to console
  console.log(widget.toString())
  console.log(widgetWithSize.toString())
  console.log(desktopWidget.toString())
  console.log(mobileWidget.toString())
  console.log(desktopAndMobileWidget.toString())
}
// TODO: compile and run the code
exercise28();
