import amqplib, { Channel, Connection } from 'amqplib';
import configuration from '../config';

const amqplibConnect = async (url: string) => {
    try {
        let connection:Connection = await amqplib.connect(url);
        let channel:Channel = await connection.createChannel();
        let queue = [await channel.assertQueue('MAILER')];
        return {
            connection, channel, queue
        }
    } catch (e) {
        return { error: e }
    }

}
export default amqplibConnect(configuration.amqplibURL);