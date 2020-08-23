import React from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import CreatePlayer from './CreatePlayer';

class createLobby extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            playerObject: null
        }
    }

    updatePlayerObject = (object) => {
        console.log(object)
        this.setState({playerObject: object});
        console.log(this.state.playerObject)
    }

    render () { return (<Row>
        <Col>
            <h1>Create a Lobby!</h1>
            <CreatePlayer onSubmit={this.updatePlayerObject}/>
        </Col>
    </Row>) }
}

export default createLobby;