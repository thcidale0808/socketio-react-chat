import * as Amqp from 'amqp-ts';
import io from 'socket.io-client';

export const socket = io('http://chatserver:9081')

const start = async () =>{
    const mqConnection = new Amqp.Connection('amqp://rabbitmq');
    
    const exchange = await mqConnection.declareExchange('exchange')
    const queue = await mqConnection.declareQueue('queue')
    queue.bind(exchange)
    queue.activateConsumer((message) => {
        socket.emit('new queuemessage', message.getContent())
        console.log("Message received: " + message.getContent());
        message.ack()
    });
}

start()
