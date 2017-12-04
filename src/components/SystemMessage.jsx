import React, { Component } from 'react';

/**
 * Выводит информацию в случае обнаружения новой транзакции
 */
export default class SystemMessage extends Component{
    render(){
        return(
            <div>
                {this.props.contract
                    ? <h2>Обнаружена транзакция:
                        ({this.props.contract.key},
                        {this.props.contract.value}) </h2>
                    : ""}
            </div>
        );
    }
}