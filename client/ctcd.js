!function() {
    var fBodyView = $('.f-body');
    var sBodyView = $('.s-body');
    var _screen = {
        w: window.screen.width,
        h: window.screen.height
    };
    var banner = {};
    var _m = {};

    function f_run() {
        var _lastScrollTop = 200;

        $('.f-wrapper').scroll(function(e) {
            var top = $('.f-wrapper .list').offset().top;

            if (top < _lastScrollTop && top < 180)
                $('.f-head').addClass('up');
            else if (top > 150)
                $('.f-head').removeClass('up');

            _lastScrollTop = top;
        });

        var movements = $('#f-list').children();
        for (var i = 0; i < movements.length; i++) {
            movements[i].index = i;
            bind(movements[i], 'click', function (e) {
                history.pushState('', '', '/m/' + (this.index + 1));
                fBodyView.css('display', 'none');
                s_run.refreshSteps(this.index);
                sBodyView.css('display', 'block');
            });
        }
        window.onpopstate = function(e){
            e.preventDefault();
            fBodyView.css('display', 'block');
            sBodyView.css('display', 'none');
        }
    }

    f_run();

    function bind(obj, event, callback) {
        if (obj.addEventListener) {
            obj.addEventListener(event, callback, false);
        } else {
            obj.attachEvent('on' + event, function() {
                callback.call(obj);
            });
        }
    }
    function getCtcdStepsByMId(mId, callback) {
        if (_m[mId]) return callback(null, _m[mId]);
        var domain = window.location.origin;
        $.ajax({
            url: domain + '/api/ctcd/movements/' + mId,
            type: 'GET',
            success: function (data) {
                _m[mId] = data;
                return callback(null, data)
            }
        });
    }

    var s_run = {
        init: function () {
            banner = {
                sStepsView: document.getElementById('s-step'),
                sStepsList: document.getElementById('s-list'),
                tagsView: document.getElementById('tags'),
                iCount: 10,
                iW: _screen.w > 450 ? 450: _screen.w,
                iNow: 0,
                iX: 0,
                iDirect: 'l', //r is left, l is right
                iStartX: 0,
                iStartTouchX: 0
            }
            banner.sStepsList.style.width = banner.iW * banner.iCount + 'px';
            banner.sStepsList.style.height = '100%';

            for (var i = 0; i < banner.iCount; i++) {
                var _tag = document.createElement('li');
                _tag.className = 'item';

                var wrapper = document.createElement('div');
                wrapper.className = 'wrapper';
                var a = document.createElement('a');
                wrapper.appendChild(a);
                _tag.appendChild(wrapper);

                banner.tagsView.appendChild(_tag);
            }

            banner.arrNav = banner.tagsView.children;
            //绑定点击事件
            for (var i = 0; i < banner.iCount; i++) {
                banner.arrNav[i].index = i;
                bind(banner.arrNav[i], 'click', s_run.clickHandler);
            }
            //绑定移动端事件
            bind(banner.sStepsView, 'touchstart', s_run.touchStartHandler);
            bind(banner.sStepsView, 'touchmove', s_run.touchMoveHandler);
            bind(banner.sStepsView, 'touchend', s_run.touchEndHandler);
        },
        touchStartHandler : function (event) {
            banner.sStepsList.style.transition = 'none';
            banner.iStartTouchX = event.changedTouches[0].pageX;
            banner.iStartTouchY = event.changedTouches[0].pageY;
            banner.iStartX = banner.iX;
            clearInterval(banner.oTimer);
        },
        touchMoveHandler : function (event) {
            var iDeltaY = event.changedTouches[0].pageY - banner.iStartTouchY;
            var iDeltaX = event.changedTouches[0].pageX - banner.iStartTouchX;
            if (iDeltaX > 0)  banner.iDirect = 'r';
            else banner.iDirect = 'l';
            if (iDeltaY > 5 || iDeltaY < -5) {
                return;
            }
            banner.iX = banner.iStartX + iDeltaX;
            if (banner.iX > -3)
                banner.iX = 0;
            if (banner.iX < -banner.iW * (banner.iCount - 1) + 3)
                banner.iX = -banner.iW * (banner.iCount - 1);
            banner.sStepsList.style.WebkitTransform
                    = banner.sStepsList.style.transform
                    = 'translateX(' + banner.iX + 'px)';
            event.preventDefault();  // 阻止默认事件
            event.stopPropagation(); // 阻止冒泡

        },
        touchEndHandler : function (event) {
            var postion = banner.iX / banner.iW;
            console.log(postion);
            console.log(banner.iNow);
            console.log(postion.toFixed(2).slice(-2));
            console.log(banner.iDirect);

            if (banner.iDirect === 'l' && postion.toFixed(2).slice(-2) >= 10) banner.iNow = -parseInt(postion) + 1;
            else if (banner.iDirect === 'r' && postion.toFixed(2).slice(-2) <= 90) banner.iNow = -parseInt(postion);
            console.log(banner.iNow);
            if (banner.iNow < 0) banner.iNow = 0;
            if (banner.iNow > banner.iCount - 1) banner.iNow = banner.iCount - 1;
            s_run.slide();
        },
        slide : function () {
            banner.iX = -banner.iNow * banner.iW;
            banner.sStepsList.style.transition = '0.5s';
            banner.sStepsList.style.WebkitTransform
                = banner.sStepsList.style.transform
                = 'translateX(' + banner.iX + 'px)';
            for (var i = 0; i < banner.iCount; i++) {
                s_run.removeClass(banner.arrNav[i], 'active');
                s_run.removeClass(banner.arrNav[i].childNodes[0], 'active');
            }
            s_run.addClass(banner.arrNav[banner.iNow], 'active');
            s_run.addClass(banner.arrNav[banner.iNow].childNodes[0], 'active');
        },
        //根据点击的动作刷新steps的innerHtml
        refreshSteps: function (mId) {
            getCtcdStepsByMId(mId, function (error, data) {
                if (error || !data) return;
                banner.sStepsList.innerHTML = '';
                for (var i = 0; i < banner.iCount; i++) {
                    var _li = s_run.createStepDom(data[i+1]);
                    _li.style.width = banner.iW + 'px';
                    banner.sStepsList.appendChild(_li);
                    banner.sStepsList.style.WebkitTransform
                        = banner.sStepsList.style.transform
                        = '';
                    banner.arrNav[i].firstChild.firstChild.text = data[i+1].name;

                    if (i == 0) {
                        s_run.addClass(banner.arrNav[i], 'active');
                        s_run.addClass(banner.arrNav[i].childNodes[0], 'active');
                    } else {
                        s_run.removeClass(banner.arrNav[i], 'active');
                        s_run.removeClass(banner.arrNav[i].childNodes[0], 'active');
                    }
                }
            });
        },
        //添加样式
        addClass : function (obj, sClass) {
            var arrClass = obj.className.split(' ');
            if (!obj.className) {
                obj.className = sClass;
                return
            };
            //判断是否已存在
            for (var i = 0, l = arrClass.length; i < l; i++) {
                if (arrClass[i] === sClass) return;
            }
            obj.className += ' ' + sClass;
        },
        //移除样式
        removeClass : function (obj, sClass) {
            var arrClass = obj.className.split(' ');
            if (!obj.className) return;
            //判断并移除
            for (var i = 0, l = arrClass.length; i < l; i++) {
                if (arrClass[i] === sClass) {
                    arrClass.splice(i, 1);
                    obj.className = arrClass.join(' ');
                    break;
                }
            }
        },
        //点击
        clickHandler : function () {
            banner.iNow = this.index;
            s_run.slide();
        },
        createStepDom: function (data) {
            var li = document.createElement('li');
            li.innerHTML = '<div class="item"><div class="title"><h4>动作</h4></div><div class="content">&nbsp;&nbsp;&nbsp;&nbsp;' + data.description + '</div></div>'

            var html = '<div class="item"><div class="title"><h4>图解</h4></div><div class="content">';
            for (var i = 0; i < data.imgList.length; i++) {
                html += data.imgList[i].description + '<img src="http://7xl4qs.com1.z0.glb.clouddn.com/' + data.imgList[i].imgUrl + '?imageMogr2/thumbnail/250x250" alt="' + data.imgList[i].description + '"/>';
            }
            html += '</div></div>';
            li.innerHTML += html;

            li.innerHTML += '<div class="item"><div class="title"><h4>心得</h4></div><div class="content">&nbsp;&nbsp;&nbsp;&nbsp;' + data.analysis + '</div></div>';

            html = '<div class="item"><div class="title"><h4>训练目标</h4></div><div class="content">';
            for (var i = 0; i < data.level.length; i++) {
                html += '<div class="tar">' + data.level[i].description + '</div>';
            }
            html += '</div></div>';
            li.innerHTML += html;

            li.innerHTML += '<div class="item"><div class="title"><h4>稳扎稳打</h4></div><div class="content">&nbsp;&nbsp;&nbsp;&nbsp;' + data.suggest + '</div>';
            return li;
        }
    };
    s_run.init();
}();
