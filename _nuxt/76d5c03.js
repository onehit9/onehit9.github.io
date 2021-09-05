(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{485:function(t,e,l){var content=l(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(130).default)("9ed678e8",content,!0,{sourceMap:!1})},504:function(t,e,l){"use strict";l(485)},505:function(t,e,l){var r=l(129)(!1);r.push([t.i,".echarts[data-v-345065df]{width:100%;height:700px}",""]),t.exports=r},514:function(t,e,l){"use strict";l.r(e);var r=l(28),n=l(539);l(538);var o={name:"TradeChart",props:{chartData:{type:Array},chartCategory:{type:Array},chartTitle:{type:String}},components:{VChart:n.b},provide:Object(r.a)({},n.a,"vintage"),data:function(){return{option:{backgroundColor:"#fef8ef",feature:{saveAsImage:{}},grid:{left:"10%",right:"10%",top:"5%",bottom:"5%"},title:{text:this.chartTitle,left:"center"},legend:{data:this.chartCategory},tooltip:{formatter:function(t){var e=t.value;return'<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">- 거래일자 : '+e[0]+"<br />- 거래금액 ："+e[1]+"<br/>- 층  ："+e[2]+"<br/>- 면적 ："+e[3]+"<br/>- 거래구분 ："+e[4]+"<br/>- 보증금 ："+e[5]+"<br/>- 월세 ："+e[6]+"<br/></div>"},axisPointer:{type:"cross"}},xAxis:{name:"거래일자",scale:!0,type:"time",distribution:"linear",time:{unit:"day"},splitLine:{lineStyle:{type:"dashed"}},splitNumber:10,nameTextStyle:{fontSize:10}},yAxis:{type:"value",name:"거래금액",splitLine:{lineStyle:{type:"dashed"}},nameTextStyle:{fontSize:10}},series:this.chartData}}},watch:{chartData:{handler:function(){this.option.series=this.chartData},deep:!0}},methods:{downloadChart:function(t){!function(t){var canvas=document.getElementsByTagName("canvas");if(canvas&&canvas.length>0){var e=document.createElement("a");e.download=t+".png",e.href=canvas[0].toDataURL("image/png"),document.body.appendChild(e),e.click(),e.remove()}}(t)}}},c=(l(504),l(64)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("v-chart",{ref:"chart",staticClass:"chart",attrs:{option:t.option}})],1)}),[],!1,null,"345065df",null);e.default=component.exports},517:function(t,e,l){"use strict";var r=l(2),n=l(78).findIndex,o=l(193),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(c)},575:function(t,e,l){"use strict";l.r(e);l(63),l(191),l(79),l(48),l(517),l(44),l(43);var r={name:"AptView",created:function(){this.getInfo()},props:{id:{type:String}},data:function(){return{addr:[],apt:[],silTrade:[],load:null,dealTypes:[],areas:[],floors:[],radio1:"",radio2:"",radio3:"",filters1:[],filters2:[],filters3:[],chartData:[],chartCate:[]}},methods:{getInfo:function(){var t=this;this.$axios.get("/apt/law_code.csv",{params:{}}).then((function(e){var l=[];e.data.replace(/["]+/g,"").split("\n").map((function(t){return l.push(t.split(","))})),t.addr=l[l.findIndex((function(e){return e[0]===t.id.substring(0,10)}))],t.$axios.get("/apt/apt_code.csv",{params:{}}).then((function(e){var l=[];e.data.replace(/["]+/g,"").split("\n").map((function(t){return l.push(t.split(","))})),t.apt=l[l.findIndex((function(e){return e[0]===t.id}))],t.$axios.get("/apt/"+t.id+".csv",{params:{}}).then((function(e){var data=e.data.replace(/["]+/g,"").split("\n"),l=[];data.map((function(t){return!(t.length>0)||l.push(t.split(","))}));var r=[],n=0;l.map((function(e){return r.push({"순번":++n,"아파트코드":e[0],"아파트명":e[1],"면적":e[2],"건축년도":e[3],"취소일":e[4],"취소여부":e[5],"거래금액":e[6],"거래일자":e[9]+"-"+t.dateType(e[8])+"-"+t.dateType(e[7]),"보증금":e[10],"동":e[11],"층":e[12],"지번":e[13],"법정코드":e[14],"월세":e[15],"거래구분":t.dealType(e[16],e[15])})})),r=r.reverse(),t.dealTypes=t.groupKey(r,"거래구분"),t.areas=t.groupKey(r,"면적"),t.floors=t.groupKey(r,"층"),t.silTrade=r,t.trades=r,t.filters1=Object.keys(t.dealTypes),t.filters2=Object.keys(t.areas),t.filters3=Object.keys(t.floors),t.filters1.unshift("전체"),t.filters2.unshift("전체"),t.filters3.unshift("전체"),t.createChart()}))}))}))},dealType:function(t,e){return"N"===t?"매매":parseInt(e)>0?"월세":"전세"},download:function(){this.excelDownload(this.silTrade,"거래결과",this.silTrade[0]["아파트명"])},downloadChart:function(){this.$refs.tradeChart.downloadChart(this.silTrade[0]["아파트명"])},chg:function(){var t=this;this.silTrade=this.trades,""!=this.radio1&&"전체"!=this.radio1?this.silTrade=this.silTrade.filter((function(e){return e["거래구분"]==t.radio1})):this.silTrade=this.silTrade.filter((function(t){return t["거래구분"].length>0})),""!=this.radio2&&"전체"!=this.radio2?this.silTrade=this.silTrade.filter((function(e){return e["면적"]==t.radio2})):this.silTrade=this.silTrade.filter((function(t){return t["면적"].length>0})),""!=this.radio3&&"전체"!=this.radio3?this.silTrade=this.silTrade.filter((function(e){return e["층"]==t.radio3})):this.silTrade=this.silTrade.filter((function(t){return t["층"].length>0})),this.createChart()},createChart:function(){this.chartCate=[],this.chartData=[],this.chartCate.push("매매"),this.chartCate.push("전세"),this.chartCate.push("월세");var dt=[],t=[],e=[];this.silTrade.map((function(l){"매매"==l["거래구분"]?dt.push([l["거래일자"],l["거래금액"],l["층"],l["면적"],l["거래구분"],l["보증금"],l["월세"]]):"전세"==l["거래구분"]?t.push([l["거래일자"],l["보증금"],l["층"],l["면적"],l["거래구분"],l["보증금"],l["월세"]]):e.push([l["거래일자"],l["월세"],l["층"],l["면적"],l["거래구분"],l["보증금"],l["월세"]])}));var l={name:"매매",symbolSize:6,data:dt,markPoint:{symbol:"pin",data:[{type:"max",name:"max"}],itemStyle:{color:"#3A1079"}},type:"scatter"};this.chartData.push(l),l={name:"전세",symbolSize:6,data:t,markPoint:{symbol:"pin",data:[{type:"max",name:"max"}],itemStyle:{color:"#3A1079"}},type:"scatter"},this.chartData.push(l),l={name:"월세",symbolSize:6,data:e,markPoint:{symbol:"pin",data:[{type:"max",name:"max"}],itemStyle:{color:"#3A1079"}},type:"scatter"},this.chartData.push(l)},excelDownload:function(t,e,l){var r=this.$xlsx.utils.json_to_sheet(t),n=this.$xlsx.utils.book_new();this.$xlsx.utils.book_append_sheet(n,r,e),this.$xlsx.writeFile(n,l+".xlsx")},groupKey:function(data,t){return data.reduce((function(e,l){var r=l[t];return void 0===e[r]&&(e[r]=[]),e}),{})},groupBy:function(data,t){return data.reduce((function(e,l){var r=l[t];return void 0===e[r]&&(e[r]=[]),e[r].push(l),e}),{})},dateType:function(t){return parseInt(t)<10?"0"+t:t}}},n=l(64),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-row",{staticStyle:{height:"44px"}},[l("el-col",{staticStyle:{height:"24px","text-align":"left"},attrs:{span:24}},[l("el-button",{attrs:{disabled:!(t.silTrade.length>0),type:"primary",size:"small"},on:{click:t.download}},[t._v("거래내역 엑셀 다운로드"),l("i",{staticClass:"el-icon-download el-icon-right"})]),t._v(" "),l("el-button",{attrs:{disabled:!(t.silTrade.length>0),type:"primary",size:"small"},on:{click:t.downloadChart}},[t._v("차트 이미지 다운로드"),l("i",{staticClass:"el-icon-download el-icon-right"})])],1)],1),t._v(" "),l("el-row",{staticStyle:{height:"24px"}},[l("el-col",{staticStyle:{"font-weight":"bold","text-align":"left"},attrs:{span:6}},[l("i",{staticClass:"el-icon-location-information"}),t._v(" 지역\n    ")]),t._v(" "),l("el-col",{staticStyle:{"text-align":"left"},attrs:{span:18}},[t.addr[1]?l("span",[t._v(t._s(t.addr[1]))]):t._e(),t._v(" "),t.addr[2]?l("span",[l("i",{staticClass:"el-icon-arrow-right"}),t._v(" "+t._s(t.addr[2]))]):t._e(),t._v(" "),t.addr[3]?l("span",[l("i",{staticClass:"el-icon-arrow-right"}),t._v(" "+t._s(t.addr[3]))]):t._e(),t._v(" "),t.addr[4]?l("span",[l("i",{staticClass:"el-icon-arrow-right"}),t._v(" "+t._s(t.addr[4]))]):t._e(),t._v(" "),t.addr[5]?l("span",[l("i",{staticClass:"el-icon-arrow-right"}),t._v(" "+t._s(t.addr[5]))]):t._e()])],1),t._v(" "),l("el-row",{staticStyle:{height:"24px"}},[l("el-col",{staticStyle:{"font-weight":"bold","text-align":"left"},attrs:{span:6}},[l("i",{staticClass:"el-icon-office-building"}),t._v(" 아파트명\n    ")]),t._v(" "),l("el-col",{staticStyle:{"text-align":"left"},attrs:{span:18}},[t.apt[1]?l("span",[t._v(t._s(t.apt[1]))]):t._e()])],1),t._v(" "),t.filters1.length>0?l("el-row",{staticStyle:{height:"44px"}},[l("el-col",{staticStyle:{"font-weight":"bold","text-align":"left"},attrs:{span:6}},[l("i",{staticClass:"el-icon-data-analysis"}),t._v(" 거래구분\n    ")]),t._v(" "),l("el-col",{staticStyle:{height:"24px","text-align":"left","font-weight":"bold"},attrs:{span:18}},[l("div",[l("el-select",{attrs:{placeholder:"거래구분"},on:{change:function(e){return t.chg()}},model:{value:t.radio1,callback:function(e){t.radio1=e},expression:"radio1"}},t._l(t.filters1,(function(t){return l("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)])],1):t._e(),t._v(" "),t.filters2.length>0?l("el-row",{staticStyle:{height:"44px"}},[l("el-col",{staticStyle:{"font-weight":"bold","text-align":"left"},attrs:{span:6}},[l("i",{staticClass:"el-icon-data-analysis"}),t._v(" 면적\n    ")]),t._v(" "),l("el-col",{staticStyle:{height:"24px","text-align":"left","font-weight":"bold"},attrs:{span:18}},[l("div",[l("el-select",{attrs:{placeholder:"면적"},on:{change:function(e){return t.chg()}},model:{value:t.radio2,callback:function(e){t.radio2=e},expression:"radio2"}},t._l(t.filters2,(function(t){return l("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)])],1):t._e(),t._v(" "),t.filters3.length>0?l("el-row",{staticStyle:{height:"44px"}},[l("el-col",{staticStyle:{"font-weight":"bold","text-align":"left"},attrs:{span:6}},[l("i",{staticClass:"el-icon-data-analysis"}),t._v(" 층\n    ")]),t._v(" "),l("el-col",{staticStyle:{height:"24px","text-align":"left","font-weight":"bold"},attrs:{span:16}},[l("div",[l("el-select",{attrs:{placeholder:"층"},on:{change:function(e){return t.chg()}},model:{value:t.radio3,callback:function(e){t.radio3=e},expression:"radio3"}},t._l(t.filters3,(function(t){return l("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)])],1):t._e(),t._v(" "),l("el-row",{staticStyle:{height:"34px"}},[l("el-col",{staticStyle:{height:"24px","text-align":"left"},attrs:{span:24}},[l("i",{staticClass:"el-icon-edit-outline"}),t._v(" 거래내역 "),t.silTrade.length>0?l("span",[t._v(" : "+t._s(t.silTrade.length)+" 건")]):t._e()])],1),t._v(" "),l("el-row",[l("el-col",{attrs:{span:24}},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.silTrade,"header-cell-style":{background:"#000",textAlign:"center"},border:""}},[l("el-table-column",{attrs:{prop:"순번",label:"순번",width:"50"}}),t._v(" "),l("el-table-column",{attrs:{prop:"거래구분",label:"거래구분"}}),t._v(" "),l("el-table-column",{attrs:{prop:"면적",label:"면적"}}),t._v(" "),l("el-table-column",{attrs:{prop:"층",label:"층",width:"40"}}),t._v(" "),l("el-table-column",{attrs:{prop:"건축년도",label:"건축년도"}}),t._v(" "),l("el-table-column",{attrs:{prop:"거래금액",label:"거래금액"}}),t._v(" "),l("el-table-column",{attrs:{prop:"거래일자",label:"거래일자",width:"100"}}),t._v(" "),l("el-table-column",{attrs:{prop:"보증금",label:"보증금"}}),t._v(" "),l("el-table-column",{attrs:{prop:"월세",label:"월세"}})],1)],1)],1),t._v(" "),l("el-row",[l("el-col",{staticStyle:{height:"24px","text-align":"left"},attrs:{span:24}},[l("i",{staticClass:"el-icon-data-line"}),t._v(" Chart\n    ")])],1),t._v(" "),t.chartData.length>0?l("el-row",[l("el-col",{attrs:{span:24}},[l("trade-chart",{ref:"tradeChart",attrs:{chartData:t.chartData,chartCategory:t.chartCate}})],1)],1):t._e()],1)}),[],!1,null,"2f478e45",null);e.default=component.exports;installComponents(component,{TradeChart:l(514).default})}}]);