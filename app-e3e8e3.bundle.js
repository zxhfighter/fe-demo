webpackJsonp([0],{0:function(e,exports,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r(2);var a=r(6),u=n(a),o=r(7),t=n(o),i=r(90),l=n(i),g=void 0;(0,u["default"])("#menu a").click(function(e){var n=(0,u["default"])(e.target).attr("path");g&&g.dispose(),r.e(1,function(){(0,u["default"])("#main").html("");var e=r(91)("./"+n+".js")["default"];g=new e(t["default"][e.type()]),"Demand"===e.type()&&g.on("loadData",function(){var e=Math.floor(Math.random()*l["default"].length);g.setData&&g.setData(l["default"][e])})})}),(0,u["default"])("#menu a:last").click()},2:function(e,exports,r){var n=r(3);"string"==typeof n&&(n=[[e.id,n,""]]);r(5)(n,{});n.locals&&(e.exports=n.locals)},3:function(e,exports,r){exports=e.exports=r(4)(),exports.push([e.id,".head{height:60px;line-height:60px;position:relative}.head #tanuki-logo{position:absolute;left:10px;top:10px}.head .menu{list-style:none;clear:both;margin-left:30px}.head .menu li{margin:0 10px;float:left}",""])},7:function(e,exports,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){for(var r="",n=0;n<e;n++)r+=p[Math.floor(Math.random()*p.length)];return r}Object.defineProperty(exports,"__esModule",{value:!0});var u=r(8),o=n(u),t=r(89),i=(0,t.range)(48,58).map(function(e){return String.fromCharCode(e)}),l=(0,t.range)(97,123).map(function(e){return String.fromCharCode(e)}),g=(0,t.range)(65,91).map(function(e){return String.fromCharCode(e)}),m="一二三四五六七八九十零壹贰叁肆伍陆柒捌玖拾佰仟万亿兆",p=i.join("")+l.join("")+g.join("")+m;exports["default"]={Chord:{el:"#main",width:500,height:500,title:{show:!0,text:"余弦图",left:"right",top:"20px",right:"auto",bottom:"auto",backgroundColor:"transparent",subtext:"made by zxh",textStyle:{color:"#999"}},legend:{show:!0,left:"auto",top:"auto",right:"auto",bottom:"auto",orient:"horizontal",itemGap:10,itemWidth:60,iconWidth:14,iconHeight:14,data:[{name:"仁和",icon:"rect",textStyle:{}},{name:"仲景",icon:"rect",textStyle:{}},{name:"同仁堂",icon:"rect",textStyle:{}},{name:"九芝堂",icon:"rect",textStyle:{}},{name:"汇仁",icon:"rect",textStyle:{}}],textStyle:{},tooltip:{}},series:[{type:"chord",data:[[0,.0612,.102,.2857,.551],[.0352,0,.2962,.3666,.3021],[.0121,.0675,0,.7036,.2168],[.01,.0378,.3681,0,.5841],[.0264,.0603,.1324,.7809,0]],ringWidth:30,padAngle:3*Math.PI/180,groupTooltip:{show:!0,formatter:function(e){return e.name+" : "+e.value.toFixed(2)}},ribbonTooltip:{show:!0,formatter:function(e){return e.source.name+" => "+e.target.name+" : "+e.source.value.toFixed(2)}}}],color:["#d99","#FFDD89","#957244","#F26223","#abc"],backgroundColor:"transparent"},Demand:{el:"#main",center:"手机",data:[{name:"助手",query:4975,r:1055,up:1,region:"region1"},{name:"苹果",query:92561,r:830,up:-1,region:"region1"},{name:"华为",query:185133,r:801,up:-1,region:"region1"},{name:"定位",query:3018,r:597,up:-1,region:"region1"},{name:"官网",query:4029,r:567,up:-1,region:"region1"},{name:"世界",query:3627,r:559,up:-1,region:"region1"},{name:"360",query:675382,r:509,up:-1,region:"region1"},{name:"小米",query:343344,r:456,up:-1,region:"region1"},{name:"号码",query:1018,r:404,up:1,region:"region2"},{name:"下载",query:20674,r:323,up:-1,region:"region2"},{name:"乐视",query:281475,r:319,up:1,region:"region2"},{name:"三星",query:91515,r:304,up:-1,region:"region2"},{name:"qq",query:695319,r:288,up:-1,region:"region2"},{name:"80s",query:267584,r:276,up:-1,region:"region2"},{name:"排行",query:321,r:253,up:1,region:"region2"},{name:"百度",query:622493,r:253,up:1,region:"region2"},{name:"透明手机",query:18042,r:251,up:-1,region:"region3"},{name:"透明",query:1225,r:250,up:1,region:"region3"},{name:"oppo",query:47668,r:239,up:-1,region:"region3"},{name:"泰拉瑞",query:70,r:217,up:-1,region:"region3"},{name:"电脑",query:15698,r:206,up:-1,region:"region3"},{name:"软件",query:7573,r:205,up:-1,region:"region3"},{name:"1024",query:103890,r:203,up:-1,region:"region3"},{name:"vivo",query:67601,r:195,up:-1,region:"region3"}],startDate:new Date(2015,9,4),endDate:new Date(2016,8,25)},Transfer:{el:"#main",width:800,height:480,title:{show:!0,text:"媒体转移矩阵",subtext:"www.baidu.com",left:"right",top:"bottom",textStyle:{fontSize:"14px",color:"#333"}},legend:{show:!0,left:"auto",top:"0",right:"auto",bottom:"auto",orient:"vertical",itemGap:10,itemWidth:90,iconWidth:14,iconHeight:14,data:["天极","网易","acsis","new balance","nike","百度","adidas"],textStyle:{},tooltip:{}},series:[{type:"chord",share:[100,40,50,20,86,30,29],data:[[.23,.45,.21,.45,.76,.27,.22],[.86,.65,.21,.45,.9,.23,.33],[.97,.44,.21,.66,.19,.45,.44],[.23,.98,.21,.33,.23,.6,.55],[.23,.22,.21,.22,.9,.23,.66],[.87,.53,.21,.11,.22,.27,.77],[.11,.22,.33,.44,.55,.66,.77]]}],color:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ff9","#b15928"],mode:"to"},Map:{el:"#main",title:{show:!0,text:"中国地图1",subtext:"城市销量散点图2",left:"center",top:"top",itemGap:5,textStyle:{fontSize:14,fontFamily:"Microsoft YAHEI",color:"#333"},subtextStyle:{fontSize:12,fontFamily:'"Helvetica Neue", Tahoma, Arial, STHeiti, "Microsoft Yahei", sans-serif;',color:"#999"}},legend:{orient:"vertical",left:"left",top:"top",data:["iphone3","iphoe4"]},label:{province:!1,city:!0},tooltip:{trigger:"item",show:!0},visualMap:{orient:"vertical",type:"continuous",height:200,width:"20px",left:"right",bottom:"40px",text:["高","低"],color:["#bf444c","#f6efa6"],show:!0,calculable:!0},map:{backgroundColor:"#f1f1f1",borderColor:"#333",city:{show:!0,label:!1,radius:[2,10]},showCityName:!1,showProvinceName:!1},series:[{name:"iphone3",type:"map",mapType:"china",data:[{name:"北京",value:(0,o["default"])(20,19e3)},{name:"天津",value:(0,o["default"])(20,19e3)},{name:"上海",value:(0,o["default"])(20,19e3)},{name:"重庆",value:(0,o["default"])(20,19e3)},{name:"河北",value:(0,o["default"])(20,19e3)},{name:"河南",value:(0,o["default"])(20,19e3)},{name:"云南",value:(0,o["default"])(20,19e3)},{name:"辽宁",value:(0,o["default"])(20,19e3)},{name:"黑龙江",value:(0,o["default"])(20,19e3)},{name:"湖南",value:(0,o["default"])(20,19e3)},{name:"安徽",value:(0,o["default"])(20,19e3)},{name:"山东",value:(0,o["default"])(20,19e3)},{name:"新疆",value:(0,o["default"])(20,19e3)},{name:"江苏",value:(0,o["default"])(20,19e3)},{name:"浙江",value:(0,o["default"])(20,19e3)},{name:"江西",value:(0,o["default"])(20,19e3)},{name:"湖北",value:(0,o["default"])(20,19e3)},{name:"广西",value:(0,o["default"])(20,19e3)},{name:"甘肃",value:(0,o["default"])(20,19e3)},{name:"山西",value:(0,o["default"])(20,19e3)},{name:"内蒙古",value:(0,o["default"])(20,19e3)},{name:"陕西",value:(0,o["default"])(20,19e3)},{name:"吉林",value:(0,o["default"])(20,19e3)},{name:"福建",value:(0,o["default"])(20,19e3)},{name:"贵州",value:(0,o["default"])(20,19e3)},{name:"广东",value:(0,o["default"])(20,19e3)},{name:"青海",value:(0,o["default"])(20,19e3)},{name:"西藏",value:(0,o["default"])(20,19e3)},{name:"四川",value:(0,o["default"])(20,19e3)},{name:"宁夏",value:(0,o["default"])(20,19e3)},{name:"海南",value:(0,o["default"])(20,19e3)},{name:"台湾",value:(0,o["default"])(20,19e3)},{name:"香港",value:(0,o["default"])(20,19e3)},{name:"澳门",value:(0,o["default"])(20,19e3)}]},{name:"iphone4",type:"map",mapType:"china",data:[{name:"北京",value:(0,o["default"])(20,19e3)},{name:"天津",value:(0,o["default"])(20,19e3)},{name:"上海",value:(0,o["default"])(20,19e3)},{name:"重庆",value:(0,o["default"])(20,19e3)},{name:"河北",value:(0,o["default"])(20,19e3)},{name:"河南",value:(0,o["default"])(20,19e3)},{name:"云南",value:(0,o["default"])(20,19e3)},{name:"辽宁",value:(0,o["default"])(20,19e3)},{name:"黑龙江",value:(0,o["default"])(20,19e3)},{name:"湖南",value:(0,o["default"])(20,19e3)},{name:"安徽",value:(0,o["default"])(20,19e3)},{name:"山东",value:(0,o["default"])(20,19e3)},{name:"新疆",value:(0,o["default"])(20,19e3)},{name:"江苏",value:(0,o["default"])(20,19e3)},{name:"浙江",value:(0,o["default"])(20,19e3)},{name:"江西",value:(0,o["default"])(20,19e3)},{name:"湖北",value:(0,o["default"])(20,19e3)},{name:"广西",value:(0,o["default"])(20,19e3)},{name:"甘肃",value:(0,o["default"])(20,19e3)},{name:"山西",value:(0,o["default"])(20,19e3)},{name:"内蒙古",value:(0,o["default"])(20,19e3)},{name:"陕西",value:(0,o["default"])(20,19e3)},{name:"吉林",value:(0,o["default"])(20,19e3)},{name:"福建",value:(0,o["default"])(20,19e3)},{name:"贵州",value:(0,o["default"])(20,19e3)},{name:"广东",value:(0,o["default"])(20,19e3)},{name:"青海",value:(0,o["default"])(20,19e3)},{name:"西藏",value:(0,o["default"])(20,19e3)},{name:"四川",value:(0,o["default"])(20,19e3)},{name:"宁夏",value:(0,o["default"])(20,19e3)},{name:"海南",value:(0,o["default"])(20,19e3)},{name:"台湾",value:(0,o["default"])(20,19e3)},{name:"香港",value:(0,o["default"])(20,19e3)},{name:"澳门",value:(0,o["default"])(20,19e3)}]}],autoTip:!0},WordCluster:{el:"main",series:[{type:"WordCluster",shape:"circle",data:function(){for(var e=[],r=0;r<500;r++)e.push([a(3),(0,o["default"])(1,100)]);return e}()}]}}},90:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=[[{name:"助手",query:4975,r:1055,up:1,region:"region1"},{name:"苹果",query:92561,r:830,up:-1,region:"region1"},{name:"华为",query:185133,r:801,up:-1,region:"region1"},{name:"定位",query:3018,r:597,up:-1,region:"region1"},{name:"官网",query:4029,r:567,up:-1,region:"region1"},{name:"世界",query:3627,r:559,up:-1,region:"region1"},{name:"360",query:675382,r:509,up:-1,region:"region1"},{name:"小米",query:343344,r:456,up:-1,region:"region1"},{name:"号码",query:1018,r:404,up:1,region:"region2"},{name:"下载",query:20674,r:323,up:-1,region:"region2"},{name:"乐视",query:281475,r:319,up:1,region:"region2"},{name:"三星",query:91515,r:304,up:-1,region:"region2"},{name:"qq",query:695319,r:288,up:-1,region:"region2"},{name:"80s",query:267584,r:276,up:-1,region:"region2"},{name:"排行",query:321,r:253,up:1,region:"region2"},{name:"百度",query:622493,r:253,up:1,region:"region2"},{name:"透明手机",query:18042,r:251,up:-1,region:"region3"},{name:"透明",query:1225,r:250,up:1,region:"region3"},{name:"oppo",query:47668,r:239,up:-1,region:"region3"},{name:"泰拉瑞",query:70,r:217,up:-1,region:"region3"},{name:"电脑",query:15698,r:206,up:-1,region:"region3"},{name:"软件",query:7573,r:205,up:-1,region:"region3"},{name:"1024",query:103890,r:203,up:-1,region:"region3"},{name:"vivo",query:67601,r:195,up:-1,region:"region3"}],[{name:"助手",query:4897,r:1254,up:-1,region:"region1"},{name:"苹果",query:102103,r:916,up:1,region:"region1"},{name:"华为",query:182346,r:789,up:-1,region:"region1"},{name:"世界",query:3838,r:698,up:1,region:"region1"},{name:"官网",query:3975,r:667,up:-1,region:"region1"},{name:"360",query:732171,r:614,up:1,region:"region1"},{name:"定位",query:2945,r:576,up:-1,region:"region1"},{name:"小米",query:406618,r:494,up:1,region:"region1"},{name:"下载",query:12567,r:404,up:-1,region:"region2"},{name:"号码",query:1066,r:398,up:1,region:"region2"},{name:"乐视",query:288607,r:374,up:1,region:"region2"},{name:"百度",query:625452,r:309,up:-1,region:"region2"},{name:"三星",query:88573,r:307,up:-1,region:"region2"},{name:"80s",query:276267,r:303,up:1,region:"region2"},{name:"透明手机",query:22374,r:301,up:1,region:"region2"},{name:"透明",query:1260,r:292,up:1,region:"region2"},{name:"qq",query:722588,r:287,up:1,region:"region3"},{name:"排行",query:316,r:281,up:-1,region:"region3"},{name:"1024",query:118584,r:264,up:1,region:"region3"},{name:"泰拉瑞",query:76,r:260,up:1,region:"region3"},{name:"oppo",query:49953,r:246,up:1,region:"region3"},{name:"电脑",query:16194,r:230,up:1,region:"region3"},{name:"软件",query:7611,r:227,up:1,region:"region3"},{name:"电影",query:506822,r:214,up:-1,region:"region3"}],[{name:"助手",query:4293,r:1255,up:-1,region:"region1"},{name:"苹果",query:101590,r:887,up:-1,region:"region1"},{name:"华为",query:180957,r:792,up:-1,region:"region1"},{name:"世界",query:4629,r:712,up:1,region:"region1"},{name:"360",query:756201,r:712,up:1,region:"region1"},{name:"官网",query:3743,r:661,up:-1,region:"region1"},{name:"定位",query:2923,r:608,up:-1,region:"region1"},{name:"小米",query:381282,r:540,up:-1,region:"region1"},{name:"号码",query:1024,r:439,up:-1,region:"region2"},{name:"乐视",query:251027,r:398,up:-1,region:"region2"},{name:"下载",query:11783,r:384,up:-1,region:"region2"},{name:"qq",query:743050,r:338,up:1,region:"region2"},{name:"百度",query:611414,r:311,up:-1,region:"region2"},{name:"三星",query:91024,r:297,up:1,region:"region2"},{name:"排行",query:279,r:291,up:-1,region:"region2"},{name:"透明",query:1237,r:287,up:-1,region:"region2"},{name:"透明手机",query:19849,r:285,up:-1,region:"region3"},{name:"泰拉瑞",query:82,r:257,up:1,region:"region3"},{name:"电脑",query:16587,r:239,up:1,region:"region3"},{name:"oppo",query:48569,r:238,up:-1,region:"region3"},{name:"80s",query:268314,r:233,up:-1,region:"region3"},{name:"软件",query:7481,r:232,up:-1,region:"region3"},{name:"360手机助手",query:51726,r:218,up:1,region:"region3"},{name:"商城",query:2392,r:212,up:1,region:"region3"}]]}});