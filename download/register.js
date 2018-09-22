//轮播图片
var li=document.getElementById('side_img').getElementsByTagName("li");
var num=0;
var len=li.length;
//定时器
setInterval(function(){
    li[num].style.display="none";
    num=++num==len?0:num;
    li[num].style.display="inline-block";
    $("li").eq(num).fadeIn("fast").siblings("li").fadeOut();
},3000);//切换时间

//下拉列表

