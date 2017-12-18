import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

export default class Home extends React.Component {

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={10} md={10}><LeftSide/></Col>
                    <Col xs={2} md={2}><RightSide/></Col>
                </Row>
            </Grid>
        );
    }
}
