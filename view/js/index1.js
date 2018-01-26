

$(function() {
	
    
	$("#info").hide();

	showMenu();
	var isDown2 = false;
	var initialLeft2 = 0;
	var initialTop2 = 0;
	var divLeft2 = 0;
	var divTop2 = 0;
	var tcount = 0;
	var timeclc;// 定时器ID
	var countMouse=0;
	setInterval("u()", 1000);
	// /鼠标事件 PC

	$(".container").bind("mousemove", function(event) {
		var opposite = getOppositeCoor("container", event);

		if (isDown2) {
			var divl = divLeft2 + (opposite.left - initialLeft2);
			var divt = divTop2 + (opposite.top - initialTop2);
			var height = $(".img").innerHeight();
			if (divt > 0) {
				divt = 0;
			} else if (divt < -(height - $(".container").innerHeight())) {
				divt = -(height - $(".container").innerHeight());
			}
			var width = $(".img").innerWidth();
			if (divl > 0) {
				divl = 0;
			} else if (divl < -(width - 1000)) {
				divl = -(width - 1000);
			}

			$(".img").css({
				'left' : divl,
				'top' : divt
			});

			event.preventDefault();
		}
	});
	$(".container").bind("mousedown", function(event) { // touchstart---"mousedown"
		if (countMouse == 1) {
		isDown2 = true;
		var opposite = getOppositeCoor("container", event);
		initialLeft2 = opposite.left;
		initialTop2 = opposite.top;
		divLeft2 = parseInt($(".img").css("left"));
		divTop2 = parseInt($(".img").css("top"));
		event.preventDefault();
		countMouse = 0;
		}

	});
	$(".container").bind("mouseup", function(event) { // touchend---mouseup
		isDown2 = false;
		initialLeft2 = 0;
		initialTop2 = 0;
		divLeft2 = 0;
		divTop2 = 0;
		event.preventDefault();
         
		setTimeout(function() {
			countMouse = 1;
		}, 100);
	});
	
	//禁止全选
	$("body").bind("selectstart", function(){
        return false;
    });
	
	//视频广告
	// var vList = ['video/33.webm', 'video/4.webm', 'video/5.webm']; // 初始化播放列表
    var vList = ['video/6.webm']; // 初始化播放列表
	var curr = 0 ;
	var down_time = null;
	
	 //当前播放的视频
	function play1() {
	   var video = $("#video2");
	   video.attr("src",vList[curr]);
	   // video[0].play();
        video[0].play();
	   curr++;
	   if (curr >= vList.length-1) curr = 0; // 播放完了，重新播放
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
    	// },10000);   //修改弹出广告时间
    },100000);   //修改弹出广告时间
	}
	$("body").mousedown(loopVideo);
	loopVideo();
});




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

var objImgs = $("#_map");

function big() {
	var obj = $("#container div.img");
	var width = obj.width();
	var height = obj.height();
	
	var leftobj = 0-parseInt($("#_img").css("left"));
	var topobj = 0-parseInt($("#_img").css("top"));
	var wid = width * 1.2;
	var hgt = height * 1.2;
	var pointObj = $("div.img div.point");

	if (hgt <4875) {
		pointObj.each(function(i) {
			var point_w = $(this).width();
			var point_h = $(this).height();
			var left = $(this).css("left");
			var top = $(this).css("top");

			left = left.substring(0, left.length - 2);
			top = top.substring(0, top.length - 2);

			point_w = point_w * 1.1;
			point_h = point_h * 1.1;
			left = left * 1.2;
			top = top * 1.2;
			
			 
			leftobj = -leftobj - (wid - width) / 2;
			topobj = -topobj - (hgt - height) / 2;
			$(this).css("width", point_w);
			$(this).css("height", point_h);
			$(this).css("left", left);
			$(this).css("top", top);

		});
		$("#container div.img").css("width", wid);
		$("#container div.img").css("height", hgt);
		$("#_map").css("width", wid);
		$("#_map").css("height", hgt);

		$(".img").css({
			'left' : leftobj,
			'top' : topobj
		});

		$("#_map").css("left", leftobj);
		$("#_map").css("top", topobj);
	}

	tcount = 1;
}

