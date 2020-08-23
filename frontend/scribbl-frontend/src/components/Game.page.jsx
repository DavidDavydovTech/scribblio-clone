import React from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
class LobbyBrowser extends React.Component {
    constructor () {
        super();

        this.state = {
            canvasRef:  React.createRef(),
            ctx: null,
            el: null,
        }
    }

    componentDidMount () {
        this.initalizeCanvas();
    }

    initalizeCanvas () {
        let context = this.state.canvasRef.current.getContext('2d');
        let element = this.state.canvasRef.current;
        this.setState({
            ctx: context, 
            el: element
        });
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