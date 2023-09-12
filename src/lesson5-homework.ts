// use type narrowing to print the passanger info
function exercise23() {
    // TODO: define THuman type with properties name, age, driverLicenseId
    type THuman = { name: string; age: number; driverLicenseId: string };
    // TODO: define TAnimal type with properties name, age, species
    type TAnimal = { name: string; age: number; species: string };
    // TODO: define TPassanger type as union of THuman and TAnimal
    type TPassanger = THuman | TAnimal;

    // annotate the function to accept TPassanger type
    function printPassangerInfo(passanger: TPassanger): void {
        // TODO: use type narrowing to print the passanger info
        console.log(passanger.name);
        console.log(passanger.age);
        // TODO: print driverLicenseId if passanger is human
        if ('driverLicenseId' in passanger) {
            console.log(passanger.driverLicenseId);
        }
        // TODO: print species if passanger is animal
        if ('species' in passanger) {
            console.log(passanger.species);
        }
    }
    // TODO: add missing properties to human and animal objects
    const human: THuman = {
        name: 'Serhii',
        age: 32,
        driverLicenseId: 'AB1234567',
    };
    const animal: TAnimal = { name: 'Simba', age: 20, species: 'lion' };
    printPassangerInfo(human);
    printPassangerInfo(animal);
    // TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
    // TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
}
// TODO: compile and run the code
exercise23();

// use discriminated union to narrow the type of the object
function exercise24() {
    // TODO: add type property to TBlogMessage, TBlogImage, TBlogComment with literal type of 'message', 'image', 'comment'
    type TBlogMessage = {
        text: string;
        type: 'message';
    };
    type TBlogImage = {
        url: string;
        type: 'image';
    };
    type TBlogComment = {
        text: string;
        messageId: string;
        type: 'comment';
    };

    type TBlogPost = TBlogMessage | TBlogImage | TBlogComment;

    function printBlogPost(post: TBlogPost) {
        // TODO: use discriminated union to narrow the type of the object
        if (post.type === 'message') {
            console.log('comment: ', post.text);
        }
        if (post.type === 'image') {
            console.log('image: ', post.url);
        }
        if (post.type === 'comment') {
            console.log('message: ', post.text);
        }
    }

    // TODO: add missing type property to the objects
    printBlogPost({ text: 'abc', type: 'message' });
    printBlogPost({ url: 'abc', type: 'image' });
    printBlogPost({ text: 'abc', messageId: '123', type: 'comment' });
}
// TODO: compile and run the code
exercise24();

