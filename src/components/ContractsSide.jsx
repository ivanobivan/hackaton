import React from 'react';
import Web3 from 'web3'
import {Well,Button,Panel} from 'react-bootstrap';
export default class ContractsSide extends React.Component {

    web3 = undefined;
    abi = null;
    TestContract = null;
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        };
        if (typeof this.web3 !== 'undefined') {
            this.web3 = new Web3(this.web3.currentProvider);
        } else {
            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        this.abi = [ { "constant": false, "inputs": [ { "name": "key", "type": "string" }, { "name": "value", "type": "string" } ], "name": "setData", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "key", "type": "string" } ], "name": "getData", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ];
        this.TestContract = this.web3.eth.contract(this.abi);
        console.log(this.TestContract);
        this.web3.eth.defaultAccount = this.web3.eth.accounts[0];
        const test = this.TestContract.at('0xC522f3beC3c924257e8E5c38d0e34C2EbA590164');
        console.log(test);
        this.web3.personal.unlockAccount(this.web3.eth.defaultAccount,"123", 1000);
        test.setData("lol","KEEEEEEEEEEEEEEEEEEEEEEEEEEK")
        console.log(test.getData("lol"));
    }

    render(){
        const picStyle = {width:"400px",height:"400px"};
        return (
            <Well className='headerOfTheWell'>Repare of the main city wall<br/>
                <img src='/src/pic/wall.jpg' alt='City Wall' style={picStyle}/>{'  '}
                <img src='/src/pic/wall2.jpg' alt='City Wall' style={picStyle}/><br/>
                <span onClick={() => this.setState({ open: !this.state.open })}>
                    Show More...
                </span>
                <Panel collapsible expanded={this.state.open}>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Panel>
            </Well>
        )
    }
}
