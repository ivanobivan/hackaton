import React from 'react';
import {connect} from 'react-redux'

class Page404 extends React.Component {

    render(){
        const {name} = this.props.user;
        const {age,lol} = this.props.page;
        return <div>{name}, {age}, {lol}</div>
    }

}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        page: state.page
    }
}

export default connect(mapStateToProps)(Page404)
