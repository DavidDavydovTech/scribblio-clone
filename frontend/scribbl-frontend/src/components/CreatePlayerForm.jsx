import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

class CreatePlayerForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            name: "",
            nameError: ""
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    checkInput = (valueName) => {
        let value = this.state[valueName];

        if (valueName === "name") {
            switch (true) {
                case value.length < 3:
                    // TODO: Add error handling for this form.
                case value.length > 12:
                    // TODO: Add error handling for this form.
                // TODO: Add a check to see if user has a curse word in their name.
            }
        }
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
                            id = "name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            type="username" 
                            placeholder="we" 
                        />
                        <Form.Text className="text-muted">
                            {this.nameError}
                        </Form.Text>
                    </Form.Group>
                </Form>

                <Button onClick={this.submitData}>click me</Button>
            </Card.Body>
        </Card>
    );}
}

export default CreatePlayerForm;