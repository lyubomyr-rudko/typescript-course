// use type narrowing to print the passenger info
function exercise23() {
  console.log("\n---Exercise23 start---\n")
  // TODO: define THuman type with properties name, age, driverLicenseId
  type THuman = {
    name:string,
    age:number,
    driverLicenseId:number
  };
  // TODO: define TAnimal type with properties name, age, species
  type TAnimal = {
    name:string,
    age:number,
    species:"programmer"|"tester"|"designer"
  };
  // TODO: define TPassenger type as union of THuman and TAnimal
  type TPassenger = THuman | TAnimal;

  // annotate the function to accept TPassenger type
  function printPassengerInfo(passenger: TPassenger) {
    // TODO: use type narrowing to print the passenger info
    console.log(passenger.name);
    console.log(passenger.age);
    // TODO: print driverLicenseId if passenger is human
    if("driverLicenseId" in passenger){
      console.log(passenger.driverLicenseId);
    }

    // TODO: print species if passenger is animal
    if("species" in passenger){
      console.log(passenger.species);
    }
  }
  // TODO: add missing properties to human and animal objects
  const human: THuman = {
    name: "Steeve",
    age: 20,
    driverLicenseId: 5555
  };
  const animal: TAnimal = {
    name: "Steeve",
    age: 20,
    species: "programmer"
  };

  printPassengerInfo(human);
  printPassengerInfo(animal);
  // TODO: Implement function printPassengerInfo using instanceof operator to narrow the type of the passenger
  // Instanceof does not work with Types
  // TODO: Add implementation of the printPassengerInfo using property check to narrow the type of the passenger
  console.log("\n---Exercise23 end---\n")
}
// TODO: compile and run the code
exercise23();

// use discriminated union to narrow the type of the object
function exercise24() {
  console.log("\n---Exercise24 start---\n")
  // TODO: add type property to TBlogMessage, TBlogImage, TBlogComment with literal type of 'message', 'image', 'comment'
  type TBlogMessage = {
    text: string;
    type: "message";
  };
  type TBlogImage = {
    url: string;
    type: "image";
  };
  type TBlogComment = {
    text: string;
    messageId: string;
    type: "comment"
  };

  type TBlogPost = TBlogMessage | TBlogImage | TBlogComment;

  function printBlogPost(post: TBlogPost) {
    // TODO: use discriminated union to narrow the type of the object
    switch(post.type){
      case "comment":
        console.log("comment: ", post.text)
        break;
      case "image":
        console.log("image: ", post.url);
        break;
      case "message":
        console.log("message: ", post.text);
        break;
    }
  }

  // TODO: add missing type property to the objects
  printBlogPost({ text: "abc", type:"message" });
  printBlogPost({ url: "abc", type:"image" });
  printBlogPost({ text: "abc", messageId: "123", type:"comment" });

  console.log("\n---Exercise24 end---\n")
}
// TODO: compile and run the code
exercise24();

