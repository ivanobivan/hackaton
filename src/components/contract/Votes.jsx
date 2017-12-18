import React from 'react';

export default class Votes extends React.Component {

    render() {
        return (
            <div className='votesDestination'>
                <i class="fa fa-arrow-up fa-2x arrowUp"></i><br/>
                <span className='quantityOfVotes'>5</span><br/>
                <i class="fa fa-arrow-down fa-2x arrowDown"></i>
            </div>
        )
    }
}
