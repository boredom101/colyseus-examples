import { Room } from "colyseus";

interface IClient {
    name?: string;
    energy?: number;
}

export class EnergyRoom extends Room {
    maxClients = 3;
    
    players: { [id: string] : IClient; } = {};
    
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
    
    dash (req, res, next) {
        res.send(players);
    }

}
