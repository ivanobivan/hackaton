import React from 'react';
import Web3 from 'web3'

export default class App extends React.Component {
    web3 = undefined;
    abi = null;
    contract = null;
    constructor(props) {
        super(props);
        if (typeof this.web3 !== 'undefined') {
            this.web3 = new Web3(this.web3.currentProvider);
        } else {
            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        this.abi = ABI;
        this.contract = this.web3.eth.contract(this.abi);
        console.log(this.contract);
        let contracter = contract(TestContract);
        contracter.setProvider(this.web3);
        console.log(contracter);
        contracter.deployed().then((instance) => {
            console.log(instance)
        });
        /*let TestContract = contract({
            abi: ABI,
            unlinked_binary: this.contract
        });

        TestContract.deployed().then(function(instance) {
            console.log(instance)
        }).then(function(result) {
            console.log(result)
        });*/


        //========================//

        //console.log(this.contract.getData(''));
        //this.web3.eth.defaultAccount = this.web3.eth.accounts[0];
        //this.web3.personal.unlockAccount(this.web3.eth.defaultAccount,"123", 15000);
        //const api = JSON.parse('[ { "constant": false, "inputs": [ { "name": "key", "type": "string" }, { "name": "value", "type": "string" } ], "name": "setData", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "key", "type": "string" } ], "name": "getData", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ]')
        //let TestContract = this.web3.eth.contract(api);
        //const test = TestContract.at('0xC522f3beC3c924257e8E5c38d0e34C2EbA590164');
        //console.log(test);
        //test.setData("lol","kek");
        //console.log(test.getData("lol"));
    }
    /*componentWillMount() {
        let web3 = window.web3;
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        this.setState({web3: web3});
        this.instantiateContract();
    }*/
    componentDidMount() {

    }

    connectContract = () => {

    };
    /*sendTransaction(key, value) {
        console.log('Вызов тразнакционного метода');
        this.state.web3.personal.unlockAccount(this.state.web3.eth.coinbase, '123', 1000);
        this.state.eth.simpleContractInstance.setBasicData.sendTransaction(key, value,
            (err, result) => {
                console.log('Функция setBasicData выполнилась', err, result);
                console.log('Пробуем сразу получить данные из контракта методом, getBasicData',
                    this.state.eth.simpleContractInstance.getBasicData(key));
            });
    }*/

    /**
     * Собирает разную информацию из сети и сохраняет в state
     * Можно запускать когда мы захотим обновить информацию об аккаунте
     */
    /*readState(simpleContractInstance) {
        let web3 = this.state.web3;
        let eth = {};
        eth.accounts = web3.eth.accounts;
        eth.coinbase = web3.eth.coinbase;
        eth.balance = web3.eth.getBalance(web3.eth.coinbase);
        eth.simpleContractInstance = simpleContractInstance ? simpleContractInstance : this.state.eth.simpleContractInstance;
        eth.owner = simpleContractInstance.getOwner();
        eth.address = simpleContractInstance.address;
        this.setState({eth: eth});
    }*/

    /**
     * Производим первоначальную настроку подключения к контракту (один раз при запуске)
     */
    /*instantiateContract() {
        console.log('===== can instantiate contract =====');

        var web3 = this.state.web3;
        console.log('Все аккауты', web3.eth.accounts);
        console.log('Coinbase and Balance', web3.eth.coinbase, web3.eth.getBalance(web3.eth.coinbase));

        //api контракта
        let api = JSON.parse('[{"constant":false,"inputs":[{"name":"key","type":"string"},' +
            '{"name":"value","type":"string"}],"name":"setBasicData","outputs":[],"payable"' +
            ':false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":' +
            '[{"name":"arg","type":"string"}],"name":"getBasicData","outputs":[{"name":"","type":"string"}],' +
            '"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":' +
            '[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability"' +
            ':"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable",' +
            '"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"string"}' +
            ',{"indexed":false,"name":"value","type":"string"}],"name":"BasicDataEvent","type":"event"}]');
        let contractAdress = '0xe7Ca074b6f7c49fC67f99BFAEcB0E0E87F8DD130';
        let simpleContractInterface = web3.eth.contract(api);
        simpleContractInterface.eth.defaultAccount = simpleContractInterface.eth.coinbase;
        console.log('SimpleContractInterface', simpleContractInterface);
        let simpleContractInstance = simpleContractInterface.at(contractAdress);
        console.log('SimpleContractInsctance', simpleContractInstance);
        this.readState(simpleContractInstance);
        //Обработчик события
        simpleContractInstance.BasicDataEvent((error, result) => {
            if (!error) {
                console.log('Транзакция попала в блок', result);
                this.setState({contract: {key: result.args.key, value: result.args.value}});
                this.changeGetHandler();
            } else {
                console.log('Ошибка при обработке транзакции', error);
            }
        });

    }*/

    /* clickHandler() {
         this.sendTransaction(this.refs.keyInput.value, this.refs.valueInput.value);
     }

     changeGetHandler() {
         var value = this.state.eth.simpleContractInstance.getBasicData(this.refs.keyGetInput.value);
         this.setState({value: value});
     }*/

    render() {
        return (
            <div>Super {this.web3.eth.accounts[0]}</div>
            /*<div className='App'>
                <Header account={this.state.eth.coinbase} balance={this.state.eth.balance}/>
                <div className='App-intro'>
                    <div>Адрес владельца контракта:
                        {this.state.eth.owner ? this.state.eth.owner : '-'}
                    </div>
                    <div>Адрес контракта:
                        {this.state.eth.address ? this.state.eth.address : '-'}
                    </div>
                    <div className="App-title">
                        Функции контракта
                    </div>
                    <div>
                        Ключ: <input type="text" ref="keyInput"/>
                        Значение: <input type="text" ref="valueInput"/>
                        <a href="#" onClick={this.clickHandler.bind(this)}>Послать транзакцию</a>
                    </div>
                    <div>
                        Получить значение по ключу:
                        <input type="text"
                               ref="keyGetInput"
                               onChange={this.changeGetHandler.bind(this)}/>
                        {this.state.value}
                    </div>
                    <SystemMessage contract={this.state.contract}/>
                </div>
            </div>*/
        );
    }
}
