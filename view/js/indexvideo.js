
$(function() {
    // $('#dv').scrollTop($('#dv')[0].scrollHeight);
    $("#info").hide();
    // $("#version").html("版本号：V2.171105");
    $("#version").html("版本号：V3.180116PtBlk");
    showMenu();
    var isDown2 = false;
    var tcount = 0;
    var timeclc // 定时器ID
    window.GojqId = 300;
    setInterval("u()", 1000);
    //禁止全选
    $("body").bind("selectstart", function(){
        return false;
    });
    //视频广告
    //var vList = ['video/3.webm', 'video/4.webm', 'video/5.webm']; // 初始化播放列表
    var vList = ['video/90second.webm','video/90second.webm']; // 初始化播放列表

    var curr = 0 ;
    var down_time = null;

    //当前播放的视频
    function play1() {
        layer.closeAll();
        var video = $("#video2");
        video.attr("src",vList[curr]);
        video[0].play();
        curr++;

        if (curr >= vList.length) curr = 0; // 播放完了，重新播放
        //if(curr==1){$("#video-img").css("display","none");}
        //else{$("#video-img").css("display","block");}
    }
    function loopVideo(){
        if(null != down_time)
            clearInterval(down_time);

        $("#video1").css("display","none");
        $("#video2").unbind("ended");
        $("#video2")[0].pause();
        down_time = setTimeout(function(){
            $("#video1").css("display","block");
            $("#video2").bind('ended', function(){play1()});
            play1();
            // },5000);   //修改弹出广告时间
        },300000);   //修改弹出广告时间
    }
    $("body").mousedown(loopVideo);
    loopVideo();
    ////滑动条
    // var picContent = document.getElementById('picContent')
    // picContent.scrollTop(picContent.offsetHeight);
    // ( $('#dv')[0].offsetHeight );
    // document.getElementById('dv').scrollTop = document.getElementById('dv').scrollHeight;

    // dv.scrollTop = $("#picContent").offsetHeight;
});
var Totollogintime = 180;  //便利扣登出时间  /秒
var logintime=Totollogintime;
function getOppositeCoor(id, event) {
    event = event || window.event;
    var obj = document.getElementById(id);
    var left = obj.offsetLeft;
    var top = obj.offsetTop;

    var parObj = obj;
    while (parObj = parObj.offsetParent) {
        left += parObj.offsetLeft;
    }
    parObj = obj;
    while (parObj = parObj.offsetParent) {
        top += parObj.offsetTop;
    }
    var OppositeCoorLeft = event.clientX - left + document.body.scrollLeft;
    var OppositeCoorTop = event.clientY - top + document.body.scrollTop;
    return {
        'left' : OppositeCoorLeft,
        'top' : OppositeCoorTop
    };
}
var isDown = false;
var initialTop = 0;
var divTop = 0;

var move = $(".move");
var moveBlock = $(".moveBlock");

function hidden1() {
    var block = $(".block");
    block.animate({
        "left" : "1035px",
        "width" : "0px"
    });
    tcount = 1;
}


function  showMenu() {

    $(".footer2").hide();
    $(".footer").show();
    $(".container").animate({
        "height" : "1203px"
    });
    $(".block").css("height", "1203px");
    $(".img").css("left", "-3430px");
    $(".img").css("top", "-2625px");

    tcount = 1;
    // $('#dv').scrollTop($('#dv')[0].scrollHeight);
}

function hideMenu() {

    $(".container").animate({
        "height" : "1203px"
    });
    $(".block").css("height", "1203px");
    $("#info").hide();

    $(".img").css("left", "-3430px");
    $(".img").css("top", "-2625px");

    hidden1();
    tcount = 1;

    // handleGoHome();
}

function load(page,progro) {


    //console.log("page=="+page);

    if(typeof(localStorage.getItem(progro))!="undefined" &&localStorage.getItem(progro) != null){
        localStorage.setItem(progro,parseInt(localStorage.getItem(progro)) + 1);
    }else{
        localStorage.setItem(progro,"1");
    }
    $("#infoMove").empty();
    $("#infoMove").load(page);
    $("#info").show();
    $("#showContent").hide();
    tcount = 1;

}
function loadNum(page,progro) {
    //$("#infoMove").empty();
    if(typeof(localStorage.getItem(progro))!="undefined" &&localStorage.getItem(progro) != null){
        localStorage.setItem(progro,parseInt(localStorage.getItem(progro)) + 1);
    }else{
        localStorage.setItem(progro,"1");
    }



    /****************************/
    /*******************
     //alert(page);
     $("#infoMove").html("<iframe src='pages/sssj/jqss/jqss-detail-map.html?oId="+progro+"'  allowtransparency='true'   frameborder='0' height='1100px'  width='100%' scrolling='no'></iframe>");

     $("#info").show();
     *********/
    /****************************/
    tcount = 1;
}



function loadjq(page,progro) {
    GojqId = progro;
    //console.log('loadjq.GojqId='+GojqId);
    //console.log("page=="+page);
    if(typeof(localStorage.getItem(progro))!="undefined" &&localStorage.getItem(progro) != null){
        localStorage.setItem(progro,parseInt(localStorage.getItem(progro)) + 1);
    }else{
        localStorage.setItem(progro,"1");
    }
    $("#infoMove").empty();
    $("#infoMove").load(page);
    $("#info").show();
    tcount = 1;

}


function u() {
    tcount++;

    if (tcount > 1800)
        hideMenu();
}

function nice(){
    console.log("loading!");
}
//天气预报部分
localStorage.setItem("localPosition","106.85583,25.647222");
//处理揭秘部分冒泡事件
var fastBtn = document.getElementById("fastBtn");
// var showContent = document.getElementById("showContent")
var info = document.getElementById("info");
fastBtn.onclick=function () {
    // alert("已点击")
    // load('pages/waitAtTianYan/exploreFast/fast.html')
    // info.hide();
    $("#infoMove").empty();
    // $("#infoMove").load(page);

    $("#showContent").show();
    $("#info").hide();
    tcount = 1;

}
//垂直滚动
var distance = document.getElementById("distance");




