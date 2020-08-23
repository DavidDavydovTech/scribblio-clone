import Peer from 'peerjs';

// Host code here:
class Host {
    constructor (playerObject, rulesObject) {
        this._peer = new Peer();  
        this.player = playerObject;
        this.rules = rulesObject;
        this._gameRunning = true; // Used to tell if the server is still running!
        this._gameTickRate = 60; // How many times per a second the server will 'speak' with players. 
        this._gameTickFunc = () => { // Function var ran at the end of this.GameTick. Starts off like this and gets populated by another method.
            alert("ERROR: HOST TICK FUNCTION NOT SET");
            this._gameRunning = false;
        };
        this._gamePlayers = {};

        // All times are in seconds.
        this._gameRules = {
            // Time related rules
            timeDraw: 60, // The maximum amount of time players have to draw/guess a word.
            timeWait: 10, // The maximum amount of time to wait until picking a random word for the current drawer.
            timeTransition: 5, // How long to wait between the word-results screen and the next pick screen.
            timeGrace: 1, // The maximum amount of lenency the host has for laggy players
            timeWin: 15, // How long to linger on the end-of-game screen.
            
            // The ruls will never run because they're set to twice the size of the maximum possible round/draw time (...and also aren't implemented)
            timeAfkGuesser: 12000, // How long to wait until an inactive guesser gets kicked
            timeAfkDrawer: 2, // How long (percentage, 0.1 = 10%, 2 = 200%) until an inactive drawer gets kicked durring their round.

            // Game related rules
            rounds: 3, // Rounds before the winner is declared
            points: 800, // Points for being the first one to get a word right
            pointsTimeFalloff: () => { // A function used for calculating how many points players get after adjusting for how much time since round start. Currently unused.

            },
            pointsPlayerFallloff: () => { //Like above, but removes points based on how many players answered. Currently unusued.

            },
        };

        this._gameVars = {
            eventName: "lobby",// Used to determine what the game is currently doing/emitting to the players.
            eventTimeStart: 0, // When the even started.
            eventTimeLeft: 0, // How much time is left until this event ends and the next one begins.
        }

        this._gameEmits = []; // List of things to emit to everyone.
        this._gameIncoming = []; // List of things that need to be proccessed.
    }

    InitHost ()  {
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
                    setTimeout(this.GameTick, 1000/33);
                }
            }
    
            this.GameTick();
        }
    }

    GameUpdateTimeLeft () {

    }

    GameNextEvent () {
        let vars = this._gameVars;
        let event = this._gameVars.eventName;
        
        if (event === "pick") { // pick = The drawer is currently picking a word.
            vars.eventName = "play";

        } if (event === "play") { // play = people are currently drawing and guessing. 
            vars.eventName = "result";

        } else if (event === "result") { // result = people are currently reviewing the result of the last play event
            vars.eventName = "pick";

        }
        vars.eventTimeStart = Date.now();
    }
    
}
// Peer code here:

export default Host;