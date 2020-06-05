import React from 'react'
import back from '../src/back.jpeg'

function Default() {
    return (
        <div className="left-side">
            <h1 className="h1">Welcome to pilltop app</h1>
            <p className="paragraph">An app that helps you keep track of your drug prescriptions</p>
            <img src={back} alt="" className="back" />
        </div>
    )
}

export default Default
