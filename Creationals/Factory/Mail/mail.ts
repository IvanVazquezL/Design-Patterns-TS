namespace Mail {
    interface Transport {
        deliver(): void;
    }

    class Truck implements Transport {
        deliver(): void {
            console.log('Delivering by Truck');
        }
    }

    class Plane implements Transport {
        deliver(): void {
            console.log('Delivering by Plane');
        }
    }

    class Train implements Transport {
        deliver(): void {
            console.log('Delivering by Train');
        }
    }

    abstract class Mail {
        protected abstract createTransport(): Transport;
    
        planDelivery(): void {
            const transport = this.createTransport();
            transport.deliver();
        }
    }

    class AirMail extends Mail {
        override createTransport(): Transport {
            return new Plane();
        }
    }

    class GroundMail extends Mail {
        private transportType: "truck" | "train";

        constructor(transportType: "truck" | "train") {
            super();
            this.transportType = transportType;
        }

        override createTransport(): Transport {
            if (this.transportType === "truck") {
                return new Truck();
            } else {
                return new Train();
            }
        }
    }

    function main() {
        // Example Usage:
        const airMail = new AirMail();
        airMail.planDelivery(); // ✅ Delivering by Plane

        const groundMailTruck = new GroundMail("truck");
        groundMailTruck.planDelivery(); // ✅ Delivering by Truck

        const groundMailTrain = new GroundMail("train");
        groundMailTrain.planDelivery(); // ✅ Delivering by Train
    }

    main();
}
