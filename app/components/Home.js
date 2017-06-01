import React from 'react'

import Slider from './Slider'
import RecommendedNews from './RecommendedNews'
import ArticleList from './ArticleList'
import HomeStyle from './Home.less'

var Home =  React.createClass({
    render() {
        return (
            <div>
                <Slider></Slider>
                <div className={'news-box'}>
                    <p>推荐</p>
                    <RecommendedNews></RecommendedNews>
                </div>
                <div className={'news-box last'}>
                    <p>话题</p>
                    <ArticleList></ArticleList>
                </div>
            </div>
        )
    }
})

module.exports = Home;
