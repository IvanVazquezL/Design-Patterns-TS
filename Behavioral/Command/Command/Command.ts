namespace Commands {
    interface Command {
        execute(): void;
    }

    class Light {
        turnOn(): void {
            console.log('On');
        }

        turnOff(): void {
            console.log('Off');
        }
    }

    class Fan {
        on(): void {
            console.log('On');
        }

        off(): void {
            console.log('Off');
        }
    }

    class LightOnCommand implements Command {
        constructor(private light: Light) {}
        
        execute(): void {
            this.light.turnOn();
        }
    }

    class LightOffCommand implements Command {
        constructor(private light: Light) {}
        
        execute(): void {
            this.light.turnOff();
        }
    }

    class FanOnCommand implements Command {
        constructor(private fan: Fan) {}
        
        execute(): void {
            this.fan.on();
        }
    }

    class FanOffCommand implements Command {
        constructor(private fan: Fan) {}
        
        execute(): void {
            this.fan.off();
        }
    }

    class RemoteControl {
        private commands: Record<string, Command> = {};

        setCommand(button: string, command: Command): void {
            this.commands[button] = command;
        }

        pressButton(button: string): void {
            this.commands[button].execute();
        }
    }

    function main() {
        const control = new RemoteControl();
        const light = new Light();
        const fan = new Fan();

        const lightOnCommand = new LightOnCommand(light);
        const lightOffCommand = new LightOffCommand(light);
        const fanOnCommand = new FanOnCommand(fan);
        const fanOffCommand = new FanOffCommand(fan);

        control.setCommand('1', lightOnCommand);
        control.setCommand('2', lightOffCommand);
        control.setCommand('3', fanOnCommand);
        control.setCommand('4', fanOffCommand);

        control.pressButton('1');
        control.pressButton('2');
        control.pressButton('3');
        control.pressButton('4');
    }

    main();
}