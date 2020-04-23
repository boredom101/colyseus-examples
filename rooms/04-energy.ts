import { Room } from "colyseus";

interface IClient {
    name?: string;
    energy?: number;
}

export class EnergyRoom extends Room {
    
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
            this.send(client, this.players);
        } else if (data.hasOwnProperty('energy')) {
            this.players[client.id]['energy'] = data['energy'];
            console.log(players[client.id]['name'] + " now has " + data['energy'] + " energy");
            if (data['energy'] >= 5000) {
                console.log(this.players[client.id]['name'] + " has won!");
                this.broadcast({
                    "message": this.players[client.id]['name'] + " has won!"
                }, { except: client });
            }
        } else {
            this.players[client.id]['name'] = data['name'];
            this.players[client.id]['energy'] = 0;
            console.log(data['name'] + " has joined");
        }
    }

    onDispose () {
        console.log("dispose energy room");
    }

}
