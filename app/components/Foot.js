import React from 'react'
import { browserHistory } from 'react-router';

import FootStyle from './Foot.less'

var Foot =  React.createClass({
    getInitialState() {
        return {
            linkList: [
                { title: '首页', iconUrl: '/img/home.png', link: '/'},
                { title: '六艺十式', iconUrl: '/img/body.png', link: '/move'}
            ]
        }
    },
    navClickHandler(linkUrl) {

        var currentPath = browserHistory.getCurrentLocation().pathname;
        if (currentPath != linkUrl) {
            browserHistory.push(linkUrl);
        }
    },
    render() {
        var state = this.state;
        var self = this;

        var navDom = state.linkList.map(function(item, i) {
            return <a className={"item"} onClick={self.navClickHandler.bind(self, item.link)}><img className={'icon'} src={item.iconUrl}></img><p>{item.title}</p></a>
        });

        return (
            <footer>
                {navDom}
            </footer>
        )
    }
})

module.exports = Foot;
