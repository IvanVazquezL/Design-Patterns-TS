interface Device {    
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    getVolume(): number;
    setVolume(volume: number) : void;
    getChannel(): number;
    setChannel(channel: number): void;
}

class TV implements Device {
    private onOff: boolean;
    private volume: number;
    private channel: number;

    constructor() {
        this.onOff = false;
        this.volume = 10;
        this.channel = 1;
    }

    isEnabled(): boolean {
        return this.onOff;
    }

    enable(): void {
        console.log('TV is on!');
        this.onOff = true;
    }

    disable(): void {
        console.log('TV is off!');
        this.onOff = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number): void {
        this.volume = volume;
    }

    getChannel(): number {
        return this.channel;
    }

    setChannel(channel: number): void {
        this.channel = channel;
    }
    
}

class Radio implements Device {
    private onOff: boolean;
    private volume: number;
    private channel: number;

    constructor() {
        this.onOff = false;
        this.volume = 10;
        this.channel = 1;
    }

    isEnabled(): boolean {
        return this.onOff;
    }

    enable(): void {
        console.log('Radio is on!');
        this.onOff = true;
    }

    disable(): void {
        console.log('Radio is off!');
        this.onOff = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number): void {
        this.volume = volume;
    }

    getChannel(): number {
        return this.channel;
    }

    setChannel(channel: number): void {
        this.channel = channel;
    }
}

abstract class Remote {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    togglePower(): void {
        this.device.isEnabled() ?
            this.device.disable() :
            this.device.enable();
    }

    volumeDown() {
        let volume = this.device.getVolume();
        this.device.setVolume(volume--);
        console.log(`Volume: ${volume}`);
    }

    volumeUp() {
        let volume = this.device.getVolume();
        this.device.setVolume(volume++);
        console.log(`Volume: ${volume}`);
    }

    channelDown() {
        let channel = this.device.getChannel();
        this.device.setChannel(channel--);
        console.log(`Channel: ${channel}`);
    }

    channelUp() {
        let channel = this.device.getChannel();
        this.device.setChannel(channel++);
        console.log(`Channel: ${channel}`);
    }
}

class TVRemote extends Remote {}

class RadioRemote extends Remote {}

function main() {
    const tv = new TV();
    const tvRemote = new TVRemote(tv);
    tvRemote.togglePower();
    tvRemote.channelUp();
    tvRemote.volumeUp();
}

main();