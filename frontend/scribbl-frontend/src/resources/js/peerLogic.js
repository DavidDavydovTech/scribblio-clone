import Peer from 'peerjs';

// Host code here:
class Host {
    constructor (playerObject, rulesObject) {
        this._peer = new Peer();  
        this.player = playerObject;
        this.rules = rulesObject;

        this.initHost();
    }

    async initHost ()  {
        this._peer.on('open', function(id) {
            this._id = id;
            alert(this._id)
        });
    }

    verifyPlayerObject (playerObject) {
        // Example of valid playerObject:
        // let obj = {
        //     id: 121204812048124091240,
        //     name: "American Idi",
        //     avatar: {
        //         eyes: 'suspicious',
        //         mouth: 'happy-v',
        //         body: 'blue-striped'
        //     }
        // }
    }
}
// Peer code here:

export default Host;