import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

let randomName = require('random-name');

class CreatePlayerForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            cardGlow: "",
            name: `${randomName.first()}`,
            nameError: ""
        }
    }

    handleChange = (event) => {
        let newValue = this.checkInput(event.target.id, event.target.value)
        this.setState({[event.target.id]: newValue});
        this.submitData();
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
            // TODO: Fix this lagging behind...
            //this.setState({cardGlow: "success"});
        } else {
            // TODO: Fix needing to call this twice to update card...
            //this.setState({cardGlow: ""})
        }
    }

    render () { return (<>
        <Card border={this.state.cardGlow} className="m-4">
            <Card.Header className="text-center">
                Lobby Options
            </Card.Header>
            <Card.Body className="align-content-center">
                <Form>
                    <Form.Group>
                        <Form.Label>Player Name</Form.Label>
                        <Form.Control 
                            id = "name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder={randomName.first()}
                            autoComplete="off"
                        />
                        <Form.Text className="text-muted">
                            {this.state.nameError}
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </>);}
}

export default CreatePlayerForm;