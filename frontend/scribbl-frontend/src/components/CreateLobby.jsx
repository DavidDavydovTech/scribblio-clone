import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

class CreateLobby extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            refs: {
                maxPlayerCount: React.createRef(),
                rounds: React.createRef(),
                drawTime: React.createRef()
            },
        }
    }

    prepareGameOptionsObject = () => {
        let maxPlayerCount = parseInt(this.state.refs.maxPlayerCount.current.value);
        let rounds = parseInt(this.state.refs.rounds.current.value);
        let drawTime = parseInt(this.state.refs.drawTime.current.value);

        switch (true) {
            case isNaN(maxPlayerCount):
            case isNaN(rounds):
            case isNaN(drawTime):
                alert("One of your values is not a number, ")
            case typeof name !== 'string':
                name = 'undefined';
                console.warn('Warning: Name was not a string. Assigning player a name of "undefined" instead.');
            case name.length < 3:
                // TODO: Add error handling for this form.
            case name.length > 12:
                // TODO: Add error handling for this form.
            // TODO: Add a check to see if user has a curse word in their name.
        }

        this.props.onSubmit(name);
    }   

    render () { return (
        <Card>
            <Card.Body className="align-content-center">
                <Form>
                    <Form.Group controlId="maxPlayerCount">
                        <Form.Label>Max Player Count</Form.Label>
                        <Form.Control ref={this.state.refs.maxPlayerCount} type="username" placeholder="Pick a player count between 2 and 20" />
                    </Form.Group>

                    <Form.Group controlId="rounds">
                        <Form.Label>Rounds per a Game</Form.Label>
                        <Form.Control ref={this.state.refs.rounds} type="username" placeholder="Pick a player count between 2 and 20" />
                    </Form.Group>

                    <Form.Group controlId="drawTime">
                        <Form.Label>Draw Time</Form.Label>
                        <Form.Control ref={this.state.refs.drawTime} type="username" placeholder="Input a draw time between 5 and 300" />
                    </Form.Group>
                </Form>

                <Button onClick={this.preparePlayerObject}>click me</Button>
            </Card.Body>
        </Card>
    );}
}

export default CreateLobby;