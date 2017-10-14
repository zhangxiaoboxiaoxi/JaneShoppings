//01 新闻滚动
$(function(){
    var $UL = $(".HeightUl");   //获取ul外面的div
    var scrollTimer;				//设置计时器
    $UL.hover(function(){
        clearInterval(scrollTimer);		//hover时，清除计时器
    },function(){
        scrollTimer = setInterval(function(){		//鼠标移开时，执行计时器
            scrollNews( $UL );	//this实参
        }, 3000 );
    }).trigger("mouseleave");		//模仿鼠标移开事件
});
function scrollNews(obj){		//obj形参
    var $self = obj.find("ul:first"); 		//找到第一个ul
    var lineHeight = $self.find("li:first").height(); //获取行高
    $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
        $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
    })
}
$(function(){
    $(".downTop").click(function(){
        var $UL = $(".HeightUl");
        var $self = $(this);
        if($UL.is(":visible")){
            $self.next().slideToggle(600,function(){
                $self.css("background","url(images/dt.jpg) no-repeat 207px 20px");
            })
        }
        else{
            $self.next().slideToggle(600,function(){
                $self.css("background","url(images/jt.jpg) no-repeat 207px 20px");
            })
        }
    })
})
$(function(){
    $(".downTop1").click(function(){
        var $ULsecond = $(".UlSecond");
        var $selfsecond = $(this);
        if($ULsecond.is(":visible")){
            $selfsecond.next().slideToggle(600,function(){
                $selfsecond.css("background","url(images/dt.jpg) no-repeat 207px 20px");
            })
        }
        else{
            $selfsecond.next().slideToggle(600,function(){
                $selfsecond.css("background","url(images/jt.jpg) no-repeat 207px 20px");
            })
        }
    })
})