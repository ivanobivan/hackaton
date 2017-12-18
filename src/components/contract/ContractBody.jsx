import React from 'react';
import HashTags from './HashTags'
import ContractHeader from './ContractHeader'
import ContractText from './ContractText'
import ShowMore from './ShowMore'
import OwnerContract from './OwnerContract'

export default class ContractBody extends React.Component {

    render(){
        return (
            <div>
                <ContractHeader/>
                <ContractText/>
                <HashTags/>
                <OwnerContract/>
                <ShowMore/>
            </div>
        )
    }
}
