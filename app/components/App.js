import React from 'react'

import Header from './Header'
import Foot from './Foot'

var App =  React.createClass({
    render() {
        return (
            <div>
                <Header></Header>
                {this.props.children}
                <Foot></Foot>
            </div>
        )
    }
})

module.exports = App;
