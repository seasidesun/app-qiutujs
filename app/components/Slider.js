import React from 'react'

var Slider =  React.createClass({
    getInitialState() {
        return {
            imgList: ['http://7xl4qs.com1.z0.glb.clouddn.com/portal_top.png'],
            imgStyle: '?imageView2/5/w/300/h/140/q/1',
        }
    },
    render() {
        var state = this.state;
        var self = this;

        var imgListDom = state.imgList.map(function(item, i){
            return <li className={"item"}><img src={item + state.imgStyle}></img></li>
        });

        return (
            <div className={"slider"}>
                <div className={"wrapper"}>
                {imgListDom}
                </div>
            </div>
        )
    }
})

module.exports = Slider;