function small() {
	var obj = $("#container div.img");
	var width = obj.width();
	var height = obj.height();
	var wid = width / 1.2;
	var hgt = height / 1.2;

	var leftobj = 0-parseInt($("#_img").css("left"));
	var topobj = 0-parseInt($("#_img").css("top"));
	var pointObj = $("div.img div.point");

	if (hgt >= 1714) {
		pointObj.each(function(i) {
			var point_w = $(this).width();
			var point_h = $(this).height();
			var left = $(this).css("left");
			var top = $(this).css("top");

			left = left.substring(0, left.length - 2);
			top = top.substring(0, top.length - 2);

			point_w = point_w / 1.1;
			point_h = point_h / 1.1;
			left = left / 1.2;
			top = top / 1.2;

			leftobj = -leftobj + ( width-wid) / 2;
			topobj = -topobj + ( height-hgt) / 2;
			dil = leftobj + wid - 1000;
			dit = topobj + hgt - 1150;
			if (dil < 0)
				leftobj = 1000 - wid;
			if (dit < 0)
				topobj = 1150 - hgt;
			$(this).css("width", point_w);
			$(this).css("height", point_h);
			$(this).css("left", left);
			$(this).css("top", top);

		});
		$("#container div.img").css("width", wid);
		$("#container div.img").css("height", hgt);
		$("#_map").css("width", wid);
		$("#_map").css("height", hgt);
		if(topobj>0)topobj=0
		if(leftobj>0)leftobj=0
		$(".img").css({
			'left' : leftobj,
			'top' : topobj
		});

		$("#_map").css("left", leftobj);
		$("#_map").css("top", topobj);

	}
	tcount = 1;
}

var isDown = false;
var initialTop = 0;
var divTop = 0;
var mousecount3=0;
var move = $(".move");
var moveBlock = $(".moveBlock");

var lydtName = "tiannianglanche";
var BxjjdName="tianniang";
function hidden1() {
	var block = $(".block");
	block.animate({
		"left" : "1035px",
		"width" : "0px"
	});
	tcount = 1;
}

function show(content, num, flag) {
	var y=0;
	var y2=0;
	var block = $(".block");
	block.animate({
		"left" : "60px",
		"width" : "980px"
	});
	mouseupBlock();
	if (content != null) {
		lydtName = content;
	}
	moveBlock.load(lydt[lydtName].pages[num]);

	if (!flag) {
		$("#jqjs").addClass("current");
		$("#tscp").removeClass("current");
		$("#xlzn").removeClass("current");
	} else {
		if (num == 0) {
			$("#jqjs").addClass("current");
			$("#tscp").removeClass("current");
			$("#xlzn").removeClass("current");
		} else if (num == 1) {
			$("#jqjs").removeClass("current");
			$("#tscp").addClass("current");
			$("#xlzn").removeClass("current");
		} else {
			$("#jqjs").removeClass("current");
			$("#tscp").removeClass("current");
			$("#xlzn").addClass("current");
		}
	}

	$(".jdmz_zw").html(lydt[lydtName].nameCn);
	$(".jdmz_yw").html(lydt[lydtName].nameEn);
	
	moveBlock.css("top","0px");
	move.css("top","0px");
	move.unbind();
    //触摸滑动
    move.bind("mousemove",function(event ){
        if(isDown){
            if(mousecount3==0){
                y=event.pageY;
                mousecount3++;
            }
            else{
                var divt  = y2-(y-event.pageY);
                if(divt>0)divt=0;
                else if(divt<(0-($("#moveBlock").innerHeight()-$("#move").innerHeight())))
                {
                    divt=(0-($("#moveBlock").innerHeight()-$("#move").innerHeight()))
                }
                moveBlock.css({'top':divt});
            }
        }
    }).bind("mousedown",function(event ){
        isDown=true;
    }).bind("mouseup",function(event){
        isDown=false;
        mousecount3=0;
        y2 = 0-Math.abs(parseInt($("#moveBlock").css("top")));
    });
}

 
function mouseoverBlock(event){
	
	 
    if(isDown){ 
    	var opposite = getOppositeCoor("move", event);
    	 
        var divt  = divTop+(opposite.top-initialTop);
        var height = moveBlock.innerHeight();

    	 
        if(divt >0 ){
        	divt = 0;
        }else if(divt < -(height- move.innerHeight())){
        
        	divt = - (height-move.innerHeight());
        } 
		
		moveBlock.css({'top':divt});
    }
}



function mousedownBlock(event){
	isDown       = true;
    var opposite = getOppositeCoor("move", event);
    initialTop   = opposite.top;
    divTop       = parseInt(moveBlock.css("top"));
    //alert("done" +initialTop + "," +divTop  );
}
  

function mouseupBlock() {
	isDown = false;
	 initialTop = 0;
	 divTop = 0;
}

function  showMenu() {

	$(".footer2").hide();
	$(".footer").show();
	$(".container").animate({
		"height" : "1150px"
	});
	$(".block").css("height", "1150px");
	$(".img").css("left", "-3430px");
	$(".img").css("top", "-2625px");

	tcount = 1;
}

function hideMenu() {

	$(".container").animate({
		"height" : "1150px"
	});
	$(".block").css("height", "1150px");
	$("#info").hide();
	big();
	big();
	big();
	big();
	big();
	small();

	$(".img").css("left", "-3430px");
	$(".img").css("top", "-2625px");

	hidden1();
	tcount = 1;
}

function load(page) {
	$("#infoMove").load(page);
	$("#info").show();
	tcount = 1;
}

function u() {
	tcount++;
	
	if (tcount > 180)
		hideMenu();
}

