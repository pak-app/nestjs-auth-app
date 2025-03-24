export default function (): any {
    return {
        database: {
            username: process.env.MONGO_INITDB_ROOT_USERNAME,
            password: process.env.MONGO_INITDB_ROOT_PASSWORD,
            containerName: process.env.DATABASE_CONTAINER_NAME,
            port: process.env.DATABASE_PORT,
            dbName: process.env.DATABASE_NAME,
            dbUrl: `mongodb://${this.username}:${this.password}@${this.containerName}:${this.port}/${this.dbName}` 
        }
    };
}