//01 ���Ź���
$(function(){
    var $UL = $(".HeightUl");   //��ȡul�����div
    var scrollTimer;				//���ü�ʱ��
    $UL.hover(function(){
        clearInterval(scrollTimer);		//hoverʱ�������ʱ��
    },function(){
        scrollTimer = setInterval(function(){		//����ƿ�ʱ��ִ�м�ʱ��
            scrollNews( $UL );	//thisʵ��
        }, 3000 );
    }).trigger("mouseleave");		//ģ������ƿ��¼�
});
function scrollNews(obj){		//obj�β�
    var $self = obj.find("ul:first"); 		//�ҵ���һ��ul
    var lineHeight = $self.find("li:first").height(); //��ȡ�и�
    $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
        $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo��ֱ���ƶ�Ԫ��
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