var version="V2.170712MT";
$(function() {
	$("#info").hide();
	var hometime = 180;  //秒   180
	$("#version").html(version);
	showMenu();

});
var Totollogintime = 180;  //便利扣登出时间  /秒
var logintime=Totollogintime;
var videotime = 30000;  //   120000ms
var isDown2 = false;

var tcount = 0;
var timeclc // 定时器ID


//禁止全选
//$("body").bind("selectstart", function(){
//    return false;
//});
//视频广告
//var vList = ['video/33.webm', 'video/4.webm', 'video/5.webm']; // 初始化播放列表
var vList = ['video/6.webm','video/6.webm']; // 初始化播放列表

var curr = 0 ;
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


var down_time = null;
var notice=0;//提示音标志

function loopVideo(){
	//var video_time2=3000;
	//video_time2=videotime;
	//console.log(video_time2);
	if(down_time !=null )
		clearInterval(down_time);
	if(notice!=0){
		var audio1= $("#audioNotice");
		audio1[0].play();
		notice=0;
		$("#bg_muisc")[0].pause();
		hideMenu();
	}

	$("#video1").css("display","none");
	$("#video2").unbind("ended");
	//$("#video2")[0].pause();

	down_time = setTimeout(function(){
		$("#video1").css("display","block");
		// $("#bg_muisc")[0].play();
		play1();
		$("#video2").bind('ended', function(){play1()});
		notice=1;

	},100000);   // 弹出广告时间
}
//$("body").mousedown(loopVideo);
//$("body").bind({
//mousedown:function(){loopVideo();},
//mousemove:function(){loopVideo();}
//,click:function(){loopVideo();}
//});
//document.onclick = function(){
//loopVideo();
//};

loopVideo();

$("#info").bind({
mousedown:function(){loopVideo();console.log("#info-mousedown");},
mousemove:function(){loopVideo();console.log("#info-mousemove");}
,click:function(){loopVideo();console.log("#info-click");}
});


$("#container").bind({
	mousedown:function(){loopVideo();},
	mousemove:function(){loopVideo();}
	,click:function(){loopVideo();}
});



var Volume=1;

$("#soundli").bind("click", function(event){
	event.stopPropagation();
});


function sound(){
    if(Volume){
	$("#bg_muisc")[0].volume=0;
	$("#audioNotice")[0].volume=0;
	console.log("1="+$("#bg_muisc")[0].volume);
	Volume=0;
		$("#soundimg").attr("src","view/images/soundnone.png");
	}
else{
	$("#bg_muisc")[0].volume=1;
	$("#audioNotice")[0].volume=1;
	console.log("0="+$("#bg_muisc")[0].volume);
	Volume=1;
	$("#soundimg").attr("src","view/images/soundup.png");
}

}


var isDown = false;
var initialTop = 0;
var divTop = 0;

var move = $(".move");
var moveBlock = $(".moveBlock");

//var lydtName = "hgsdpb";

//function hidden1() {
//	var block = $(".block");
//	block.animate({
//		"left" : "1035px",
//		"width" : "0px"
//	});
//	tcount = 1;
//}

//function u() {  tcount++;if (tcount > 380)hideMenu(); }



function  showMenu() {

	$(".footer2").hide();
	$(".footer").show();
	$(".container").animate({
		"height" : "1150px"
	});
	$(".block").css("height", "1150px");
	//$(".img").css("left", "-3430px");
	//$(".img").css("top", "-2625px");
	tcount = 1;
}

function hideMenu() {

	$(".container").animate({
		"height" : "1150px"
	});
	$(".block").css("height", "1150px");
	$("#info").hide();
	//$(".img").css("left", "-3430px");
	//$(".img").css("top", "-2625px");
	//hidden1();
	tcount = 1;
	// handleGoHome();
	loopVideo();

}

function load(page,progro) {

	loopVideo();
	//console.log("page=="+page);

	if(typeof(localStorage.getItem(progro))!="undefined" &&localStorage.getItem(progro) != null){
		localStorage.setItem(progro,parseInt(localStorage.getItem(progro)) + 1);		
	}else{
		localStorage.setItem(progro,"1");	
	} 
	$("#infoMove").empty();
	$("#infoMove").html("<h1 style='color:#FFF;'>页面加载中...</h1>");
	$("#infoMove").load(page);
	$("#info").show();
	tcount = 1;

	
}
function loadNum(page,progro) {
	//loopVideo();
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
	// loopVideo();
	GojqId = progro;
	//console.log('loadjq.GojqId='+GojqId);
	//console.log("page=="+page);
	if(typeof(localStorage.getItem(progro))!="undefined" &&localStorage.getItem(progro) != null){
		localStorage.setItem(progro,parseInt(localStorage.getItem(progro)) + 1);
	}else{
		localStorage.setItem(progro,"1");
	}
	$("#infoMove").empty();
	$("#infoMove").html("<h1 style='color:#FFF;'>页面加载中...</h1>");
	$("#infoMove").load(page);
	$("#info").show();
	tcount = 1;


}

   //localStorage.setItem("localPosition","106.713574,26.588066");
 //localStorage.setItem("localPosition","104.968373,24.954901"); //万峰林
localStorage.setItem("localPosition","106.656722,26.622973");  //贵阳
   

