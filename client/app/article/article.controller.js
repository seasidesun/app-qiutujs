"use strict";

myApp.controller('articleListCtrl', ['$scope', function mainCtrl ($scope) {

    var article = [
        {
            "id": 1,
            "title": "我的健身之道",
            "content": "这不是一本教你练出“可爱肌肉”的书，而是一本教你练出能用的力量、极限的力量、生存的力量的书。作者保罗·威德在美国最严酷的监狱中度过了19年，在其中逐渐挖掘出了一套最古老的健身法，在商业社会中早已失传的力量哲学，并凭此成为了地球上最强壮的人之一——这让他得以有尊严地生存下来。出狱之后，他把这套失传的技艺整理并公之于世——这是他带给我们的最珍贵礼物。",
            "author": "five_trees",
            "imgUrlList": ["http://7xl4qs.com1.z0.glb.clouddn.com/articles_1.jpg"],
            "commentCount": 0,
            "star": 1873,
            "unstar": 0,
            "createAt": "2014-01-01"
        },
        {
            "id": 2,
            "title": "如何走出健身房",
            "content": "健身是一种体育项目，如各种徒手健美操、韵律操、形体操以及各种自抗力动作，体操可以增强力量、柔韧性，增加耐力，提高协调，控制身体各部分的能力，从而使身体强健。如果要达到缓解压力的目的，至少一周锻炼3次。",
            "author": "five_trees",
            "imgUrlList": ["http://7xl4qs.com1.z0.glb.clouddn.com/articles_2.jpg"],
            "commentCount": 0,
            "star": 345,
            "unstar": 0,
            "createAt": "2014-01-12"
        },
        {
            "id": 3,
            "title": "完美体魄",
            "content": "平时我们所说的体魄好坏就是指体格和精力的状况，幸福健康的体魄是人生最大的财富。柳青《创业史》第一部题叙：“一眼就可看出：那强壮的体魄里，蕴藏着充沛的精力。",
            "author": "five_trees",
            "imgUrlList": ["http://7xl4qs.com1.z0.glb.clouddn.com/articles_3.jpg"],
            "commentCount": 0,
            "star": 67,
            "unstar": 0,
            "createAt": "2014-01-12"
        }
    ];
    $scope.articleList = article;
}]);


myApp.controller('articleShowCtrl', ['$scope' ,'$stateParams', function mainCtrl ($scope, $stateParams) {

    $scope.article = article;
}]);
