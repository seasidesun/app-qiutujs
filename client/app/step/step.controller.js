'use strict';

myApp.controller('stepCtrl', ['$scope', '$stateParams', 'steps', function mainCtrl ($scope, $stateParams, steps) {

    var sId = $stateParams.sId;
    var mId = $stateParams.mId;

    console.log('s = ', sId);
    console.log('m = ', mId);

    var step = {};
    $scope.step = step;

    steps.getStepsBymID(mId, function (err, ret) {
        if (ret) step = ret[sId];
        $scope.step = step;
    });

    steps.getMovements(function (err, ret) {
        console.log(ret);
        // $scope.step = step;
    });

    // var step = {
    //     name: '第一式：墙壁俯卧撑',
    //     description: '面对墙壁站立,双脚并拢,双臂伸直,与肩同宽,双手平放在墙上,手掌与胸等高。这 是该动作的起始姿势(图 1)。弯曲肘部,直到前额轻触墙面。这是该动作的结束姿势(图 2)。 然后将自己推回到起始姿势,如此重复。解析俯卧撑动作共有十式,墙壁俯卧撑只是第一式。既然是第一式,也就最容易的,毫无疑 问普通人都能做。墙壁俯卧撑也是第一个有治疗效果的练习。刚受伤、做过手术或身体正处 于恢复期的人若想加快恢复速度、尽快拥有强健的体魄,可以选择这个动作。肘、腕、肩(尤 其是柔弱的肩袖)极易出现慢性或急性损伤,这项练习能够轻柔地刺激这些部位,并改善血 液循环。不熟悉徒手体操的初学者应该以较轻柔的动作开始训练,然后逐步提高自己的运动 技巧,循序渐进地增强自己的运动能力。我建议就从这个练习动作开始。',        imgList: [{imgUrl: 'app/movement/111.png', description: '双脚并拢，双臂伸直，与肩同宽，双手平放在墙上'},{imgUrl: 'app/movement/111.png', description: '双脚并拢，双臂伸直，与肩同宽，双手平放在墙上'}],
    //     analysis: '这个动作的难度比第一式(墙壁俯卧撑)高,因为你将自己推回到起始姿势时,身体与 地面的夹角更小,这意味着你的上肢肌肉要承受更大的重量。上斜俯卧撑比标准俯卧撑(第 五式)容易,对大多数人来说,这个动作对肌肉的要求并不太高,而且它能帮助初学者平稳 进步,对康复期的健身者也非常有帮助。',
    //     level: [{level: 1, name: '初级标准', group: 1 ,count: 10, description: '初级标准:1 组,10 次'},{level: 1, name: '初级标准', group: 1 ,count: 10, description: '初级标准:1 组,10 次'},{level: 1, name: '初级标准', group: 1 ,count: 10, description: '初级标准:1 组,10 次'}],
    //     suggest: '到达动作的最低点时,你的身体与地面的夹角约为 45°。初学者如果达不到这么高的 水平,那就降低难度(加大倾斜角度,也就是让身体更接近直立)——只要选择高度高于你 身体中间点的物体即可。然后,再逐渐减小角度,直到可以轻而易举地完成倾斜 45°的上 斜俯卧撑。如果你还想尝试更小的角度,可以利用台阶做此动作——随着能力的提高,你可 以逐渐降低支撑物的高度。'
    // };
    // var description = "呵呵";
}]);
