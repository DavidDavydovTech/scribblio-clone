import React from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import CreatePlayer from './CreatePlayerForm';
// import CreateLobby from './CreateLobby';

class CreateLobbyPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            playerObject: null
        }
    }

    updatePlayerObject = (object) => {
        console.log(object)
        this.setState({playerObject: object});
    }

    render () { return (<Row>
        <Col>
            <h1>Create a Lobby!</h1>
            <CreatePlayer onSubmit={this.updatePlayerObject}/>
            {/* <CreateLobby/> */}
        </Col>
    </Row>) }
}

export default CreateLobbyPage;