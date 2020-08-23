import React from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
class LobbyBrowser extends React.Component {
    constructor () {
        super();

        this.state = {
            canvas: {
                
            }
        }
    }

    render () {return(<>
        <Container>
            <Row>
                <Col>
                    <canvas className="white-board"></canvas>
                </Col>
            </Row>
        </Container>
    </>)}
}

export default LobbyBrowser;