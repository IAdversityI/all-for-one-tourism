var mouseCount4=0;
var isLeftx=false;
$(function() {
    jQuery.focus = function(slid) {
        var sWidth = $(slid).width(); //获取焦点图的宽度（显示面积）
        var len = $(slid).find("ul li").length; //获取焦点图个数
        var index = 0;
        var picTimer;


        //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
        var btn = "<div class='btnBg'></div><div class='btn'>";
        var x1=0;

        $(".focus").bind("mousemove",function(event){

            if(mouseCount4==0){
                mouseCount4++;
                x1=event.pageX;
                //alert(event.pageX)

            }
            if(isLeftx&&(event.pageX>x1)&&(event.pageX-x1)>50){
                isLeftx=false;
                $(slid+" .pre").click();
                x1=0;

            }
            if(isLeftx&&(x1>event.pageX)&&(x1-event.pageX)>50){
                isLeftx=false;
                $(slid+" .next").click();

                x1=0;

            }

        }).bind("mousedown",function(event){
            isLeftx=true;
        }).bind("mouseup",function(event){
            isLeftx=false;
            mouseCount4=0;
        })
        //     if(isLeftx&&(event.pageX-x1)>700){
        //         isLeftx=false;
        //         $(slid+" .next").click();
        //     x1=0;
        //
        // }
        //     if(isLeftx&&(event.pageX-x1)<-700){
        //         isLeftx=false;
        //
        //         $(slid+" .pre").click();
        //         x1=0;
        //
        //     }
        //     }).bind("mousedown",function(event){
        //         isLeftx=true;
        //     }).bind("mouseup",function(event){
        //         isLeftx=false;
        //         mouseCount4=0;
        //     })

        for(var i=0; i < len; i++) {
            var ii = i+1;
            btn += "<span>"+ii+"</span>";
        }
        btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
        $(slid).append(btn);
        $(slid).find("div.btnBg").css("opacity",0.5);

        //为小按钮添加鼠标滑入事件，以显示相应的内容
        $(slid+" div.btn span").css("opacity",0.4).mouseenter(function() {
            index = $(slid+" .btn span").index(this);
            showPics(index);
        }).eq(0).trigger("mouseenter");

        //上一页、下一页按钮透明度处理
        $(slid+" .preNext").css("opacity",0).hover(function() {
            $(this).stop(true,false).animate({"opacity":"0.7"},300);
        },function() {
            $(this).stop(true,false).animate({"opacity":"0.2"},300);
        });

        //上一页按钮
        //$(slid+" .pre").click(function() {
        ///	index -= 1;
        ///	if(index == -1) {index = len - 1;}
        ///	showPics(index);
        ///});

        //下一页按钮

        $(slid+" .next").click(function() {
            //$(slid+" .next").on("touchstart",function(e){
            index += 1;
            if(index == len) {index = 0;}
            showPics(index);
            moveflag=false;
            return false;
        });
        $(slid+" .pre").click(function() {
            //$(slid+" .pre").on("touchstart",function(e){
            index -= 1;
            if(index == -1) {index = len - 1;}
            showPics(index);
            moveflag=false;
            return false;
        });


        var start_left=0;
        var moveflag=false;
        $(slid).on("touchstart",function(e){

            event.preventDefault();
            if (event.targetTouches.length == 1) {
                var touch = event.targetTouches[0];
                start_top = touch.pageY;
                start_left = touch.pageX;
            }
        });

        $(slid).on("touchmove",function(e){
            event.preventDefault();
            if (event.targetTouches.length == 1) {
                var touch = event.targetTouches[0];
                //moveflag=true;
            }
        });
        $(slid).on("touchend",function(e){
            var touch = event.changedTouches[0];
            if( parseFloat(touch.pageX-start_left)>=30){pre();  start_left=touch.pageX; moveflag=false; }
            else if( parseFloat(touch.pageX-start_left)<=-30) {next();  start_left=touch.pageX; moveflag=false; }
            event.stopPropagation();
        });


//
//		function pre() {
//		index -= 1;
//		if(index == -1) {index = len - 1;}
//		showPics(index);
//
//		};
//		function next(){
//			index += 1;
//			if(index == len) {index = 0;}
//			showPics(index);
//
//		};

        //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
        $(slid+" ul").css("width",sWidth * (len));

        //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
        //$(slid).hover(function() {
        //	clearInterval(picTimer);
        //},function() {
        //	picTimer = setInterval(function() {
        //		showPics(index);
        //		index++;
        //		if(index == len) {index = 0;}
        //	},3000); //此4000代表自动播放的间隔，单位：毫秒
        //}).trigger("mouseleave");
        //

        //显示图片函数，根据接收的index值显示相应的内容
        function showPics(index) { //普通切换
            var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
            $(slid+" ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
            $(slid+" .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
            $(slid+" .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
        }

    };


});