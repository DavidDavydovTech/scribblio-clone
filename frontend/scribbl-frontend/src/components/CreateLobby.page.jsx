import React from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import CreatePlayer from './CreatePlayerForm';
import CreateGameForm from './CreateGameForm';

class CreateLobbyPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            playerObject: null,
            gameObject: null
        }
    }

    updatePlayerObject = (object) => {
        this.setState({playerObject: object});
    }

    updateGameObject = (object) => {
        this.setState({gameObject: object});
    }

    render () { return (<>
        <Col xs={"auto"}>
            <h1>Create a Lobby!</h1>
        </Col>
        
        <Col xs={10}>
            <CreatePlayer onSubmit={this.updatePlayerObject}/>
            <CreateGameForm onSubmit={this.updateGameObject}/>
        </Col>

        <Col xs={"auto"}>
            <Button size="lg">
                Copy Link!
            </Button>
        </Col>
    </>) }
}

export default CreateLobbyPage;