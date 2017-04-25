import React from 'react'

import Header from './Header'
import Slider from './Slider'
import MovementsList from './MovementsList'

var App =  React.createClass({
    render() {
        return (
            <div>
                <Header></Header>
                <Slider></Slider>
                <MovementsList></MovementsList>
            </div>
        )
    }
})

module.exports = App;
