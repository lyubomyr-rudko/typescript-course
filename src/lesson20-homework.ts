interface Command {
    execute(): void;
}

class Television {
    public turnOn() {
        console.log("Television is on");
    }

    public turnOff() {
        console.log("Television is off");
    }

    public changeChannel(channel: number) {
        console.log(`Changed to channel ${channel}`);
    }
}

class TvOnCommand implements Command {
    private television: Television;

    constructor(television: Television) {
        this.television = television;
    }

    public execute() {
        this.television.turnOn();
    }
}

class TvOffCommand implements Command {
    private television: Television;

    constructor(television: Television) {
        this.television = television;
    }

    public execute() {
        this.television.turnOff();
    }
}

class TvChangeChannelCommand implements Command {
    private television: Television;
    private channel: number;

    constructor(television: Television, channel: number) {
        this.television = television;
        this.channel = channel;
    }

    public execute() {
        this.television.changeChannel(this.channel);
    }
}

class RemoteControl {
    private command: Command;

    constructor(command: Command) {
        this.command = command;
    }

    public pressButton() {
        this.command.execute();
    }
}

let television: Television = new Television();
let tvOnCommand: Command = new TvOnCommand(television);
let tvOffCommand: Command = new TvOffCommand(television);
let tvChangeChannelCommand: Command = new TvChangeChannelCommand(television, 5); 

let remoteControlOn: RemoteControl = new RemoteControl(tvOnCommand);
let remoteControlOff: RemoteControl = new RemoteControl(tvOffCommand);
let remoteControlChangeChannel: RemoteControl = new RemoteControl(tvChangeChannelCommand);

remoteControlOn.pressButton();
remoteControlChangeChannel.pressButton();
remoteControlOff.pressButton();
