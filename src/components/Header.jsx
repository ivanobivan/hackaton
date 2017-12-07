import React from 'react';
import {Link} from 'react-router-dom'

export default class Header extends React.Component {

    render() {
        return (
            <div>
                    <button><Link to='/'>Home</Link></button>
                    <button><Link to='/404'>404</Link></button>
                    <button><Link to='/lk'>Personal Area</Link></button>
            </div>
        )
    }
}
