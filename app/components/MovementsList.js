import React from 'react';

import MovementsListStyle from './MovementsList.less';

var MovementsList =  React.createClass({
    getInitialState() {
        return {
            movementsList: [
            {
              "name": "俯卧撑",
              "nameEn": "Push Up",
              "muscleGroup": "胸肌（胸大肌和胸小肌）、三角肌前束、肱三头肌",
              "backgroundImgUrl": "steps_1_10_1.png",
              "slogan": "铠甲般的胸肌与钢铁般的肱三头肌",
              "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_pushup.png"
            },
            {
              "name": "深蹲",
              "nameEn": "Squats",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_2_10_1.png",
              "slogan": "升降机般的大腿",
              "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_squat.png"
            },
            {
              "name": "引体向上",
              "nameEn": "Pull Up",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_3_10_1.png",
              "slogan": "仓门般的背部与大炮般的肱二头肌",
              "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_pullup.png"
            },
            {
              "name": "举腿",
              "nameEn": "Leg Raise",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_4_10_2.png",
              "slogan": "魔鬼六块",
              "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_legraise.png"
            },
            {
              "name": "桥",
              "nameEn": "Bridge",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_5_10_1.png",
              "slogan": "严阵以待的脊柱",
              "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_bridges.png"
            },
            {
              "name": "倒立撑",
              "nameEn": "Hand Stand",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_6_10_1.png",
              "slogan": "健康、强力的肩膀",
              "iconUrl": "http://7xl4qs.com1.z0.glb.clouddn.com/icon_handstand.png"
            }],
            imgStyle: '?imageView2/5/w/300/h/140/q/1',
        }
    },
    getMovementsList() {
        var state = this.state;

        var movementsListDom = state.movementsList.map(function (item, i) {
            return (
                <li className={"item"}>
                    <div className={"icon"}><img src={item.iconUrl}></img></div>
                    <div className={"info"}>
                        <span>{item.name}</span>
                        <span>{item.nameEn}</span>
                    </div>
                    <span className={"right"}></span>
                </li>
            );
        });

        return movementsListDom;
    },
    render() {
        var state = this.state;
        var self = this;

        return (
            <div className={"movementsList"}>
                <div className={"wrapper"}>{self.getMovementsList()}</div>
            </div>
        );
    }
})

module.exports = MovementsList;