// use non-null assertion operator
function exercise25() {
  console.log("\n---Exercise25 start---\n")
  type TPerson = {
    name: string;
    email?: string | null | undefined;
  };

  function sendEmail(email: string) {
    console.log("sending email to", email);
  }

  function ensureContactable(person: TPerson) {
    // TODO: add check for null and undefined - throw error if person.email is null or undefined
    if(!person.email){
      throw new Error("ensureContactable() failed")
    }
  }

  function contact(person: TPerson) {
    ensureContactable(person);
    // TODO: uncomment code below and check that it compiles,  use non-null assertion operator to fix compile time error
    sendEmail(person.email!);
  }

  function contact2(person: TPerson) {
    // Add inline check for null and undefined - throw error if person.email is null or undefined
    if(person.email == null || person.email == undefined){
      throw new Error("contact2() failed")
    }
    // TODO: uncomment code below and check that it compiles
    sendEmail(person.email!);
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
  console.log("\n---Exercise25 end---\n")
}
// TODO: compile and run the code
exercise25();

// Create an assertion function
function exercise26() {
  console.log("\n---Exercise26 start---\n")
  type TWidget = {
    name: string;
  };
  type TGadget = {
    os: string;
  };
  type TThing = TWidget | TGadget;

  // TODO: add your code to make the following function assert correctly
  function assertWidget(value: unknown):asserts value is TWidget{
    if(!(value as TWidget)?.name){
      throw new Error("assertWidget() fail")
    }
  }
  // TODO: add your code to make the following function assert correctly
  function assertGadget(value: unknown): asserts value is TGadget {
    if(!(value as TGadget)?.os){
      throw new Error("assertGadget() fail")
    }
  }

  const thing1 = { name: "widget" } as TThing;
  const thing2 = { os: "ubuntu" } as TThing;
  assertWidget(thing1);

  // TODO: uncomment the following lines after assertion is added
  thing1.name = 'weather widget';
  console.log(thing1.name);

  // TODO: uncomment the following lines after assertion is added
  assertGadget(thing2);
  thing2.os = 'android';
  console.log(thing2.os);
  console.log("\n---Exercise26 end---\n")
}
exercise26();

// use interface and compare with type alias
function exercise27() {
  console.log("\n---Exercise27 start---\n")
  type TPerson = {
    name: string
    age: number
  };

  // TODO: add TPersonWithPhone type definition - extend TPerson with phone property
  type TPersonWithPhone = TPerson & { phone: string}
  // phone is string

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
  interface IPersonWithPhone extends IPerson{
    phone:string
  }
  // phone is string

  // TODO: uncomment the code below and check that it compiles
  const person2: IPersonWithPhone = {
    name: 'John',
    age: 18,
    phone: '123-456-7890',
  };

  console.log('person data: ', person2.name, person2.age, person2.phone);
  console.log("\n---Exercise27 end---\n")
}
// TODO: compile and run the code
exercise27();

// use implements keyword to implement interface
function exercise28() {
  console.log("\n---Exercise28 start---\n")
  // TODO: declare interface IWidget with name property
  interface IWidget {
    name:string
  }
  // TODO: declare interface IWidgetWithSize which extends IWidget and adds width, height and color properties
  // TODO: add resize method to IWidgetWithSize interface
  interface IWidgetWithSize extends IWidget {
    // width, height and color properties
    width:number,
    height:number,
    resize:()=>void
  }
  // TOOD: declare interface IDesktopWidget which extends IWidgetWithSize and adds os property
  // TODO: add open method to IDesktopWidget interface
  interface IDesktopWidget extends IWidgetWithSize {
    os: string
    open: ()=>void
  }
  // TODO: declare interface IMobileWidget which extends IWidgetWithSize and adds space property
  // TODO: add install method to IMobileWidget interface
  interface IMobileWidget extends IWidgetWithSize {
    space: string
    install: ()=>void
  }

  // TODO: declare class Widget which implements IWidget
  class Widget implements IWidget, IWidgetPrintable {
    constructor(public name:string){}

    public toString():string{
      return "class Widget"
    };
  }
  // TODO: declare class WidgetWithSize which implements IWidgetWithSize
  class WidgetWithSize implements IWidgetWithSize, IWidgetPrintable{
    constructor(public name:string, public width:number, public height:number){}
    public resize():void {
      console.log("WidgetWithSize resize")
    }

    public toString():string{
      return `class WidgetWithSize \n\tname:${this.name} \n\twidth:${this.width} \n\theight:${this.height}`
    }
  }
  // TODO: declare class DesktopWidget which implements IDesktopWidget
  class DesktopWidget implements IDesktopWidget, IWidgetPrintable {
    constructor(public name:string, public width:number, public height:number, public os:string){}
    public open():void{
      console.log("DesktopWidget open")
    }
    public resize():void {
      console.log("DesktopWidget resize")
    }
    public toString():string{
      return `class DesktopWidget \n\tname:${this.name} \n\twidth:${this.width} \n\theight:${this.height} \n\tos:${this.os}`
    }
  }
  // TODO: declare class MobileWidget which implements IMobileWidget
  class MobileWidget implements IMobileWidget, IWidgetPrintable{
    constructor(public name:string, public width:number, public height:number, public space:string){}
    public install():void{
      console.log("MobileWidget install")
    }
    public open():void{
      console.log("MobileWidget open")
    }
    public resize():void {
      console.log("MobileWidget resize")
    }

    public toString():string{
      return `class MobileWidget \n\tname:${this.name} \n\twidth:${this.width} \n\theight:${this.height} \n\tspace:${this.space}`
    }
  }
  // TODO: declare class DesktopAndMobileWidget which implements IDesktopWidget and IMobileWidget
  class DesktopAndMobileWidget implements IDesktopWidget, IMobileWidget, IWidgetPrintable {
    constructor(public name:string, public width:number, public height:number, public os:string, public space:string){}

    public install():void{
      console.log("DesktopAndMobileWidget install")
    }
    public open():void{
      console.log("DesktopAndMobileWidget open")
    }
    public resize():void {
      console.log("DesktopAndMobileWidget resize")
    }

    public toString():string{
      return `class DesktopAndMobileWidget \n\tname:${this.name} \n\twidth:${this.width} \n\theight:${this.height} \n\tos:${this.os} \n\tspace:${this.space}`
    }
  }

  // TODO: declare interface IWidgetPrintable which has toString method
  interface IWidgetPrintable {
    toString: ()=>string,
  }

  // TODO: add IWidgetPrintable to each of the classes above
  // implementation returns class name and all properties

  // TODO: create instance of each class ...oh no
  const customWidget = new Widget("Widget")
  const customWidgetWithSize = new WidgetWithSize("WidgetWithSize", 5, 6)
  const customDesktopWidget = new DesktopWidget("DesktopWidget", 5,6,"ubuntu")
  const customMobileWidget = new MobileWidget("MobileWidget", 5,6,"some space")
  const customDesktopAndMobileWidget = new DesktopAndMobileWidget("MobileWidget", 5,6,"ubuntu", "some space")

  // TODO: print each instance to console
  console.log(customWidget.toString())
  console.log(customWidgetWithSize.toString())
  console.log(customDesktopWidget.toString())
  console.log(customMobileWidget.toString())
  console.log(customDesktopAndMobileWidget.toString())

  console.log("\n---Exercise28 end---\n")
}
// TODO: compile and run the code
exercise28();
