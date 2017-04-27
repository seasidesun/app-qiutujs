import React from 'react'

var MovementsList =  React.createClass({
    getInitialState() {
        return {
            movementsList: [
            {
              "name": "俯卧撑",
              "nameEn": "Push Up",
              "muscleGroup": "胸肌（胸大肌和胸小肌）、三角肌前束、肱三头肌",
              "backgroundImgUrl": "steps_1_10_1.png",
              "slogan": "铠甲般的胸肌与钢铁般的肱三头肌"
            },
            {
              "name": "深蹲",
              "nameEn": "Squats",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_2_10_1.png",
              "slogan": "升降机般的大腿"
            },
            {
              "name": "引体向上",
              "nameEn": "Pull Up",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_3_10_1.png",
              "slogan": "仓门般的背部与大炮般的肱二头肌"
            },
            {
              "name": "举腿",
              "nameEn": "Leg Raise",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_4_10_2.png",
              "slogan": "魔鬼六块"
            },
            {
              "name": "桥",
              "nameEn": "Bridge",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_5_10_1.png",
              "slogan": "严阵以待的脊柱"
            },
            {
              "name": "倒立撑",
              "nameEn": "Hand Stand",
              "muscleGroup": "",
              "backgroundImgUrl": "steps_6_10_1.png",
              "slogan": "健康、强力的肩膀"
            }],
            imgStyle: '?imageView2/5/w/300/h/140/q/1',
        }
    },
    render() {
        var state = this.state;
        var self = this;

        var movementsListDom = state.movementsList.map(function (item, i) {
            return <li className={"item"}>{item.name}</li>
        });

        return (
            <div className={"movementsList"}>
                <div className={"wrapper"}>{movementsListDom}</div>
            </div>
        )
    }
})

module.exports = MovementsList;
