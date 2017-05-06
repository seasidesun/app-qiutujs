import React from 'react'

import Header from './Header'
import Slider from './Slider'
import MovementsList from './MovementsList'
import Foot from './Foot'

var App =  React.createClass({
    render() {
        return (
            <div>
                <Header></Header>
                <Slider></Slider>
                <MovementsList></MovementsList>
                <Foot></Foot>
            </div>
        )
    }
})

module.exports = App;