// use non-null assertion operator
function exercise25() {
    type TPerson = {
        name: string;
        email?: string | null | undefined;
    };

    function sendEmail(email: string) {
        console.log('sending email to', email);
    }

    function ensureContactable(person: TPerson) {
        // TODO: add check for null and undefined - throw error if person.email is null or undefined
        if (person.email === null || person.email === undefined) {
            throw new Error('person has no email');
        }
    }

    function contact(person: TPerson) {
        ensureContactable(person);
        // TODO: uncomment code below and check that it compiles,  use non-null assertion operator to fix compile time error
        sendEmail(person.email!);
    }

    function contact2(person: TPerson) {
        // Add inline check for null and undefined - throw error if person.email is null or undefined
        if (person.email === null || person.email === undefined) {
            throw new Error('person has no email');
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
    // contact(person2);
    // contact2(person2);

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

    function assert(condition: unknown, msg?: string): asserts condition {
        if (!condition) {
            throw new Error(msg);
        }
    }

    // TODO: add your code to make the following function assert correctly
    function asserWidget(value: unknown): asserts value is TWidget {
        if (typeof value !== 'object' || value === null) {
            throw new TypeError('value must be an object');
        }
        if (!('name' in value)) {
            throw new TypeError('value must have property "name"');
        }

        assert(
            typeof (value as TWidget).name === 'string',
            'value must be defined'
        );
    }

    // TODO: add your code to make the following function assert correctly
    function asserGadget(value: unknown): asserts value is TGadget {
        if (typeof value !== 'object' || value === null) {
            throw new TypeError('value must be an object');
        }
        if (!('os' in value)) {
            throw new TypeError('value must have property "os"');
        }

        assert(
            typeof (value as TGadget).os === 'string',
            'value must be defined'
        );
    }

    const thing1 = { name: 'widget' } as TThing;
    const thing2 = { os: 'ubuntu' } as TThing;
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
        name: string;
        age: number;
    };

    // TODO: add TPersonWithPhone type definition - extend TPerson with phone property
    type TPersonWithPhone = TPerson & { phone: string };

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
        name: string;
    }
    // TODO: declare interface IWidgetWithSize which extends IWidget and adds width, height and color properties
    // TODO: add resize method to IWidgetWithSize interface
    interface IWidgetWithSize extends IWidget {
        width: number;
        resize: (num: number) => void;
    }

    // TODO: declare interface IDesktopWidget which extends IWidgetWithSize and adds os property
    // TODO: add open method to IDesktopWidget interface
    interface IDesktopWidget extends IWidgetWithSize {
        os: string;
        open: () => void;
    }
    // TODO: declare interface IMobileWidget which extends IWidgetWithSize and adds space property
    // TODO: add install method to IMobileWidget interface
    interface IMobileWidget extends IWidgetWithSize {
        space: string;
        install: () => void;
    }

    // TODO: declare class Widget which implements IWidget
    class Widget implements IWidget, IWidgetPrintable {
        constructor(public name: string) {}

        toString() {
            return JSON.stringify(this);
        }
    }

    // TODO: declare class WidgetWithSize which implements IWidgetWithSize
    class WidgetWithSize implements IWidgetWithSize, IWidgetPrintable {
        constructor(public name: string, public width: number) {}

        resize(num: number) {
            this.width += num;
        }

        toString() {
            return JSON.stringify(this);
        }
    }

    // TODO: declare class DesktopWidget which implements IDesktopWidget
    class DesktopWidget implements IDesktopWidget, IWidgetPrintable {
        constructor(
            public name: string,
            public width: number,
            public os: string
        ) {}

        resize(num: number) {
            this.width += num;
        }

        open() {
            console.log(this.os);
        }

        toString() {
            return JSON.stringify(this);
        }
    }

    // TODO: declare class MobileWidget which implements IMobileWidget
    class MobileWidget implements IMobileWidget, IWidgetPrintable {
        constructor(
            public name: string,
            public width: number,
            public space: string
        ) {}

        resize(num: number) {
            this.width += num;
        }

        install() {
            console.log(`installing widget`);
        }

        toString() {
            return JSON.stringify(this);
        }
    }

    // TODO: declare class DesktopAndMobileWidget which implements IDesktopWidget and IMobileWidget
    class DesktopAndMobileWidget
        implements IDesktopWidget, IMobileWidget, IWidgetPrintable
    {
        constructor(
            public name: string,
            public width: number,
            public os: string,
            public space: string
        ) {}

        resize(num: number) {
            this.width += num;
        }

        open() {
            console.log(this.os);
        }

        install() {
            console.log(`installing widget`);
        }

        toString() {
            return JSON.stringify(this);
        }
    }

    // TODO: declare interface IWidgetPrintable wich has toString method
    interface IWidgetPrintable {
        toString: () => string;
    }

    // TODO: add IWidgetPrintable to each of the classes above
    // implementation returns class name and all properties

    // TODO: create instance of each class
    const widget = new Widget('Widget');
    const widgetWithSize = new WidgetWithSize('Widget With Size', 350);
    const desktopWidget = new DesktopWidget('Desktop Widget', 350, 'Fedora 38');
    const mobileWidget = new MobileWidget('Mobile Widget', 350, 'space');
    const desktopAndMobileWidget = new DesktopAndMobileWidget(
        'Desktop And Mobile Widget',
        350,
        'Fedora 38',
        'space'
    );

    // TODO: print each instance to console
    console.log(widget.toString());
    console.log(widgetWithSize.toString());
    console.log(desktopWidget.toString());
    console.log(mobileWidget.toString());
    console.log(desktopAndMobileWidget.toString());
}
// TODO: compile and run the code
exercise28();
