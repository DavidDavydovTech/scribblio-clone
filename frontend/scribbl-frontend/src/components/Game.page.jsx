import React from 'react';
import { Col, Card, InputGroup, FormControl, Button} from 'react-bootstrap';
import Host from '../resources/js/peerLogic';

class Game extends React.Component {
    constructor (props) {
        super(props);

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

        this.ctx.fillStyle = '#ffffff'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        let test = new Host({name: "david", avatar: {}})
    }

    // enableDrawing () {

    // }

    render () {return(<>
        <Col xs ={12}>
        
        </Col>
        <Col xs={"auto"} >
            <Card>
                <Card.Header className="d-flex w-100 align-self-center justify-content-between">
                    <i>Player's Name</i>
                    <b>_ i s _</b>
                    <i>Time Left: 13s</i>
                </Card.Header>
                <Card.Body className="p-0">
                    <canvas ref={this.state.canvasRef} className="white-board"></canvas>
                </Card.Body>
                <Card.Footer className="d-flex w-100 align-self-center justify-content-center">
                    Tools
                </Card.Footer>
            </Card>
        </Col>
        <Col xs={"auto"} className="d-flex align-items-stretch">
            <Card className="w-100">
                <Card.Header className="d-flex w-100 align-self-center justify-content-center">
                    <b>Player Chat</b>
                </Card.Header>
                <Card.Body className="chat-box">
                    test
                </Card.Body>
                <Card.Footer className="d-flex w-100 align-self-center">
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Input group example"
                            aria-label="Input group example"
                            aria-describedby="btnGroupAddon2"
                        />
                        <InputGroup.Append>
                            <Button>@</Button>
                            {/* <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text> */}
                        </InputGroup.Append>
                    </InputGroup>
                </Card.Footer>
            </Card>
        </Col>
    </>)}
}

export default Game;