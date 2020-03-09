import { Room } from "colyseus";

interface IClient {
    name?: string;
    energy?: number;
}

export class EnergyRoom extends Room {
    maxClients = 3;
    players?: { [id: string]: IClient; };

    constructor(players) {
        super(...arguments);
        this.players = players;
    }
    
    onCreate (options) {
        console.log("energy room created!", options);
    }

    onJoin (client) {
        this.players[client.id] = {};
    }

    onLeave (client) {
        this.players[client.id] = {};
    }

    onMessage (client, data) {
        this.players[client.id] = data;
    }

    onDispose () {
        console.log("dispose energy room");
    }

}

export function dash(players) {
    return function inner(req, res, next) {
        res.send(players);
}
}

export function energy() {
    var clients: { [id: string]: IClient; } = {};
    return [ dash(clients), EnergyRoom.bind(clients) ];
}
