import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

class CreatePlayer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            refs: {
                name: React.createRef()
            },
        }
    }

    preparePlayerObject = () => {
        let name = this.state.refs.name.current.value;
        switch (true) {
            case typeof name === 'number':
                name.toString();
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
                    <Form.Group controlId="playerInfo">
                        <Form.Label>Player Name</Form.Label>
                        <Form.Control ref={this.state.refs.name} type="username" placeholder="SuperMan67" />
                    </Form.Group>
                </Form>

                <Button onClick={this.preparePlayerObject}>click me</Button>
            </Card.Body>
        </Card>
    );}
}

export default CreatePlayer;