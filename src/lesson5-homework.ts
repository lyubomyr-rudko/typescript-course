// use type narrowing to print the passanger info
function exercise23() {
  // + TODO: define THuman type with properties name, age, driverLicenseId
  type THuman = {
    type?: "human"; // added field to pass the task with instanceof
    name: string;
    age: number;
    driverLicenseId: boolean;
  };
  // + TODO: define TAnimal type with properties name, age, species
  type TAnimal = {
    type?: "animal"; // added field to pass the task with instanceof
    name: string;
    age: number;
    species: string;
  };
  // + TODO: define TPassanger type as union of THuman and TAnimal
  type TPassanger = THuman | TAnimal;

  // + annotate the function to accept TPassanger type
  function printPassangerInfo(passanger: TPassanger): void {
    // + TODO: use type narrowing to print the passanger info
    console.log((passanger as TPassanger).name);
    console.log((passanger as TPassanger).age);
    // + TODO: print driverLicenseId if passanger is human
    // + TODO: print species if passanger is animal
    if ("driverLicenseId" in passanger) {
      console.log(passanger.driverLicenseId);
    } else if ("species" in passanger) {
      console.log(passanger.species);
    }
  }
  // + TODO: add missing properties to human and animal objects
  const human: THuman = {
    type: "human",
    name: "Danylo",
    age: 20,
    driverLicenseId: true,
  };
  const animal: TAnimal = {
    type: "animal",
    name: "Mark",
    age: 3,
    species: "Scottish fold",
  };
  printPassangerInfo(human);
  printPassangerInfo(animal);

  // + TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
  function printPassangerInfo2(passanger: TPassanger): void {
    // i found solution like this. not instanceof but shape of object.

    if (passanger.type === "human") {
      console.log(passanger.driverLicenseId);
    } else if (passanger.type === "animal") {
      console.log(passanger.species);
    } else {
      console.log("it is neither man nor animal");
    }
  }
  printPassangerInfo2(human);
  printPassangerInfo2(animal);

  // + TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
  function printPassangerInfo3(passanger: TPassanger): void {
    if ("driverLicenseId" in passanger) {
      console.log(passanger.driverLicenseId);
    } else if ("species" in passanger) {
      console.log(passanger.species);
    } else {
      console.log("it is neither man nor animal");
    }
  }
  printPassangerInfo3(human);
  printPassangerInfo3(animal);
}
// TODO: compile and run the code
exercise23();

