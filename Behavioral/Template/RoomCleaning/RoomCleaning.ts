/** 
 * ! Descripción del Ejercicio
  El proceso de limpieza general incluye los siguientes pasos:
    1.	Entrar a la habitación: Abrir la puerta y entrar.
    2.	Recoger basura: Eliminar la basura de los botes.
    3.	Limpieza específica: Depende del tipo de habitación:
    •	En una habitación de hotel, se hacen las camas.
    •	En una sala de conferencias, se limpian las mesas y se organizan las sillas.
    • En una oficina, se limpian los escritorios y se organizan los documentos.
    4.	Desinfectar superficies: Desinfectar las áreas principales.
    5.	Salir de la habitación: Cerrar la puerta y marcar como terminada
 */

    abstract class RoomCleaning {
      cleanRoom(): void {
        this.enterRoom();
        this.collectTrash();
        this.specificCleaning();
        this.disinfectSurfaces();
        this.exitRoom();
    
        console.log('Limpieza terminada.\n');
      }
    
      private enterRoom(): void {
        console.log('Entrando a la habitación...');
      }
    
      private collectTrash(): void {
        console.log('Recogiendo la basura...');
      }
    
      private disinfectSurfaces(): void {
        console.log('Desinfectando superficies...');
      }
    
      private exitRoom(): void {
        console.log('Saliendo de la habitación y marcándola como limpia.');
      }

      protected abstract specificCleaning(): void;
    }
    
    class HotelRoomCleaning extends RoomCleaning {
        protected specificCleaning(): void {
            console.log('Doing the beds and refilling bathroom articles');
        }
    }
    
    class ConferenceRoomCleaning extends RoomCleaning {
        protected specificCleaning(): void {
            console.log('Cleaning tables and rearrenging chairs');
        }
    }
    
    class OfficeCleaning extends RoomCleaning {
        protected specificCleaning(): void {
            console.log('Cleaning desks and organizing documents');
        }
    }
    
    function main(): void {
      console.log('Limpieza de una habitación de hotel:');
      const hotelRoom = new HotelRoomCleaning();
      hotelRoom.cleanRoom();
    
      console.log('Limpieza de una sala de conferencias:');
      const conferenceRoom = new ConferenceRoomCleaning();
      conferenceRoom.cleanRoom();
    
      console.log('Limpieza de una oficina:');
      const office = new OfficeCleaning();
      office.cleanRoom();
    }
    
    main();