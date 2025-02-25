namespace TextEditor {
    interface Command {
        execute(): void;
    }
      
    class TextEditor {
        private text: string = '';
        private clipboard: string = '';
        private history: string[] = [];
        
        type(text: string): void {
            this.history.push(this.text);
            this.text += text;
        }
        
        copy(): void {
            this.clipboard = this.text;
            console.log(`Texto copiado al portapapeles: \n"${this.clipboard}"`);
        }
        
        paste(): void {
            this.history.push(this.text); 
            this.text += this.clipboard;
            console.log(`Texto después de pegar: \n"${this.text}"`);
        }
        
        undo(): void {
            if (this.history.length > 0) {
                this.text = this.history.pop()!;
                console.log(`Texto después de deshacer: \n"${this.text}"`);
                return;
            }
        
            console.log('No hay nada para deshacer.');
        }
    
        getText(): string {
            return this.text;
        }
    }
      
      class CopyCommand implements Command {
        constructor (private editor: TextEditor) {}

        execute(): void {
            this.editor.copy();
        }
      }
      
      class PasteCommand implements Command {
        constructor (private editor: TextEditor) {}
      
        execute(): void {
            this.editor.paste();
        }
      }
      
      class UndoCommand implements Command {
        constructor (private editor: TextEditor) {}
      
        execute(): void {
            this.editor.undo();
        }
      }
            
      class Toolbar {
        private commands: Record<string, Command> = {};
      
        setCommand(button: string, command: Command): void {
          this.commands[button] = command;
        }
      
        clickButton(button: string): void {
            if (button in this.commands) {
                this.commands[button].execute();
                return;
            }
      
            console.error(`No hay un comando asignado al botón "${button}"`);
        }
      }
      
      function main() {
        const editor = new TextEditor();
        const toolbar = new Toolbar();
      
        const copyCommand = new CopyCommand(editor);
        const pasteCommand = new PasteCommand(editor);
        const undoCommand = new UndoCommand(editor);
      
        toolbar.setCommand('copy', copyCommand);
        toolbar.setCommand('paste', pasteCommand);
        toolbar.setCommand('undo', undoCommand);
      
        editor.type('H');
        editor.type('o');
        editor.type('l');
        editor.type('a');
        editor.type(' ');
        editor.type('M');
        editor.type('u');
        editor.type('n');
        editor.type('d');
        editor.type('o');
        editor.type('!');
        console.log(`Texto actual: "${editor.getText()}"`);
      
        console.log('\nCopiando texto:');
        toolbar.clickButton('copy');
      
        console.log('\nPegando texto:');
        toolbar.clickButton('paste');
      
        console.log('\nDeshaciendo la última acción:');
        toolbar.clickButton('undo');
      
        console.log('\nDeshaciendo de nuevo:');
        toolbar.clickButton('undo');
      
        console.log(`\nTexto final: "${editor.getText()}"`);
      }
      
      main();
}
