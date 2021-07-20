import React from 'react'

export default function ridescard(props) {
    

    const time = 0;

    return (
        <div>
            <h1>{props.zone.name}</h1>
            <div>{props.name}</div>
            <div className="time">
                <img src={require('./img/ico-g-03.svg').default} alt="" />
                <div>{time}</div>
            </div>
            <div className="left-tickets">
                <img src={require('./img/ico-g-01.svg').default} alt="" />
                <div>{props.remaining_tickets}</div>
            </div>

        </div>
    )
}
