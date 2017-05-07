import React from 'react'

var Foot =  React.createClass({
    getInitialState() {
        return {
            linkList: [
                { title: '首页', iconUrl: '/img/home.png'},
                { title: '六艺十式', iconUrl: '/img/home.png'}
            ]
        }
    },
    render() {
        var state = this.state;
        var self = this;

        var navDom = state.linkList.map(function(item, i) {
            return <a className={"item"}><img className={'icon'} src={item.iconUrl}></img><p>{item.title}</p></a>
        });

        return (
            <footer>
                {navDom}
            </footer>
        )
    }
})

module.exports = Foot;
