import { Room } from "colyseus";

interface IClient {
    name?: string;
    energy?: number;
}

export class EnergyRoom extends Room {
    maxClients = 3;
    players?: { [id: string]: IClient; } = {};
    
    onCreate (options) {
        console.log("energy room created!", options);
    }

    onJoin (client) {
        this.players[client.id] = {};
    }

    onLeave (client) {
        this.allowReconnection(client);
    }

    onMessage (client, data) {
        if (data.hasOwnProperty('update')) {
            this.send(client, this.players)
        } else if (data.hasOwnProperty('energy')) {
            this.players[client.id]['energy'] = data['energy'];
        } else {
            this.players[client.id]['name'] = data['name'];
            this.players[client.id]['energy'] = 0;
        }
    }

    onDispose () {
        console.log("dispose energy room");
    }

}
