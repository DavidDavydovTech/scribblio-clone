import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

let randomName = require('random-name');

class CreatePlayerForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            name: `${randomName.first()}`,
            nameError: ""
        }
    }

    handleChange = (event) => {
        let newValue = this.checkInput(event.target.id, event.target.value)
        this.setState({[event.target.id]: newValue});
    }

    checkInput = (valueName, newValue) => {

        if (valueName === 'name') {
            if (typeof newValue !== 'string') {
                return this.state[valueName];
            } else if (newValue.length < 3) {
                this.setState({[valueName + "Error"]: "Your name must be at least 3 characters long!"});
            } else if (newValue.length > 14) {
                this.setState({[valueName + "Error"]: "Your name can't be longer than 14 characters long!"});
            } else {
                this.setState({[valueName + "Error"]: ""});
            }
        } 

        return newValue;
    }

    submitData = () => {
        if (this.state.nameError.length === 0) {
                this.props.onSubmit({
                    name: this.state.name,
                });
        } else {
            alert("Error, could not submit!")
        }
    }

    render () { return (
        <Card>
            <Card.Body className="align-content-center">
                <Form>
                    <Form.Group>
                        <Form.Label>Player Name</Form.Label>
                        <Form.Control 
                            id = "name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="Bob" 
                        />
                        <Form.Text className="text-muted">
                            {this.state.nameError}
                        </Form.Text>
                    </Form.Group>
                </Form>

                <Button onClick={this.submitData}>Create Player</Button>
            </Card.Body>
        </Card>
    );}
}

export default CreatePlayerForm;