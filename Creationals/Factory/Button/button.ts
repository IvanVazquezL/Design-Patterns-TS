namespace Button {
    interface Button {
        render(): void;
        onClick(action: () => void): void;
    }

    class WindowsButton implements Button {
        render(): void {
            console.log("Rendering a Windows button...");
        }
    
        onClick(action: () => void): void {
            console.log("Button click event registered.");
        }  
    }

    class HTMLButton implements Button {
        render(): void {
            console.log("Rendering an HTML button...");
        }
    
        onClick(action: () => void): void {
            console.log("Button click event registered.");
        }
    }

    abstract class Dialog {
        protected abstract createButton(): Button;

        closeDialog(): void {
            console.log("Dialog closed.");
        }

        render(): void {
            // Call the factory method to create a product object.
            const okButton = this.createButton();
            // Now use the product.
            okButton.onClick(() => this.closeDialog());
            okButton.render();
        }
    }

    class WindowsDialog extends Dialog {
        override createButton(): Button {
            return new WindowsButton();
        }
    }        

    class WebDialog extends Dialog {
        override createButton(): Button {
            return new HTMLButton();
        }
    }

    function main() {
        let dialog: Dialog;

        const OS: string = 'Web';

        if (OS === "Windows") {
            dialog = new WindowsDialog()
        } else if (OS === "Web") {
            dialog = new WebDialog();
        } else {
            throw new Error("Error! Unknown operating system.")
        }

        dialog.render();
    }

    main();
}