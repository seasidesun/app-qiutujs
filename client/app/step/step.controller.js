'use strict';

myApp.controller('stepCtrl', ['$scope', '$stateParams', function mainCtrl ($scope, $stateParams) {

    var sId = $stateParams.sId;

    var mId = $stateParams.mId;

    console.log(sId);
    console.log(mId);

    var step = {
        name: '第一式：墙壁俯卧撑',
        description: '做这个动作需要借助一个稳固的物体,高度大约是你身高的一半(大概到臀部位置)。 桌子、高一些的椅子、工作台、厨房操作台、矮墙、结实的栅栏都是不错的选择。大多数监 狱牢房里的洗漱台高度就正好,不过你得保证它足够结实。双脚并拢,身体成一条直线,然 后前倾上身,双臂伸直,双手抓住所选物体,与肩同宽。这是该动作的起始姿势(图 3)。 弯曲肘部,放低身体,直到胸部轻触物体顶部。如果你选择的物体高度合适,那么此时你的 身体与地面的夹角约为 450(图 4)。暂停一会,然后将自己推回到起始姿势,如此重复。',
        imgList: [{imgUrl: 'app/movement/111.png', description: '双脚并拢，双臂伸直，与肩同宽，双手平放在墙上'},{imgUrl: 'app/movement/111.png', description: '双脚并拢，双臂伸直，与肩同宽，双手平放在墙上'}],
        analysis: '这个动作的难度比第一式(墙壁俯卧撑)高,因为你将自己推回到起始姿势时,身体与 地面的夹角更小,这意味着你的上肢肌肉要承受更大的重量。上斜俯卧撑比标准俯卧撑(第 五式)容易,对大多数人来说,这个动作对肌肉的要求并不太高,而且它能帮助初学者平稳 进步,对康复期的健身者也非常有帮助。',
        level: [{level: 1, name: '初级标准', group: 1 ,count: 10, description: '初级标准:1 组,10 次'},{level: 1, name: '初级标准', group: 1 ,count: 10, description: '初级标准:1 组,10 次'},{level: 1, name: '初级标准', group: 1 ,count: 10, description: '初级标准:1 组,10 次'}],
        suggest: '到达动作的最低点时,你的身体与地面的夹角约为 45°。初学者如果达不到这么高的 水平,那就降低难度(加大倾斜角度,也就是让身体更接近直立)——只要选择高度高于你 身体中间点的物体即可。然后,再逐渐减小角度,直到可以轻而易举地完成倾斜 45°的上 斜俯卧撑。如果你还想尝试更小的角度,可以利用台阶做此动作——随着能力的提高,你可 以逐渐降低支撑物的高度。'
    };
    var description = "呵呵";

    $scope.step = step;
    $scope.description = description;
}]);
