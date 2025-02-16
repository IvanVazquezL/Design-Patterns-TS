class RoundHole {
    constructor(private radius: number) {}

    getRadius(): number {
        return this.radius;
    }

    fits(peg: RoundPeg) {
        return this.radius >= peg.getRadius();
    }
}

class RoundPeg {
    constructor(private radius: number) {}

    getRadius(): number {
        return this.radius;
    }
}

class SquarePeg {
    constructor(private width: number) {}

    getWidth(): number {
        return this.width;
    }
}

class SquarePegAdapter extends RoundPeg {
    private peg: SquarePeg;

    constructor(peg: SquarePeg) {
        super(0);
        this.peg = peg;
    }

    getRadius(): number {
        return this.peg.getWidth() * Math.sqrt(2) / 2;
    }
}

function main() {
    const hole = new RoundHole(5);
    const roundPeg = new RoundPeg(5)
    console.log(hole.fits(roundPeg)); // true
    
    const smallSquarePeg = new SquarePeg(5);
    const largeSquarePeg = new SquarePeg(10);
    //console.log(hole.fits(smallSquarePeg));
    
    const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
    const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);
    console.log(hole.fits(smallSquarePegAdapter)); // true
    console.log(hole.fits(largeSquarePegAdapter)); // false
}

main();