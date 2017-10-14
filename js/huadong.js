/**
 * Created by Administrator on 2017/10/11 0011.
 */
$(document).ready(function(){
    var Lilen=$(".num li").length;
    var index=0;
    var bannerTime;
    $(".num li").mouseover(function(){
        index =  $(".num li").index(this);
        show(index);
    }).eq(0).mouseover();
    $(".maxbanner").hover(function(){
        clearInterval(bannerTime);
    },function(){
        bannerTime=setInterval(function(){
            show(index);
            index++;
            if(index==Lilen){
                index=0;
            }
        },3000)
    })
    function show(index){
        var maxbannerHeight=$(".maxbanner").height()+3;
        $(".slider").stop(true,false).animate({top:-maxbannerHeight*index},1000);
        $(".num li").removeClass("on").eq(index).addClass("on");
    }
})
