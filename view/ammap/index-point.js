//贵阳
var gy_src = "<iframe scrolling=\"auto\" style=\"width:100%;height:1000px;\" src=\"pages/sssjlist.html?city=520100\" frameborder=\"0\"></iframe>";
//遵义市
var zy_t_src = "<iframe scrolling=\"auto\" style=\"width:100%;height:750px;\" src=\"pages/sssjlist.html?city=520300\" frameborder=\"0\"></iframe>";
//铜仁
var tr_t_src = "<iframe scrolling=\"auto\" style=\"width:100%;height:750px;\" src=\"pages/sssjlist.html?city=520600\" frameborder=\"0\"></iframe>";
//黔东南
var qdn_t_src = "<iframe scrolling=\"auto\" style=\"width:100%;height:750px;\" src=\"pages/sssjlist.html?city=522600\" frameborder=\"0\"></iframe>";
//黔南
var qn_t_src = "<iframe scrolling=\"auto\" style=\"width:100%;height:750px;\" src=\"pages/sssjlist.html?city=522700\" frameborder=\"0\"></iframe>";
//毕节
var bj_t_src = "<iframe scrolling=\"auto\" style=\"width:100%;height:750px;\" src=\"pages/sssjlist.html?city=520500\" frameborder=\"0\"></iframe>";
//六盘水
var lps_t_src = "<iframe scrolling=\"auto\" style=\"width:100%;height:750px;\" src=\"pages/sssjlist.html?city=520200\" frameborder=\"0\"></iframe>";
//安顺
var as_t_src = "<iframe scrolling=\"auto\" style=\"width:100%;height:750px;\" src=\"pages/sssjlist.html?city=520400\" frameborder=\"0\"></iframe>";
//黔西南
var qxn_t_src = "<iframe scrolling=\"auto\" style=\"width:100%;height:750px;\" src=\"pages/sssjlist.html?city=522300\" frameborder=\"0\"></iframe>";

var html="";
var a = "<div class='mapTipText1'><div class='mapTipImg'>";
var b = "</div><div class='mapTipList'><h2>";
var c = "</h2></div>";
var d = "</div>";
 
zy_t = a + "<img src='view/images/XYT.png' alt=''/>" + b + "遵义<span>Zunyi</span>" + c+zy_t_src+d;
tr_t = a + "<img src='view/images/XYT.png' alt=''/>" + b + "铜仁<span>Tongren</span>" + c+tr_t_src+d;
qdn_t = a + "<img src='view/images/XYT.png' alt=''/>" + b + "黔东南<span>Qiandongnan</span>" + c+qdn_t_src+d;
qn_t = a + "<img src='view/images/XYT.png' alt=''/>" + b + "黔南<span>Qiannan</span>" + c+qn_t_src+d;
gy_t = a + "<img src='view/images/XYT.png' alt=''/>" + b + "贵阳<span>Guiyang</span>" + c+gy_src+d;
bj_t = a + "<img src='view/images/XYT.png' alt=''/>" + b + "毕节<span>Bijie</span>" + c+bj_t_src+d;
lps_t = a + "<img src='view/images/XYT.png' alt=''/>" + b + "六盘水<span>Liupanshui</span>" + c+lps_t_src+d;
as_t = a + "<img src='view/images/XYT.png' alt=''/>" + b + "安顺<span>Anshun</span>" + c+as_t_src+d;
qxn_t = a + "<img src='view/images/XYT.png' alt=''/>" + b + "黔西南<span>Qianxinan</span>" + c+qxn_t_src+d;





/***********************************************************/
jq_qialingshan="<iframe scrolling=\"auto\" style=\"width:100%;height:750px;\" src=\"pages/sssj/jqss/jqss-detail-map.html?oId=54 \" frameborder=\"0\"></iframe>";



//map中/各景区名字 点击详情 -（除ID）链接
jq_Url_a="javascript:loadjq('pages/sssj/jqss/jqss-jq-detail.html?oId=";
jq_Url_b="','";
jq_Url_c="');";




//map中/各区县名字 点击详情 -（除ID）链接
qx_des_a="<div class='mapTipText1'><div class='mapTipImg'><img src='view/images/XYT.png' alt=''/></div><div class='mapTipList'><h2><a href=''>";
qx_des_b="<span>旅游目的地</span></a></h2></div><iframe scrolling='auto' style='width:100%;height:750px;' src='pages/sssjlist.html?district=";
qx_des_c="' frameborder='0'></iframe></div>";



