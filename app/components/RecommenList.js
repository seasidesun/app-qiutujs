import React from 'react';

import RecommenListStyle from './RecommenList.less';

var RecommenList =  React.createClass({
    getInitialState() {
        return {
            newsList: [
                {
                    title: '# 我的运动日记 #',
                    des: '你要做的就是比昨天更强大',
                    backImg: 'https://staticssl.keepcdn.com/2017/05/05/16/1493974275716_750x340.jpg?imageMogr2'
                },
                {
                    title: '# 我的运动日记 #',
                    des: '你要做的就是比昨天更强大',
                    backImg: 'https://staticssl.keepcdn.com/2017/05/05/16/1493974275716_750x340.jpg?imageMogr2'
                },
                {
                    title: '# 我的运动日记 #',
                    des: '你要做的就是比昨天更强大',
                    backImg: 'https://staticssl.keepcdn.com/2017/05/05/16/1493974275716_750x340.jpg?imageMogr2'
                },
                {
                    title: '# 我的运动日记 #',
                    des: '你要做的就是比昨天更强大',
                    backImg: 'https://staticssl.keepcdn.com/2017/05/05/16/1493974275716_750x340.jpg?imageMogr2'
                }
            ]
        }
    },
    render() {
        var state = this.state;

        var newsListDom = state.newsList.map(function (item) {
            var backgroundImage = 'url(' + item.backImg + ')';
            return (
                <li style={{backgroundImage: backgroundImage}}>
                    <header><h2>{item.title}</h2><p>{item.des}</p></header>
                </li>
            );
        })

        return (
            <ul className={'news-scroll content'}>
                {newsListDom}
            </ul>
        );
    }
})

module.exports = RecommenList;
