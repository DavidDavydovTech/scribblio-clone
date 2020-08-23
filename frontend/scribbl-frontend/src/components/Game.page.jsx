import React from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
class LobbyBrowser extends React.Component {
    constructor () {
        super();

        this.state = {
            canvasRef:  React.createRef(),
            canvasContext: null,
        }
    }

    componentDidMount () {
        let context = this.state.canvasRef.current.getContext('2d');
        context.fillStyle = '#000000'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        this.setState({canvasContext: context})
    }

    render () {return(<>
        <Container>
            <Row>
                <Col>
                    <canvas ref={this.state.canvasRef} className="white-board"></canvas>
                </Col>
            </Row>
        </Container>
    </>)}
}

export default LobbyBrowser;