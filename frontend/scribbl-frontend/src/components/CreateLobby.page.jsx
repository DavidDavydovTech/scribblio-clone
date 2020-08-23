import React from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
class createLobby extends React.Component {
    constructor () {
        super();
    }



    render () { return (<Row>
        <Col>
            <h1>Create a Lobby!</h1>
            <Card>
                <Card.Body className="align-content-center">
                    <Form>
                        <Form.Group controlId="playerInfo">
                            <Form.Label>Player Name</Form.Label>
                            <Form.Control type="email" placeholder="SuperMan67" />
                        </Form.Group>
                    </Form>

                    <Button onClick={}>click me</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>) }
}

export default createLobby;