namespace FileSystems {
    interface FileSystemComponent {
        showDetails(indent: string): void;
    }

    class File implements FileSystemComponent {
        constructor(private name: string) {}

        showDetails(indent: string = ''): void {
            console.log(`${indent}- Archivo: ${this.name}`);
        }
    }

    class Folder implements FileSystemComponent {
        private contents: FileSystemComponent[] = [];

        constructor(private name: string) {}

        add(component: FileSystemComponent) {
            this.contents.push(component);
        }

        showDetails(indent: string = ''): void {
            console.log(`${indent}+ Folder: ${this.name}`);
            for (const component of this.contents) {
                component.showDetails(indent + ' ');
            }
        }
    }

    function main() {
        const file1 = new File('archivo1.txt');
        const file2 = new File('archivo2.txt');
        const file3 = new File('archivo3.txt');
        const file4 = new File('archivo4.txt');

        const folder1 = new Folder('folder 1');
        folder1.add(file1);
        folder1.add(file2);

        const folder2 = new Folder('folder 2');
        folder2.add(file3);

        const folder3 = new Folder('folder 3');
        folder3.add(file4);
        folder2.add(folder3);

        const rootFolder = new Folder('Root Folder');
        rootFolder.add(folder1);
        rootFolder.add(folder2);

        rootFolder.showDetails();
    }

    main();
}