import React from 'react';
import Web3 from 'web3'

export default class App extends React.Component {
    render() {
        const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        return <div>{web3.eth.accounts.map((elem) => elem + <br/>)}</div>
    }
}