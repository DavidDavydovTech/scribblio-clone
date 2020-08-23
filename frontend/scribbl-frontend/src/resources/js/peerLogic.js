import Peer from 'peerjs';

// Host code here:
class Host {
    constructor (playerObject, rulesObject) {
        this._peer = new Peer();  
        this.player = playerObject;
        this.rules = rulesObject;
        this._gameRunning = true;
        this._gameTickRate = 33;
        this._gameTickFunc = () => {
            alert("ERROR: HOST TICK FUNCTION NOT SET");
            this._gameRunning = false;
        };
    }

    initHost ()  {
        this._peer.on('open', function(id) {
            this._id = id;
            return id;
        });
    }

    GameTick () {
        
        this._gameTickFunc();
    }

    GameRun () {
        if(this._gameTickRate > 66){
            alert("WARNING, GAME TRIED TO RUN WITH A TICKRATE HIGHER THAN 66!");
            this._gameRunning = false;
        } else {
            this._gameTickFunc = () => {
                if(this._gameRunning) {
                    setTimeout(GameTick, 1000/33);
                }
            }
    
            this.GameTick();
        }

    }
}
// Peer code here:

export default Host;