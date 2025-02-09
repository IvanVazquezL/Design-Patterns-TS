interface Transport {
    deliver(): void;
}

class Truck implements Transport {
    deliver(): void {
        console.log('Truck');
    }

}

class Ship implements Transport {
    deliver(): void {
        console.log('Ship');
    }
}

abstract class Logistics {
    protected abstract createTransport(): Transport;

    planDelivery(): void {
        const transport = this.createTransport();
        transport.deliver();
    }
}

class RoadLogistics extends Logistics {
    override createTransport(): Transport {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    override createTransport(): Transport {
        return new Ship();
    }
}

function main() {
    let logistics : Logistics;

    logistics = new RoadLogistics();

    logistics.planDelivery();

    logistics = new SeaLogistics();

    logistics.planDelivery();
}

main();