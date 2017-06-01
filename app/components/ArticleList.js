import React from 'react'

import ArticleListStyle from './ArticleList.less'

var ArticleList =  React.createClass({
    getInitialState() {
        return {
            newsList: [
                {
                    des: '一件事，你若不想做，你会找出千万个理由拒绝；你若想做，你会绞尽脑汁去想办法。做与不做，不在于你行与不行，而在于你想不想。',
                    backImg: 'http://static1.keepcdn.com/picture/2017/05/14/08/926952bb0d0f7f5a85d55707295e83290bea474a_800x800.jpg?imageMogr2/thumbnail/306x/quality/95',
                    star: 21,
                    hasSee: 90
                },
                {
                    des: '一件事，你若不想做，你会找出千万个理由拒绝；你若想做，你会绞尽脑汁去想办法。做与不做，不在于你行与不行，而在于你想不想。',
                    backImg: 'http://static1.keepcdn.com/picture/2017/05/14/08/926952bb0d0f7f5a85d55707295e83290bea474a_800x800.jpg?imageMogr2/thumbnail/306x/quality/95',
                    star: 21,
                    hasSee: 90
                },
                {
                    des: '一件事，你若不想做，你会找出千万个理由拒绝；你若想做，你会绞尽脑汁去想办法。做与不做，不在于你行与不行，而在于你想不想。',
                    backImg: 'http://static1.keepcdn.com/picture/2017/05/14/08/926952bb0d0f7f5a85d55707295e83290bea474a_800x800.jpg?imageMogr2/thumbnail/306x/quality/95',
                    star: 21,
                    hasSee: 90
                },
                {
                    des: '一件事，你若不想做，你会找出千万个理由拒绝；你若想做，你会绞尽脑汁去想办法。做与不做，不在于你行与不行，而在于你想不想。',
                    backImg: 'http://static1.keepcdn.com/picture/2017/05/14/08/926952bb0d0f7f5a85d55707295e83290bea474a_800x800.jpg?imageMogr2/thumbnail/306x/quality/95',
                    star: 21,
                    hasSee: 90
                },
                {
                    des: '一件事，你若不想做，你会找出千万个理由拒绝；你若想做，你会绞尽脑汁去想办法。做与不做，不在于你行与不行，而在于你想不想。',
                    backImg: 'http://static1.keepcdn.com/picture/2017/05/14/08/926952bb0d0f7f5a85d55707295e83290bea474a_800x800.jpg?imageMogr2/thumbnail/306x/quality/95',
                    star: 21,
                    hasSee: 90
                },
                {
                    des: '一件事，你若不想做，你会找出千万个理由拒绝；你若想做，你会绞尽脑汁去想办法。做与不做，不在于你行与不行，而在于你想不想。',
                    backImg: 'http://static1.keepcdn.com/picture/2017/05/14/08/926952bb0d0f7f5a85d55707295e83290bea474a_800x800.jpg?imageMogr2/thumbnail/306x/quality/95',
                    star: 21,
                    hasSee: 90
                },
                {
                    des: '一件事，你若不想做，你会找出千万个理由拒绝；你若想做，你会绞尽脑汁去想办法。做与不做，不在于你行与不行，而在于你想不想。',
                    backImg: 'http://static1.keepcdn.com/picture/2017/05/14/08/926952bb0d0f7f5a85d55707295e83290bea474a_800x800.jpg?imageMogr2/thumbnail/306x/quality/95',
                    star: 21,
                    hasSee: 90
                }
            ]
        }
    },
    render() {
        var state = this.state;

        var listDom = state.newsList.map(function (item) {
            var backgroundImage = 'url(' + item.backImg + ')';
            return (
                <li >
                    <div className='bg' style={{backgroundImage: backgroundImage}}></div>
                    <p>{item.des}</p>
                    {/*<div className='tag'><span>{item.star}</span><span>{item.hasSee}</span></div>*/}
                </li>
            )
        });
        return (
            <ul className={'news-list content'}>
                {listDom}
            </ul>
        )
    }
})

module.exports = ArticleList;
