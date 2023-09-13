(function () {
  const loggerMain = (hm: string) => (ex: string) =>
    function (...args: any[]) {
      console.log(hm, ex, ...args);
    };
  const localLogger = loggerMain('lesson5 - homework');

  // use type narrowing to print the passanger info

  function exercise23() {
    const logger = localLogger('excercise23');
    // TODO: define THuman type with properties name, age, driverLicenseId
    type THuman = { name: string; age: number; driverLicenseId: number };
    // TODO: define TAnimal type with properties name, age, species
    type TAnimal = { name: string; age: number; species: string };
    // TODO: define TPassanger type as union of THuman and TAnimal
    type TPassanger = THuman | TAnimal;

    // annotate the function to accept TPassanger type
    function printPassangerInfoByType(passanger: TPassanger) {
      // TODO: use type narrowing to print the passanger info
      if ('driverLicenseId' in passanger) {
        logger(
          `Name ${passanger.name}, Age ${passanger.age}, DriverLicenseId ${passanger.driverLicenseId}`,
        );
      } else {
        logger(
          `Name ${passanger.name}, Age ${passanger.age}, Species ${passanger.species}`,
        );
      }
    }
    // TODO: add missing properties to human and animal objects
    const human: THuman = { name: 'Jon', age: 20, driverLicenseId: 1234 };
    const animal: TAnimal = { name: 'Bingo', age: 5, species: 'Dog' };
    printPassangerInfoByType(human);
    printPassangerInfoByType(animal);
    // TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
    // TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger

    class Human {
      constructor(
        public name: string,
        public age: number,
        public driverLicenseId: number,
      ) {}
    }
    class Animal {
      constructor(
        public name: string,
        public age: number,
        public species: string,
      ) {}
    }
    function printPassangerInfoByInstance(passanger: Human | Animal) {
      // TODO: use type narrowing to print the passanger info
      if (passanger instanceof Human) {
        logger(
          `Name ${passanger.name}, Age ${passanger.age}, DriverLicenseId ${passanger.driverLicenseId}`,
        );
      } else {
        logger(
          `Name ${passanger.name}, Age ${passanger.age}, Species ${passanger.species}`,
        );
      }
    }
    printPassangerInfoByInstance(new Human('Teo', 20, 1234));
    printPassangerInfoByInstance(new Animal('Bongo', 20, 'dog'));
  }
  // TODO: compile and run the code
  exercise23();

  // use discriminated union to narrow the type of the object
  function exercise24() {
    const logger = localLogger('excercise24');
    // TODO: add type property to TBlogMessage, TBlogImage, TBlogComment with literal type of 'message', 'image', 'comment'
    enum MessageType {
      MESSAGE = 'MESSAGE',
      IMAGE = 'IMAGE',
      COMENT = 'COMENT',
    }
    type TBlogMessage = {
      type: MessageType.MESSAGE;
      text: string;
    };
    type TBlogImage = {
      type: MessageType.IMAGE;
      url: string;
    };
    type TBlogComment = {
      type: MessageType.COMENT;
      text: string;
      messageId: string;
    };

    type TBlogPost = TBlogMessage | TBlogImage | TBlogComment;

    function printBlogPost(post: TBlogPost) {
      // TODO: use discriminated union to narrow the type of the object
      if (post.type === MessageType.COMENT) {
        logger('comment: ', post.text);
      }
      if (post.type === MessageType.IMAGE) {
        logger('image: ', post.url);
      }
      if (post.type === MessageType.MESSAGE) {
        logger('message: ', post.text);
      }
    }

    // TODO: add missing type property to the objects
    printBlogPost({ text: 'abc', type: MessageType.MESSAGE });
    printBlogPost({ url: 'abc', type: MessageType.IMAGE });
    printBlogPost({ text: 'abc', messageId: '123', type: MessageType.COMENT });
  }
  // TODO: compile and run the code
  exercise24();

  // use non-null assertion operator
  function exercise25() {
    const logger = localLogger('excercise24');
    type TPerson = {
      name: string;
      email?: string | null | undefined;
    };

    function sendEmail(email: string) {
      logger('sending email to', email);
    }

    function ensureContactable(person: TPerson) {
      // TODO: add check for null and undefined - throw error if person.email is null or undefined
      if (person.email === undefined || Object.is(person.email, null)) {
        throw new Error('Email is ampty');
      }
    }

    function contact(person: TPerson) {
      ensureContactable(person);
      // TODO: uncomment code below and check that it compiles,  use non-null assertion operator to fix compile time error
      sendEmail(person.email!);
    }

    function contact2(person: TPerson) {
      // Add inline check for null and undefined - throw error if person.email is null or undefined
      if (person.email === undefined || person.email == null) {
        throw new Error('Email is ampty');
      }
      // TODO: uncomment code below and check that it compiles
      sendEmail(person.email);
    }

    const person1: TPerson = {
      name: 'John',
      email: 'asdf@asdf.com',
    };
    const person2: TPerson = {
      name: 'John',
      email: null,
    };

    contact(person1);
    contact2(person1);
    //contact(person2);

    // TODO: print the result to console
  }
  // TODO: compile and run the code
  exercise25();

  // Create an assertion function
  function exercise26() {
    const logger = localLogger('excercise26');
    type TWidget = {
      name: string;
    };
    type TGadget = {
      os: string;
    };
    type TThing = TWidget | TGadget;

    // TODO: add your code to make the following function assert correctly
    function asserWidget(value: unknown): asserts value is TWidget {
      if (!(typeof value === 'object') || value == null || !('name' in value)) {
        throw new TypeError('value must containe field name');
      }
    }
    // TODO: add your code to make the following function assert correctly
    function asserGadget(value: unknown): asserts value is TGadget {
      if (!(typeof value === 'object') || value == null || !('os' in value)) {
        throw new TypeError('value must containe field os');
      }
    }

    const thing1 = { name: 'widget' } as TThing;
    const thing2 = { os: 'ubuntu' } as TThing;
    asserWidget(thing1);
    // TODO: uncomment the following lines after assertion is added
    thing1.name = 'weather widget';
    logger(thing1.name);

    // TODO: uncomment the following lines after assertion is added
    asserGadget(thing2);
    thing2.os = 'android';
    logger(thing2.os);
  }
  exercise26();

  // use interface and compare with type alias
  function exercise27() {
    const logger = localLogger('excercise27');
    type TPerson = {
      name: string;
      age: number;
    };

    // TODO: add TPersonWithPhone type definition - extend TPerson with phone property
    type TPersonWithPhone = TPerson & {
      phone: string;
    };

    // TODO: uncomment the code below and check that it compiles
    const person: TPersonWithPhone = {
      name: 'John',
      age: 18,
      phone: '123-456-7890',
    };
    console.log('person data: ', person.name, person.age, person.phone);

    interface IPerson {
      name: string;
      age: number;
    }

    // TODO: add IPersonWithPhone interface definition - extend IPerson with phone property
    interface IPersonWithPhone extends IPerson {
      phone: string;
    }
    // phone is string

    // TODO: uncomment the code below and check that it compiles
    const person2: IPersonWithPhone = {
      name: 'John',
      age: 18,
      phone: '123-456-7890',
    };

    logger('person data: ', person2.name, person2.age, person2.phone);
  }
  // TODO: compile and run the code
  exercise27();

  // use implements keyword to implement interface
  function exercise28() {
    const logger = localLogger('excercise28');

    interface IWidgetPrintable {
      toString: () => string;
    }

    // TODO: declare interface IWidget with name property
    // TODO: declare interface IWidgetPrintable wich has toString method
    interface IWidget extends IWidgetPrintable {
      name: string;
    }
    // TODO: declare interface IWidgetWithSize which extends IWidget and adds width, height and color properties
    // TODO: add resize method to IWidgetWithSize interface
    interface IWidgetWithSize extends IWidget {
      width: number;
      height: number;
      color: string;
      resize: () => void;
    }
    // TOOD: declare interface IDesktopWidget which extends IWidgetWithSize and adds os property
    // TODO: add open method to IDesktopWidget interface
    interface IDesktopWidget extends IWidgetWithSize {
      os: string;
      open: () => void;
    }
    // TODO: declare interface IMobileWidget which extends IWidgetWithSize and adds space property
    // TODO: add install method to IMobileWidget interface
    interface IMobileWidget extends IWidgetWithSize {
      space: number;
      install: () => void;
    }

    // TODO: declare class Widget which implements IWidget

    class WidgetPrintable implements IWidgetPrintable {
      toString(): string {
        const propeties = Object.getOwnPropertyNames(this).map(
          (el) => `${el}:${this[el as keyof typeof this]}`,
        );
        return propeties.join('; ');
      }
    }

    class Widget extends WidgetPrintable implements IWidget, IWidgetPrintable {
      constructor(public name: string) {
        super();
      }
    }

    // TODO: declare class WidgetWithSize which implements IWidgetWithSize
    class WidgetWithSize extends WidgetPrintable implements IWidgetWithSize {
      constructor(
        public name: string,
        public width: number,
        public height: number,
        public color: string,
      ) {
        super();
      }
      resize(): void {
        logger(`name ${this.name} width ${this.width}`);
      }
    }
    // TODO: declare class DesktopWidget which implements IDesktopWidget
    class DesktopWidget extends WidgetPrintable implements IDesktopWidget {
      constructor(
        public name: string,
        public width: number,
        public height: number,
        public color: string,
        public os: string,
      ) {
        super();
      }
      resize(): void {
        logger(`Resize method name ${this.name} width ${this.width}`);
      }
      open(): void {
        logger(`Open method name ${this.name} width ${this.width}`);
      }
    }
    // TODO: declare class MobileWidget which implements IMobileWidget
    class MobileWidget extends WidgetPrintable implements IMobileWidget {
      constructor(
        public name: string,
        public width: number,
        public height: number,
        public color: string,
        public os: string,
        public space: number,
      ) {
        super();
      }
      resize(): void {
        logger(`Resize method name ${this.name} width ${this.width}`);
      }
      open(): void {
        logger(`Open method name ${this.name} width ${this.width}`);
      }
      install(): void {
        logger(`Install method name ${this.name} width ${this.width}`);
      }
    }
    // TODO: declare class DesktopAndMobileWidget which implements IDesktopWidget and IMobileWidget
    class DesktopAndMobileWidget
      extends WidgetPrintable
      implements IDesktopWidget, IMobileWidget
    {
      constructor(
        public name: string,
        public width: number,
        public height: number,
        public color: string,
        public os: string,
        public space: number,
      ) {
        super();
      }
      resize(): void {
        logger(`Resize method name ${this.name} width ${this.width}`);
      }
      open(): void {
        logger(`Open method name ${this.name} width ${this.width}`);
      }
      install(): void {
        logger(`Install method name ${this.name} width ${this.width}`);
      }
    }

    // TODO: declare interface IWidgetPrintable wich has toString method

    // TODO: add IWidgetPrintable to each of the classes above
    // implementation returns class name and all properties

    // TODO: create instance of each class
    // TODO: print each instance to console
    const widget = new Widget('Widget');
    const widgetWithSize = new WidgetWithSize('WidgetWithSize', 10, 20, 'fff');
    const desktopWidget = new DesktopWidget(
      'DesktopWidget',
      10,
      20,
      'fff',
      'Linux',
    );
    const mobileWidget = new MobileWidget(
      'MobileWidget',
      10,
      20,
      'fff',
      'Linux',
      10,
    );
    const desktopAndMobileWidget = new DesktopAndMobileWidget(
      'DesktopAndMobileWidget',
      10,
      20,
      'fff',
      'Linux',
      30,
    );

    logger(widget.toString());
    logger(widgetWithSize.toString());
    logger(desktopWidget.toString());
    logger(mobileWidget.toString());
    logger(desktopAndMobileWidget.toString());
  }
  // TODO: compile and run the code
  exercise28();
})();
