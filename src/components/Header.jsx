import React, {Component} from 'react';

export default class Header extends Component{
    render(){
        return (
            <div className='App-header'>
                <div className='App-title'>
                    Текущий аккаунт майнинга: {this.props.account}
                    <br/>
                    Баланс:
                    {this.props.balance
                        ? <span> {this.props.balance.divToInt(1e18).toString()} Eth</span>
                        : '-'}
                </div>
            </div>
        );
    }
}
