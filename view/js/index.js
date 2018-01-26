// var version ="版本号：V2.1702PT";
var version = "V5.170712PT";

$(function () {

    $("#info").hide();
    $("#version").html();
    showMenu();
    var isDown2 = false;
    var tcount = 0;
    var timeclc // 定时器ID
    window.GojqId = 300;
    setInterval("u()", 1000);


    //禁止全选
    $("body").bind("selectstart", function () {
        return false;
    });


    var curr = 0;
    var down_time = null;

    function loopPhoto() {
        if (null != down_time)
            clearInterval(down_time);
        $("#PT_photo").css("display", "none");
        down_time = setTimeout(function () {
            $("#PT_photo").css("display", "block");
            layer.closeAll();
            console.log("loadin");
        }, 60000);   //修改弹出广告时间

    }

    $("#info").bind({
        mousedown: function () {
            loopPhoto();
        },
        mousemove: function () {
            loopPhoto();
        }
        , click: function () {
            loopPhoto();
        }
    });

    $("#container").bind({
        mousedown: function () {
            loopPhoto();
        },
        mousemove: function () {
            loopPhoto();
        }
        , click: function () {
            loopPhoto();
        }
    });
    $("body").bind({
        mousedown: function () {
            loopPhoto();
        },
        mousemove: function () {
            loopPhoto();
        }
    });
    loopPhoto();


});



var isDown = false;
var initialTop = 0;
var divTop = 0;

var move = $(".move");
var moveBlock = $(".moveBlock");

var lydtName = "hgsdpb";

function hidden1() {
    var block = $(".block");
    block.animate({
        "left": "1035px",
        "width": "0px"
    });
    tcount = 1;
}


function showMenu() {

    $(".footer2").hide();
    $(".footer").show();
    $(".container").animate({
        "height": "1050px"
    });
    $(".block").css("height", "1050px");
    $(".img").css("left", "-3430px");
    $(".img").css("top", "-2625px");

    tcount = 1;
}

function hideMenu() {

    $(".container").animate({
        "height": "1050px"
    });
    $(".block").css("height", "1050px");
    $("#info").hide();

    $(".img").css("left", "-3430px");
    $(".img").css("top", "-2625px");

    hidden1();
    tcount = 1;

    handleGoHome();
}

function load(page, progro) {


    //console.log("page=="+page);

    if (typeof(localStorage.getItem(progro)) != "undefined" && localStorage.getItem(progro) != null) {
        localStorage.setItem(progro, parseInt(localStorage.getItem(progro)) + 1);
    } else {
        localStorage.setItem(progro, "1");
    }
    $("#infoMove").empty();
    $("#infoMove").html("<h1 style='color: #fff;'>正在加载中...</h1>");
    $("#infoMove").load(page);
    $("#info").show();
    tcount = 1;

}
function loadNum(page, progro) {
    //$("#infoMove").empty();    
    if (typeof(localStorage.getItem(progro)) != "undefined" && localStorage.getItem(progro) != null) {
        localStorage.setItem(progro, parseInt(localStorage.getItem(progro)) + 1);
    } else {
        localStorage.setItem(progro, "1");
    }


    tcount = 1;
}


function loadjq(page, progro) {
    GojqId = progro;
    //console.log('loadjq.GojqId='+GojqId);
    //console.log("page=="+page);
    if (typeof(localStorage.getItem(progro)) != "undefined" && localStorage.getItem(progro) != null) {
        localStorage.setItem(progro, parseInt(localStorage.getItem(progro)) + 1);
    } else {
        localStorage.setItem(progro, "1");
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

function nice() {
    console.log("loading!");
}

//localStorage.setItem("localPosition","106.713574,26.588066");
localStorage.setItem("localPosition", "106.85583,25.647222");
   

