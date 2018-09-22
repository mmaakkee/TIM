//给鼠标设置class删除与添加
$(".topNav li").click(function(){
    $(this).addClass("active");
},function(){
    $(this).removeClass("active");
});

$(function(){
    //使导航栏下滑到一定高度固定在网页的头部
    var firstHeight = 555;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        if (scrollTop >= firstHeight) {
            $("#topbar").addClass("topicfixed")
        } else {
            if ($("#topbar").hasClass("topicfixed")) {
                $("#topbar").removeClass("topicfixed")
            }
        }
    });

    //鼠标移入显示其他选择项
    $("#drwrap").hover(function () {
        $("#dropList").slideDown(300)
    }, function () {
        $("#dropList").hide()
    });
});

