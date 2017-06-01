import React from 'react';

import MovementsPageStyle from './MovementsPage.less';

var MovementsPage =  React.createClass({
    getInitialState() {
        return {
            movementsList: [
            {
              "name": "俯卧撑",
              "nameEn": "Push Up",
              "muscleGroup": "胸肌（胸大肌和胸小肌）、三角肌前束、肱三头肌",
              "backgroundImgUrl": "steps_1_10_1.png",
              "slogan": "铠甲般的胸肌与钢铁般的肱三头肌",
              "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_pushup.png",
              "backImg": "https://staticssl.keepcdn.com/2017/05/05/16/1493974275716_750x340.jpg?imageMogr2"

            },
            {
              "name": "深蹲",
              "nameEn": "Squats",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_2_10_1.png",
              "slogan": "升降机般的大腿",
              "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_squat.png",
              "backImg": "https://staticssl.keepcdn.com/2017/05/05/16/1493974275716_750x340.jpg?imageMogr2"

            },
            {
              "name": "引体向上",
              "nameEn": "Pull Up",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_3_10_1.png",
              "slogan": "仓门般的背部与大炮般的肱二头肌",
              "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_pullup.png",
              "backImg": "https://staticssl.keepcdn.com/2017/05/05/16/1493974275716_750x340.jpg?imageMogr2"

            },
            {
              "name": "举腿",
              "nameEn": "Leg Raise",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_4_10_2.png",
              "slogan": "魔鬼六块",
              "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_legraise.png",
              "backImg": "https://staticssl.keepcdn.com/2017/05/05/16/1493974275716_750x340.jpg?imageMogr2"

            },
            {
              "name": "桥",
              "nameEn": "Bridge",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_5_10_1.png",
              "slogan": "严阵以待的脊柱",
              "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_bridges.png",
              "backImg": "https://staticssl.keepcdn.com/2017/05/05/16/1493974275716_750x340.jpg?imageMogr2"

            },
            {
              "name": "倒立撑",
              "nameEn": "Hand Stand",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_6_10_1.png",
              "slogan": "健康、强力的肩膀",
              "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_handstand.png",
              "backImg": "https://staticssl.keepcdn.com/2017/05/05/16/1493974275716_750x340.jpg?imageMogr2"

            }],
            imgStyle: '?imageView2/5/w/300/h/140/q/1',
        }
    },
    getMovementsList() {
        var state = this.state;

        var movementsListDom = state.movementsList.map(function (item, i) {
            var backgroundImage = 'url(' + item.backImg + ')';
            return (
                <li className={"item"} style={{backgroundImage: backgroundImage}}>
                    <div className={"info"}>
                        <span className={"name-en"}>{item.nameEn}</span>
                        <span className={"name"}>{item.name}</span>
                        <span className={"muscle"}>{item.muscleGroup}</span>
                    </div>
                </li>
            );
        });

        return movementsListDom;
    },
    render() {
        var state = this.state;
        var self = this;

        return (
            <div className={"movementsList last"}>
                <div className={"wrapper"}>{self.getMovementsList()}</div>
            </div>
        );
    }
})

module.exports = MovementsPage;
