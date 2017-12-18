import React from 'react';
import {connect} from 'react-redux'
import {changeName} from '../actions/PageActions'
import {Panel} from 'react-bootstrap'
import UserExperience from './UserExperience'

class NavigationLeftSide extends React.Component {

    render() {
        const {name, lol} = this.props.page;
        return (
            <div className='rightSide'>
                {/*{name}<br/>
                {lol.length}<br/>
                <button onClick={this.props.onClick}>Click</button>*/}
                <UserExperience/>
                <UserExperience/>
                <UserExperience/>
                <UserExperience/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(changeName('KEK'))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLeftSide)