import React from 'react';

import StepListStyle from './StepList.less';

var StepList =  React.createClass({
    render() {
        return (
            <div>
                <Slider></Slider>
                <div className={'content-box'}>
                    <p>推荐</p>
                    <RecommenList></RecommenList>
                </div>
                <div className={'content-box last'}>
                    <p>话题</p>
                    <ArticleList></ArticleList>
                </div>
            </div>
        );
    }
})

module.exports = StepList;
