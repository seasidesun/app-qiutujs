!(function() {
    var _lastScrollTop = 200;

    $('.f-wrapper').scroll(function(e) {
        var top = $('.f-wrapper .list').offset().top;

        if (top < _lastScrollTop && top < 180)
            $('.f-head').addClass('up');
        else if (top > 150)
            $('.f-head').removeClass('up');

        _lastScrollTop = top;
    })

    function getCtcdStepBySId(mId, sId) {
        var domain = window.location.origin;
        $.ajax({
            url: domain + '/api/ctcd/movements/1/steps/1',
            type: 'GET',
            success: function (data) {
                console.log(data);
            }
        });
    }
})();
