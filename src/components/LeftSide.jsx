import React from 'react';
import Web3 from 'web3'
import {Grid,Row,Col} from 'react-bootstrap'
import Contract from './contract/Contract'

export default class ContractsSide extends React.Component {

    web3 = undefined;
    abi = null;
    TestContract = null;

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            firstCarousel: false
        };
    }

    render() {
        return (
            <div className='contractBody'>
                <Contract/>
            </div>
        )
    }
}
