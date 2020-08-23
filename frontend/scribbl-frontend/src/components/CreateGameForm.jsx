import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

class CreateGameForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            rounds: "3",
            roundsError: "",

            players: "12",
            playersError: "",


            time: "60",
            timeError: ""
        }
    }

    handleChange = (event) => {
        let newValue = this.checkInput(event.target.id, event.target.value)
        this.setState({[event.target.id]: newValue});
    }

    checkInput = (valueName, newValue) => {
        let parsedValue = parseInt(newValue);

        if (valueName === 'rounds') {
            if (isNaN(newValue)) {
                return this.state[valueName];
            } else if (parsedValue < 1) {
                this.setState({[valueName + "Error"]: "You must have at least 1 round per a game!"});
            } else if (parsedValue > 10) {
                this.setState({[valueName + "Error"]: "You must have less than 10 rounds per a game!"});
            } else {
                this.setState({[valueName + "Error"]: ""});
            }
        } else if (valueName === 'players') {
            if (isNaN(newValue)) {
                return this.state[valueName];
            } else if (parsedValue < 2) {
                this.setState({[valueName + "Error"]: "You must have at least 2 players per a game!"});
            } else if (parsedValue > 20) {
                this.setState({[valueName + "Error"]: "You must have less than 20 players per a game!"});
            } else {
                this.setState({[valueName + "Error"]: ""});
            }
        } else if (valueName === 'time') {
            if (isNaN(newValue)) {
                return this.state[valueName];
            } else if (parsedValue < 20) {
                this.setState({[valueName + "Error"]: "Players must have at least 20 seconds to draw!"});
            } else if (parsedValue > 300) {
                this.setState({[valueName + "Error"]: "Players don't need more than 300 seconds to draw!"});
            } else {
                this.setState({[valueName + "Error"]: ""});
            }
        }

        if (isNaN(parsedValue)) {
            return "";
        }
        return parsedValue;
    }

    submitData = () => {
        if (
            this.state.roundsError.length === 0 && 
            this.state.playersError.length === 0&& 
            this.state.timeError.length === 0) {
                this.props.onSubmit({
                    rounds: this.state.rounds,
                    players: this.state.players,
                    time: this.state.time
                });
        } else {
            alert("Error, could not submit!")
        }

    }   

    // TODO: Make mapping function, you could combine this component and CreatePlayerForm in to 1 dynamic component!
    render () { return (
        <Card>
            <Card.Body className="align-content-center">
                <Form>
                    <Form.Group>
                        <Form.Label>Rounds per a game</Form.Label>
                        <Form.Control 
                            id = "rounds"
                            value={this.state.rounds}
                            onChange={this.handleChange}
                            placeholder="3"
                            autoComplete="off"
                        />
                        <Form.Text className="text-muted">
                            {this.state.roundsError}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Players per a Game</Form.Label>
                        <Form.Control 
                            id = "players"
                            value={this.state.players}
                            onChange={this.handleChange}
                            placeholder="12"
                            autoComplete="off"
                        />
                        <Form.Text className="text-muted">
                            {this.state.playersError}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Time per a Drawing</Form.Label>
                        <Form.Control 
                            id = "time"
                            value={this.state.time}
                            onChange={this.handleChange}
                            placeholder="60"
                            autoComplete="off"
                        />
                        <Form.Text className="text-muted">
                            {this.state.timeError}
                        </Form.Text>
                    </Form.Group>
                </Form>

                <Button onClick={this.submitData}>click me</Button>
            </Card.Body>
        </Card>
    );}
}

export default CreateGameForm;