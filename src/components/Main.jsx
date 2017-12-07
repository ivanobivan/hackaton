import React from 'react';
import {Switch, Route} from 'react-router-dom'
import PersonalArea from './PersonalArea'
import Page404 from './Page404'
import Home from './Home'

export default class Main extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/lk' component={PersonalArea}/>
                    <Route path='/404' component={Page404}/>
                </Switch>
            </div>
        )
    }
}
