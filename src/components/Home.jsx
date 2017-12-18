import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

export default class Home extends React.Component {

    render() {
        return (
           <div className='homeDestination'>
               <LeftSide/>
               <RightSide/>
           </div>
        );
    }
}
