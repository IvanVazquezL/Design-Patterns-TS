namespace Locations {
    interface Location {
        display(coordinates: { x: number, y: number }): void;
    }
    
    class LocationIcon implements Location {
        constructor(private type: string, private iconImage: string) {}

        display(coordinates: { x: number; y: number; }): void {
            console.log(
                `Coords: ${this.type} (${coordinates.x},${coordinates.y} ${this.iconImage})`
            )
        }
    }

    class LocationFactory {
        private icons: Record<string, LocationIcon> = {};

        getLocationIcon(type: string): LocationIcon {
            if (!this.icons[type]) {
                const iconImage = `img_${type.toLowerCase()}`;
                this.icons[type] = new LocationIcon(type, iconImage);
            }

            return this.icons[type];
        }
    }

    class MapLocation {
        private coordinates: { x: number, y: number };
        private icon: LocationIcon;

        constructor(
            x: number,
            y: number,
            icon: LocationIcon
        ) {
            this.coordinates = { x, y };
            this.icon = icon;
        }

        display() {
            this.icon.display(this.coordinates);
        }
    }

    function main() {
        const factory = new LocationFactory();
        const locations = [
            new MapLocation(10, 20, factory.getLocationIcon('Hospital')),
            new MapLocation(30, 40, factory.getLocationIcon('Hospital'))

        ];

        for (const location of locations) {
            location.display();
        }
    }

    main();
}