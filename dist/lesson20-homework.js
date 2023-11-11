"use strict";
class Television {
    turnOn() {
        console.log("Television is on");
    }
    turnOff() {
        console.log("Television is off");
    }
    changeChannel(channel) {
        console.log(`Changed to channel ${channel}`);
    }
}
class TvOnCommand {
    television;
    constructor(television) {
        this.television = television;
    }
    execute() {
        this.television.turnOn();
    }
}
class TvOffCommand {
    television;
    constructor(television) {
        this.television = television;
    }
    execute() {
        this.television.turnOff();
    }
}
class TvChangeChannelCommand {
    television;
    channel;
    constructor(television, channel) {
        this.television = television;
        this.channel = channel;
    }
    execute() {
        this.television.changeChannel(this.channel);
    }
}
class RemoteControl {
    command;
    constructor(command) {
        this.command = command;
    }
    pressButton() {
        this.command.execute();
    }
}
let television = new Television();
let tvOnCommand = new TvOnCommand(television);
let tvOffCommand = new TvOffCommand(television);
let tvChangeChannelCommand = new TvChangeChannelCommand(television, 5);
let remoteControlOn = new RemoteControl(tvOnCommand);
let remoteControlOff = new RemoteControl(tvOffCommand);
let remoteControlChangeChannel = new RemoteControl(tvChangeChannelCommand);
remoteControlOn.pressButton();
remoteControlChangeChannel.pressButton();
remoteControlOff.pressButton();
