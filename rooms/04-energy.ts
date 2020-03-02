import { Room } from "colyseus";

export class EnergyRoom extends Room {
    maxClients = 3;
    
    clients = {};
    
    onCreate (options) {
        console.log("energy room created!", options);
    }

    onJoin (client) {
        this.clients[client.id] = {};
    }

    onLeave (client) {
        this.clients[client.id] = {};
    }

    onMessage (client, data) {
        this.clients[client.id] = Object.assign(clients[client.id], data);
    }

    onDispose () {
        console.log("dispose energy room");
    }

}

export function dash(req, res, next) {
    res.send(clients);
}
