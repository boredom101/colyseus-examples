import { Room } from "colyseus";

interface IClient {
    name?: string;
    energy?: number;
}

function RoomFactory (players) {
    return EnergyRoom.
}

export class EnergyRoom extends Room {
    maxClients = 3;
    players?: { [id: string]: IClient; };
    
    onCreate (options) {
        console.log("energy room created!", options);
    }

    onJoin (client) {
        players[client.id] = {};
    }

    onLeave (client) {
        players[client.id] = {};
    }

    onMessage (client, data) {
        players[client.id] = data;
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
    var players: { [id: string]: IClient; } = {};
    return {RoomFactory(players), dash(players)};
}