// use discriminated union to narrow the type of the object
function exercise24() {
  // + TODO: add type property to TBlogMessage, TBlogImage, TBlogComment with literal type of 'message', 'image', 'comment'
  type TBlogMessage = {
    type: "message";
    text: string;
  };
  type TBlogImage = {
    type: "image";
    url: string;
  };
  type TBlogComment = {
    type: "comment";
    text: string;
    messageId: string;
  };

  type TBlogPost = TBlogMessage | TBlogImage | TBlogComment;

  function printBlogPost(post: TBlogPost) {
    // + TODO: use discriminated union to narrow the type of the object
    if (post.type === "comment") {
      console.log("comment: ", post.text);
    }
    if (post.type === "image") {
      console.log("image: ", post.url);
    }
    if (post.type === "message") {
      console.log("message: ", post.text);
    }
  }

  // + TODO: add missing type property to the objects
  printBlogPost({ type: "message", text: "abc" });
  printBlogPost({ type: "image", url: "abc" });
  printBlogPost({ type: "comment", text: "abc", messageId: "123" });
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

  function ensureContactable(person: TPerson): void {
    // + TODO: add check for null and undefined - throw error if person.email is null or undefined
    if (person.email === null || person.email === undefined) {
      throw new Error("Email is required for contact.");
    }
  }

  function contact(person: TPerson): void {
    ensureContactable(person);
    // + TODO: uncomment code below and check that it compiles,  use non-null assertion operator to fix compile time error
    sendEmail(person.email!);
  }

  function contact2(person: TPerson): void {
    // + Add inline check for null and undefined - throw error if person.email is null or undefined
    if (person.email === null || person.email === undefined) {
      throw new Error("Email is required for contact.");
    }
    // + TODO: uncomment code below and check that it compiles
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
  // contact(person2);

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

  // + TODO: add your code to make the following function assert correctly
  function asserWidget(value: TThing): asserts value is TWidget {
    if (value === null || typeof value !== "object") {
      throw new TypeError("value must be an object");
    }
    if (!("name" in value)) {
      throw new TypeError("it must be a name property in value");
    }
  }
  // + TODO: add your code to make the following function assert correctly
  function asserGadget(value: TThing): asserts value is TGadget {
    if (value === null || typeof value !== "object") {
      throw new TypeError("value must be an object");
    }
    if (!("os" in value)) {
      throw new TypeError("it must be an os property in value");
    }
  }

  const thing1 = { name: "widget" } as TThing;
  const thing2 = { os: "ubuntu" } as TThing;
  asserWidget(thing1);
  // + TODO: uncomment the following lines after assertion is added
  thing1.name = "weather widget";
  console.log(thing1.name);

  // + TODO: uncomment the following lines after assertion is added
  asserGadget(thing2);
  thing2.os = "android";
  console.log(thing2.os);
}
exercise26();

// use interface and compare with type alias
function exercise27() {
  type TPerson = {
    name: string;
    age: number;
  };

  // + TODO: add TPersonWithPhone type definition - extend TPerson with phone property
  type TPersonWithPhone = TPerson & {
    phone: string;
  };

  // + TODO: uncomment the code below and check that it compiles
  const person: TPersonWithPhone = {
    name: "John",
    age: 18,
    phone: "123-456-7890",
  };
  console.log("person data: ", person.name, person.age, person.phone);

  interface IPerson {
    name: string;
    age: number;
  }

  // + TODO: add IPersonWithPhone interface definition - extend IPerson with phone property
  interface IPersonWithPhone extends IPerson {
    phone: string;
  }

  // + TODO: uncomment the code below and check that it compiles
  const person2: IPersonWithPhone = {
    name: "John",
    age: 18,
    phone: "123-456-7890",
  };

  console.log("person data: ", person2.name, person2.age, person2.phone);
}
// TODO: compile and run the code
exercise27();

// use implements keyword to implement interface
function exercise28() {
  // + TODO: declare interface IWidget with name property
  interface IWidget {
    name: string;
  }
  // + TODO: declare interface IWidgetWithSize which extends IWidget and adds width, height and color properties
  // + TODO: add resize method to IWidgetWithSize interface
  interface IWidgetWithSize extends IWidget {
    width: number;
    height: number;
    color: string;
    resize(width: number, height: number): void;
  }
  // + TOOD: declare interface IDesktopWidget which extends IWidgetWithSize and adds os property
  // + TODO: add open method to IDesktopWidget interface
  interface IDesktopWidget extends IWidgetWithSize {
    os: string;
    open(os: string): void;
  }
  // + TODO: declare interface IMobileWidget which extends IWidgetWithSize and adds space property
  // + TODO: add install method to IMobileWidget interface
  interface IMobileWidget extends IWidgetWithSize {
    space: string;
    install(space: string): void;
  }

  // + TODO: declare class Widget which implements IWidget
  class Widget implements IWidget, IWidgetPrintable {
    constructor(public name: string) {}

    toString(): string {
      return JSON.stringify(this);
    }
  }
  // + TODO: declare class WidgetWithSize which implements IWidgetWithSize
  class WidgetWithSize implements IWidgetWithSize, IWidgetPrintable {
    constructor(
      public width: number,
      public height: number,
      public color: string,
      public name: string
    ) {}

    resize() {}
    toString(): string {
      return JSON.stringify(this);
    }
  }
  // + TODO: declare class DesktopWidget which implements IDesktopWidget
  class DesktopWidget implements IDesktopWidget, IWidgetPrintable {
    constructor(
      public os: string,
      public width: number,
      public height: number,
      public color: string,
      public name: string
    ) {}

    resize() {}
    open() {}
    toString(): string {
      return JSON.stringify(this);
    }
  }
  // + TODO: declare class MobileWidget which implements IMobileWidget
  class MobileWidget implements IMobileWidget, IWidgetPrintable {
    constructor(
      public width: number,
      public height: number,
      public color: string,
      public name: string,
      public space: string
    ) {}

    resize() {}
    install() {}
    toString(): string {
      return JSON.stringify(this);
    }
  }

  // + TODO: declare class DesktopAndMobileWidget which implements IDesktopWidget and IMobileWidget
  class DesktopAndMobileWidget
    implements IDesktopWidget, IMobileWidget, IWidgetPrintable
  {
    constructor(
      public width: number,
      public height: number,
      public color: string,
      public name: string,
      public space: string,
      public os: string
    ) {}

    resize() {}
    open() {}
    install() {}
    toString(): string {
      return JSON.stringify(this);
    }
  }

  // + TODO: declare interface IWidgetPrintable wich has toString method
  interface IWidgetPrintable {
    toString(): string;
  }

  // + TODO: add IWidgetPrintable to each of the classes above
  // implementation returns class name and all properties

  // + TODO: create instance of each class
  // + TODO: print each instance to console

  const widget = new Widget("My Widget");
  const widgetWithSize = new WidgetWithSize(100, 50, "red", "Resizable Widget");
  const desktopWidget = new DesktopWidget(
    "Windows",
    200,
    150,
    "blue",
    "Desktop Widget"
  );
  const mobileWidget = new MobileWidget(
    80,
    40,
    "green",
    "Mobile Widget",
    "Internal Storage"
  );
  const desktopAndMobileWidget = new DesktopAndMobileWidget(
    150,
    100,
    "purple",
    "Hybrid Widget",
    "Internal Storage",
    "Android"
  );

  console.log(widget.toString());
  console.log(widgetWithSize.toString());
  console.log(desktopWidget.toString());
  console.log(mobileWidget.toString());
  console.log(desktopAndMobileWidget.toString());
}
// TODO: compile and run the code
exercise28();
