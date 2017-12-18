import React from 'react';
import {connect} from 'react-redux'
import {changeName} from '../actions/PageActions'

class NavigationLeftSide extends React.Component {

    render() {
        const {name, lol} = this.props.page;
        return (
            <div>
                {name}<br/>
                {lol.length}<br/>
                <button onClick={this.props.onClick}>Click</button>
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