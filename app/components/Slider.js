import React from 'react';

import SliderStyle from './Slider.less';

var Slider =  React.createClass({
    getInitialState() {
        return {
            imgList: [
                'http://7xl4qs.com1.z0.glb.clouddn.com/portal_top.png',
                'http://7xl4qs.com1.z0.glb.clouddn.com/portal_top.png',
                'http://7xl4qs.com1.z0.glb.clouddn.com/portal_top.png',
                'http://7xl4qs.com1.z0.glb.clouddn.com/portal_top.png'
            ],
            imgStyle: '?imageView2/5/w/300/h/140/q/1'
        }
    },
    createAutoSlider(el) {
        var self = this;
        var list  = el.getElementsByTagName('li');
        if (list  && !list.length) return;

        var sliderData = {};
            sliderData.el     = el;
            sliderData.auto   = this.props.auto || true;
            sliderData.time   = this.props.time || 2000;
            sliderData.count  = list.length;
            sliderData.swidth = list[0].clientWidth;
            sliderData.width  = sliderData.count * sliderData.swidth;
            sliderData.maxTranlate  = (sliderData.count - 1) * sliderData.swidth;
            sliderData.nowTranlate  = 0;

        el.addEventListener('touchstart', this.touchHandler.bind(this, sliderData));
        el.addEventListener('touchmove', this.touchHandler.bind(this, sliderData));
        el.addEventListener('touchend', this.touchHandler.bind(this, sliderData));

        if (sliderData.auto) self.autoSliderHandler(sliderData);
    },
    touchHandler(sliderData, event) {
        var self = this;
        var state = self.state;
        event.preventDefault();
        switch (event.type) {
            case 'touchstart':
                self.autoSliderHandler(sliderData, true);
                sliderData.el.style.transition = 'none';
                sliderData.startPot = event.changedTouches[0].pageX;
                sliderData.stratTranlate = sliderData.nowTranlate;
                break;
            case 'touchmove':
                var interval = (sliderData.startPot - event.changedTouches[0].pageX)/1.3;
                var shoudTranlate = sliderData.stratTranlate + interval;
                if (shoudTranlate < 0 || shoudTranlate > sliderData.maxTranlate) shoudTranlate -= interval/1.2;
                sliderData.el.style.transform = 'translateX(' + -shoudTranlate + 'px)';
                sliderData.nowTranlate = shoudTranlate;
                break;
            case 'touchend':
                var shouldBakcPot = Math.round((sliderData.nowTranlate / sliderData.swidth)) * sliderData.swidth;
                if (shouldBakcPot < 0) shouldBakcPot = 0;
                else if (shouldBakcPot > sliderData.maxTranlate) shouldBakcPot = sliderData.maxTranlate;
                sliderData.el.style.transition = '.5s';
                sliderData.el.style.transform = 'translateX(' + -shouldBakcPot + 'px)';
                sliderData.nowTranlate = shouldBakcPot;
                self.autoSliderHandler(sliderData);
                break;
            default:
                return;
        }
    },
    autoSliderHandler(sliderData, ifStop) {
        var self = this;
        var state = self.state;
        if (sliderData && !sliderData.auto) return;

        if (ifStop) {
            clearInterval(state.intervalId);
            return;
        }

        var intervalId = setInterval(function () {
            var translate = sliderData.nowTranlate;
            if (translate + sliderData.swidth >= sliderData.width) translate = 0;
            else translate += sliderData.swidth;

            sliderData.nowTranlate = translate;
            sliderData.el.style.transform = 'translateX(' + -sliderData.nowTranlate + 'px)';
        }, sliderData.time);

        self.setState({ intervalId: intervalId });
    },
    componentDidMount() {
        var self = this;
        var refs = self.refs;

        self.createAutoSlider(refs.sliderBox);
    },
    componentWillUnmount() {
        var self = this;
        var refs = self.refs;

        refs.sliderBox.removeEventListener('touchstart', this.touchHandler);
        refs.sliderBox.removeEventListener('touchmove', this.touchHandler);
        refs.sliderBox.removeEventListener('touchend', this.touchHandler);

        self.autoSliderHandler(null, true);
    },
    render() {
        var state = this.state;
        var self = this;

        var imgListDom = state.imgList.map(function(item, i){
            return <li className={"item"}><img src={item + state.imgStyle}></img></li>
        });

        return (
                <ul className={"slider"} ref="sliderBox">{imgListDom}</ul>
        );
    }
})

module.exports = Slider;
