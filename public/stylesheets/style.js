/**
 * Created by Administrator on 2017/4/26.
 */


    $(function () {
        var start =0
        var autoplay=setInterval(function () {
            var end =$('ul li').length-1
            start --
            if (start<0){
                start=end
            }
            $('ul li').eq(start).addClass('active').siblings().removeClass('active')
        },1000)
    })
