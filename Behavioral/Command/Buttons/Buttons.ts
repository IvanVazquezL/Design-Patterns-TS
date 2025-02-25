namespace Buttons {
    interface Command {
        execute(): void;
    }

    class Save {
        save(): void {
            console.log('Saving...');
        }
    }

    class Open {
        open(): void {
            console.log('Opening...');
        }
    }

    class Print {
        print(): void {
            console.log('Printing...');
        }
    }

    class SaveCommand implements Command {
        constructor(private save: Save) {}

        execute(): void {
            this.save.save();
        }
    }

    class OpenCommand implements Command {
        constructor(private open: Open) {}

        execute(): void {
            this.open.open();
        }
    }

    class PrintCommand implements Command {
        constructor(private print: Print) {}

        execute(): void {
            this.print.print();
        }
    }

    class Button {
        private commands: Record<string, Command> = {};

        setCommand(button: string, command: Command): void {
            this.commands[button] = command;
        }

        pressButton(button: string): void {
            this.commands[button].execute();
        }
    }

    class Shortcut {
        private commands: Record<string, Command> = {};

        setCommand(shortcut: string, command: Command): void {
            this.commands[shortcut] = command;
        }

        pressShortcut(shortcut: string): void {
            this.commands[shortcut].execute();
        }
    }

    function main() {
        const buttons = new Button();
        const shortcuts = new Shortcut();

        const save = new Save();
        const open = new Open();
        const print = new Print();

        const saveCommand = new SaveCommand(save);
        const openCommand = new OpenCommand(open);
        const printCommand = new PrintCommand(print);

        buttons.setCommand('save', saveCommand);
        buttons.setCommand('open', openCommand);
        buttons.setCommand('print', printCommand);

        shortcuts.setCommand('ctrl + s', saveCommand);
        shortcuts.setCommand('ctrl  + o', openCommand);
        shortcuts.setCommand('ctrl + p', printCommand);

        buttons.pressButton('save');
        shortcuts.pressShortcut('ctrl + s');
    }

    main();
}