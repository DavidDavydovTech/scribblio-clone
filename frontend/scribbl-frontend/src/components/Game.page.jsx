import React from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import Peer from 'peerjs';

class Game extends React.Component {
    constructor () {
        super();

        this.state = {
            canvasRef:  React.createRef(),
        }
    }

    componentDidMount () {
        this.initalizeCanvas();
    }

    initalizeCanvas () {
        this.ctx = this.state.canvasRef.current.getContext('2d');
        this.el = this.state.canvasRef.current;

        this.ctx.fillStyle = '#f0f0f0'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    // enableDrawing () {

    // }

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

export default Game;