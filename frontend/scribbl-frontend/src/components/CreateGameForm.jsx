import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

class CreateGameForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            rounds: "",
            roundsError: "",

            players: "",
            playersError: "",


            time: "",
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
            } else if (parsedValue < 3) {
                this.setState({[valueName + "Error"]: "You must have at least 2 players per a game!"});
            } else if (parsedValue > 14) {
                this.setState({[valueName + "Error"]: "You must have less than 20 players per a game!"});
            } else {
                this.setState({[valueName + "Error"]: ""});
            }
        }

        
        return newValue;
    }

    submitData = () => {
        this.props.onSubmit({
            name: this.state.name
        });
    }   

    render () { return (
        <Card>
            <Card.Body className="align-content-center">
                <Form>
                    <Form.Group>
                        <Form.Label>Player Name</Form.Label>
                        <Form.Control 
                            id = "rounds"
                            value={this.state.rounds}
                            onChange={this.handleChange}
                            // type="number" 
                            placeholder="12"
                            autoComplete="off"
                        />
                        <Form.Text className="text-muted">
                            {this.state.roundsError}
                        </Form.Text>
                    </Form.Group>
                </Form>

                <Button onClick={this.submitData}>click me</Button>
            </Card.Body>
        </Card>
    );}
}

export default CreateGameForm;