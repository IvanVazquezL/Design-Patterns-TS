namespace ButtonII {
    // Base Button interface
    interface Button {
        render(): void;
    }

    // Concrete Square Button (default in framework)
    class SquareButton implements Button {
        render(): void {
            console.log("Rendering a square button");
        }
    }

    // Custom Round Button (new subclass)
    class RoundButton implements Button {
        render(): void {
            console.log("Rendering a round button");
        }
    }

    // Base UI Framework
    abstract class UIFramework {
        abstract createButton(): Button;

        renderUI(): void {
            const button = this.createButton();
            button.render();
        }
    }

    // Subclass that overrides button creation to use RoundButton
    class UIWithRoundButtons extends UIFramework {
        override createButton(): Button {
            return new RoundButton();
        }
    }

    // Client code using default UI framework (square buttons)
    console.log("Using default UI framework:");

    const uiDefault = new class extends UIFramework {
        createButton(): Button {
            return new SquareButton();
        }
    };
    uiDefault.renderUI();

    // Client code using modified UI framework (round buttons)
    console.log("\nUsing customized UI with round buttons:");
    const ui2 = new UIWithRoundButtons();
    ui2.renderUI();

}
