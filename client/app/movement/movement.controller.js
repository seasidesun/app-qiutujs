'use strict';

myApp.controller('movementListCtrl', ['$scope', function mainCtrl ($scope) {

    var movements = [
        {
            'name': '俯卧撑',
            'position': 1,
            'img': 'http://www.tinengwang.com/uploads/allimg/130717/1-130GGH400509.jpg'
        }
    ];

    $scope.movements = movements;
}]);

myApp.controller('movementShowCtrl', ['$scope', '$location', '$stateParams', function mainCtrl ($scope, $location, $stateParams) {

    var id = $stateParams.id;

    var movement = {
        '1': {
          'name': '俯卧撑',
          'position': 1,
          'nameEn': 'Push Up',
          'muscleGroup': '胸肌（胸大肌和胸小肌）、三角肌前束、肱三头肌',
          'muscleGroupImgList':'http://epaper.dfdaily.com/dfzb/res/1/1/2015-02/25/A12/res07_attpic_brief.jpg',
          'descriptions': '  不同形式的俯卧撑锻炼肌肉的程度不同,但俯卧撑的所有变式都能增强力量、打肌肉。 俯卧撑尤其锻炼胸大肌、三角肌前束和胸小肌,从而最大限度地发展你躯干上的推力肌肉。 此外,俯卧撑还能够锻炼肱三头肌(上臂的主要肌肉)的三个头。',
          'slogan': '铠甲般的胸肌与钢铁般的肱三头肌'
        },
        '2': {
          'name': '',
          'position': 1,
          'nameEn': 'Push Up',
          'muscleGroup': '',
          'description': ''
        }
    };

    var steps = [
        {
            'name': '第一式：墙壁俯卧撑',
            'position': 1,
            'level': ['初级标准：1 X 10', '中级标准：2 X 25', '升级标准：3 X 50'],
        },
        {
            'name': '第二式：上斜俯卧撑',
            'level': ['初级标准：1 X 10', '中级标准：2 X 25', '升级标准：3 X 50'],
        },
        {
            'name': '第三式：膝盖俯卧撑',
            'level': ['初级标准：1 X 10', '中级标准：2 X 25', '升级标准：3 X 50'],
        },
        {
            'name': '第四式：半俯卧撑',
            'level': ['初级标准：1 X 10', '中级标准：2 X 25', '升级标准：3 X 50'],
        },
        {
            'name': '第五式：标准俯卧撑',
            'level': ['初级标准：1 X 10', '中级标准：2 X 25', '升级标准：3 X 50'],
        },
        {
            'name': '第六式：窄距俯卧撑',
            'level': ['初级标准：1 X 10', '中级标准：2 X 25', '升级标准：3 X 50'],
        },
        {
            'name': '第七式：偏重俯卧撑',
            'level': ['初级标准：1 X 10', '中级标准：2 X 25', '升级标准：3 X 50'],
        },
        {
            'name': '第八式：单臂半俯卧撑',
            'level': ['初级标准：1 X 10', '中级标准：2 X 25', '升级标准：3 X 50'],
        },
        {
            'name': '第九式：杠杆俯卧撑',
            'level': ['初级标准：1 X 10', '中级标准：2 X 25', '升级标准：3 X 50'],
        },
        {
            'name': '最终式：单臂俯卧撑',
            'level': ['初级标准：1 X 10', '中级标准：2 X 25', '升级标准：3 X 50'],
        }
    ];

    var actions = [
        {
            img: 'http://www.tinengwang.com/uploads/allimg/130717/1-130GGH400509.jpg',
            description: '唱片公司也对这张唱片非常重视，把专辑中的十首歌曲全部拍成MTV，并且向全国乃至全亚洲进行了大面积的宣传'
        },
        {
            img: 'http://www.tinengwang.com/uploads/allimg/130717/1-130GGH400509.jpg',
            description: '唱片公司也对这张唱片非常重视，把专辑中的十首歌曲全部拍成MTV，并且向全国乃至全亚洲进行了大面积的宣传'
        }
    ];

    $scope.movement = movement[id];
    $scope.steps = steps;
    $scope.actions = actions;
}]);
