import React from 'react';
import {Grid,Container,Row,Col} from 'reactstrap'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

export default class Home extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6">
                        <LeftSide/>
                    </Col>
                    <Col xs="6">
                        <RightSide/>
                    </Col>
                </Row>
            </Container>
            /*<div className='homeDestination'>
                <LeftSide/>
                <RightSide/>
            </div>*/
        );
    }
}
