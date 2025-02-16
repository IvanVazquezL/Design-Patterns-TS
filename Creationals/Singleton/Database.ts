class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  private constructor() {}

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
        DatabaseConnection.instance = new DatabaseConnection();
        console.log('Database instance created');
    }

    return DatabaseConnection.instance;
  }

  public connect(): void {
    if (this.connected) {
        console.log('Database is already connected');
        return;
    }
    this.connected = true;
    console.log('Database connected');
  }

  public disconnect(): void {
    if (!this.connected) {
        console.log('Database is not connected');
        return;
    }
    this.connected = false;
    console.log('Database disconnected');
  }
}

// Pruebas
function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect();

  const db2 = DatabaseConnection.getInstance();
  db2.connect();

  console.log('Son iguales:', db1 === db2);

  db1.disconnect();

  db2.connect();
}

main();