class Projector {
    turnOn(): void {
        console.log('Projector on');
    }

    turnOff(): void {
        console.log('Projector off');
    }
}

class SoundSystem {
    on() {
        console.log('Sound System On');
    }

    off() {
        console.log('Sound System Off');
    }
}

class VideoPlayer {
    on(): void {
        console.log('Video Player on');
    }

    play(movie: string): void {
        console.log(`Playing ${movie}`);
    }

    stop() {
        console.log(`Movie stopped`);
    }

    off() {
        console.log(`Video Player off`);
    }
}

class PopcornMaker {
    poppingPopcorn() {
        console.log('Popping popcorn');
    }

    turnOffPoppingPopcorn() {
        console.log('Popcorn Maker off');
    }
}

interface HomeTheatreFacadeOptions {
    projector: Projector;
    soundSystem: SoundSystem;
    videoPlayer: VideoPlayer;
    popcornMaker: PopcornMaker;
}

class HomeTheatreFacade {
    constructor(
        private projector: Projector,
        private soundSystem: SoundSystem,
        private videoPlayer: VideoPlayer,
        private popcornMaker: PopcornMaker,
    ) {}

    watchMovie(movie: string): void {
        console.log('Preparing to watch movie');
        this.projector.turnOn();
        this.soundSystem.on();
        this.popcornMaker.poppingPopcorn();
        this.videoPlayer.on();
        this.videoPlayer.play(movie);

        console.log('Enjoy your movie');
    }

    endWatchingMovie(): void {
        console.log('Preparing to stop movie');
        this.projector.turnOff();
        this.soundSystem.off();
        this.popcornMaker.turnOffPoppingPopcorn();
        this.videoPlayer.stop();
        this.videoPlayer.off();

        console.log('Enjoy your movie');
    }
}

function main() {
    const homeTheatre = new HomeTheatreFacade(
        new Projector(),
        new SoundSystem(),
        new VideoPlayer(),
        new PopcornMaker()
    );
    
    homeTheatre.watchMovie('Avengers');
    homeTheatre.endWatchingMovie();
}

main();