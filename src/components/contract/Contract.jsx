import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap'
import Votes from './Votes'
import ContractBody from './ContractBody'


export default class Contracts extends React.Component {

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={1} md={1}><Votes/></Col>
                    <Col xs={11} md={11}><ContractBody/></Col>
                </Row>
            </Grid>
        )
    }
}
