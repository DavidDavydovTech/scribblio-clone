import React from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
class CreatePlayer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            name: "",
        }
    }

    prepareLobby = () => {
        console.log(this.props)
        this.props.onSubmit(this.state.name);
    }   

    render () { return (
        <Card>
            <Card.Body className="align-content-center">
                <Form>
                    <Form.Group controlId="playerInfo">
                        <Form.Label>Player Name</Form.Label>
                        <Form.Control type="username" placeholder="SuperMan67" />
                    </Form.Group>
                </Form>

                <Button onClick={this.prepareLobby}>click me</Button>
            </Card.Body>
        </Card>
    );}
}

export default CreatePlayer;