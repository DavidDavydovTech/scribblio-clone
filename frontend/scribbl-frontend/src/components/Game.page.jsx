import React from 'react';
import { Col, Card, InputGroup, FormControl, Button, ButtonGroup} from 'react-bootstrap';
import Host from '../resources/js/peerLogic';

class Game extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            canvasRef:  React.createRef(),
            colors: [ // https://lospec.com/palette-list/endesga-8
                "1b1c33",
                "d32734",
                "da7d22",
                "e6da29",
                "28c641",
                "2d93dd",
                "7b53ad",
            ],
            canvasSize: {
                x: window.innerWidth*0.5,
                y: window.innerWidth*0.375
            }
        }

        window.addEventListener('resize', () => {
            this.setState({
                canvasSize: {
                    x: window.innerWidth*0.5,
                    y: window.innerWidth*0.375
                }})
        });
    }

    
    componentDidMount () {
        this.initalizeCanvas();
    }

    initalizeCanvas () {
        this.ctx = this.state.canvasRef.current.getContext('2d');
        this.el = this.state.canvasRef.current;

        this.ctx.fillStyle = '#ffffff'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        let isDrawing = false;
        let points = [];
        this.ctx.strokeStyle = "#1b1c33";
        this.ctx.fillStyle = '#ffffff'
        
        this.el.onmousedown = (e) => {
            isDrawing = true;
            points.push({ x: e.clientX, y: e.clientY });
            console.log("down")
        }

        this.el.onmousemove = (e) => {
            if (isDrawing) {
                points.push({ x: e.clientX, y: e.clientY });

                let boundingBox = this.el.getBoundingClientRect();
                this.ctx.beginPath();
                points.forEach((value, i) => {
                    if (i === 0) {
                        this.ctx.moveTo(
                            value.x - boundingBox.x, 
                            value.y - boundingBox.y, 
                        );
                    } else {
                        this.ctx.lineTo(
                            value.x - boundingBox.x, 
                            value.y - boundingBox.y, 
                        );
                    }
                })
                this.ctx.stroke();
                
            }
        }

        this.el.onmouseup = (e) => {
            isDrawing = false;
            points = [];
        }
        // let test = new Host({name: "david", avatar: {}})
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
                    <canvas 
                    ref={this.state.canvasRef} 
                    className="white-board"
                    width={this.state.canvasSize.x} 
                    height={this.state.canvasSize.y}
                    ></canvas>
                </Card.Body>
                
                <Card.Footer className="d-flex w-100 align-self-center justify-content-center">
                    <Col xs={"auto"}>
                        <ButtonGroup>
                            {this.state.colors.map((color) => {
                                return <Button
                                style={{
                                    backgroundColor: `#${color}`,
                                    borderColor: `#${color}`, //TODO: install 'npm i color' and make these buttons pop out like the rest!
                                    color: `#${color}`
                                }}>
                                    @
                                </Button>
                            })}
                        </ButtonGroup>
                    </Col>

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
                            <Button>+</Button>
                            {/* <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text> */}
                        </InputGroup.Append>
                    </InputGroup>
                </Card.Footer>
            </Card>
        </Col>
    </>)}
}

export default Game;