$(document).ready(function(){
    var page=1;
    var i=3;
    var len=$(".divUl ul li").length;
    var page_count=Math.ceil(len/i);
    var maxcommon=$(".proBottomClick").width();
    var $parent=$(".divUl");
    $(".next").click(function(){
        if(!$parent.is(":animated")){
            if(page==page_count){
                $parent.animate({left:0},800);
                page=1;
            }else{
                $parent.animate({left:"-="+maxcommon},800);
                page++;
            }
        }
    })
    $(".prev").click(function(){
        if(!$parent.is(":animated")){
            if(page==1){
                $parent.animate({left:"-="+maxcommon*(page_count-1)},800);
                page=page_count;
            }else{
                $parent.animate({ left : '+='+maxcommon }, 800);  //通过改变left值，达到每次换一个版面
                page--;
            }
        }
    })
})
