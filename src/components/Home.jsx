import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap'
import ContractsSide from './ContractsSide'
import NavigationLeftSide from './NavigationLeftSide'

export default class Home extends React.Component {

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={10} md={10}><ContractsSide/></Col>
                    <Col xs={2} md={2}><NavigationLeftSide/></Col>
                </Row>
            </Grid>
        );
    }
}
