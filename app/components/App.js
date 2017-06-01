import React from 'react'

import Header from './Header'
import Foot from './Foot'

import AppStyle from './App.less'

var App =  React.createClass({
    getInitialState() {
        return {
            isWechat: this.ifWechat()
        }
    },
    ifWechat() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.match(/microMessenger/i)? true: false;
    },
    render() {
        var state = this.state;

        return (
            <div>
                {!state.isWechat && (<div className={'part'}><Header></Header></div>)}
                {this.props.children}
                <Foot></Foot>
            </div>
        )
    }
})

module.exports = App;
