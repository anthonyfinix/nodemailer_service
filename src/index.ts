// imports
import express, { Application, Router } from 'express';
import dbConnect from './util/dbConnect';
import router from './routes';
import maintenance from './routes/maintenance';
import configuration, { IConfig } from './config';
import amqplibConnect from './util/amqpConnect';
export default async (options: IConfig): Promise<Application> => {
    configuration.setConfiguration(options);
    let dbConnection = await dbConnect({ mongoURI: configuration.mongoURI, options: configuration.mongooseOptions });
    let amqplib = await amqplibConnect;
    const app: Application = express();
    if (!dbConnection.error || !amqplib.error) {
        console.log(`message broker connected`)
        console.log(`db connected`)
        app.use(router);
    } else {
        console.log(`db error: ${dbConnection.error.message}`)
        console.log(`amqplib error: ${amqplib.error.message}`)
        app.use(maintenance);
    }
    return app;
}

