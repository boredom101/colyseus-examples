import { Room } from "colyseus";

clients = {};

export class EnergyRoom extends Room {
    maxClients = 3;
    
    onCreate (options) {
        console.log("energy room created!", options);
    }

    onJoin (client) {
        clients[client.id] = {};
    }

    onLeave (client) {
        clients[client.id] = {};
    }

    onMessage (client, data) {
        clients[client.id] = Object.assign(clients[client.id], data);
    }

    onDispose () {
        console.log("dispose energy room");
    }

}

export function dash(req, res, next) {
    res.send(clients);
}
