import React from 'react';
import { Row, Col } from 'react-bootstrap';
class LobbyBrowser extends React.Component {
    constructor () {
        super();
    }

    render () { return (<>
        <Row>
            <Col>
                <h1>Create a Lobby!</h1>
            </Col>
        </Row>
    </> ) }
}

export default LobbyBrowser;