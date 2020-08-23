import React from 'react';
import {Table} from 'react-bootstrap';
class LobbyBrowser extends React.Component {
    constructor () {
        super();
    }

    render () {return(<>
        <h1>hi</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Players</th>
                <th>Lobby</th>
                <th>Password?</th>
                <th>Host</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>(1/8)</td>
                <td>Hack Reactor!</td>
                <td>No</td>
                <td>Amarican Idi</td>
                </tr>
            </tbody>
        </Table>
    </>)}
}

export default LobbyBrowser;