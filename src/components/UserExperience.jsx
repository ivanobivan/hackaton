import React from 'react';
import {Panel} from 'react-bootstrap'

export default class UserExperience extends React.Component {

    render(){
        return (
            <Panel header='Your suggestions'>
                <i class="fa fa-user-circle fa-2x"></i>
                <span>Rybinsk Administration</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod</span>
            </Panel>
        )
    }
}
