type Language = 'es' | 'en' | 'fr';

function createGreeter(lang: Language) {
    return function(name: string) {
        const message = {
            es: `Hola, ${name}`,
            en: `Hello, ${name}`,
            fr: `Bonjour, ${name}`
        };

        console.log(message[lang]);
        return;
    }
}

function main() {
    const spanish = createGreeter('es');
    spanish('Ivan');

    const french = createGreeter('fr');
    french('Ivan');
}

main();