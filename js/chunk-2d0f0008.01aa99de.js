(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0008"],{"9b09":function(e,a,l){"use strict";l.r(a);var o=l("7a23"),t={class:"grid p-fluid"},r={class:"col-12 lg:col-6"},n={class:"card"},s=Object(o["j"])("h5",null,"Linear Chart",-1),i={class:"card flex flex-column align-items-center"},c=Object(o["j"])("h5",{class:"align-self-start"},"Pie Chart",-1),d={class:"card flex flex-column align-items-center"},b=Object(o["j"])("h5",{class:"align-self-start"},"Polar Area Chart",-1),p={class:"col-12 lg:col-6"},g={class:"card"},u=Object(o["j"])("h5",null,"Bar Chart",-1),h={class:"card flex flex-column align-items-center"},f=Object(o["j"])("h5",{class:"align-self-start"},"Doughnut Chart",-1),O={class:"card flex flex-column align-items-center"},C=Object(o["j"])("h5",{class:"align-self-start"},"Radar Chart",-1);function j(e,a,l,j,y,k){var m=Object(o["H"])("Chart");return Object(o["z"])(),Object(o["i"])("div",t,[Object(o["j"])("div",r,[Object(o["j"])("div",n,[s,Object(o["n"])(m,{type:"line",data:y.lineData,options:y.lineOptions},null,8,["data","options"])]),Object(o["j"])("div",i,[c,Object(o["n"])(m,{type:"pie",data:y.pieData,options:y.pieOptions,style:{width:"50%"}},null,8,["data","options"])]),Object(o["j"])("div",d,[b,Object(o["n"])(m,{type:"polarArea",data:y.polarData,options:y.polarOptions,style:{width:"50%"}},null,8,["data","options"])])]),Object(o["j"])("div",p,[Object(o["j"])("div",g,[u,Object(o["n"])(m,{type:"bar",data:y.barData,options:y.barOptions},null,8,["data","options"])]),Object(o["j"])("div",h,[f,Object(o["n"])(m,{type:"doughnut",data:y.pieData,options:y.pieOptions,style:{width:"50%"}},null,8,["data","options"])]),Object(o["j"])("div",O,[C,Object(o["n"])(m,{type:"radar",data:y.radarData,options:y.radarOptions,style:{width:"50%"}},null,8,["data","options"])])])])}var y=l("11f3"),k={themeChangeListener:null,mounted:function(){var e=this;this.themeChangeListener=function(a){a.dark?e.applyDarkTheme():e.applyLightTheme()},y["a"].on("change-theme",this.themeChangeListener),this.isDarkTheme()?this.applyDarkTheme():this.applyLightTheme()},beforeUnmount:function(){y["a"].off("change-theme",this.themeChangeListener)},data:function(){return{lineData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:"#2f4860",borderColor:"#2f4860",tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:"#00bb7e",borderColor:"#00bb7e",tension:.4}]},pieData:{labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},polarData:{datasets:[{data:[11,16,7,3,14],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]},barData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"#2f4860",data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:"#00bb7e",data:[28,48,40,19,86,27,90]}]},radarData:{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},lineOptions:null,pieOptions:null,polarOptions:null,barOptions:null,radarOptions:null}},methods:{isDarkTheme:function(){return!0===this.$appState.darkTheme},applyLightTheme:function(){this.lineOptions={plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}},this.barOptions={plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}},this.pieOptions={plugins:{legend:{labels:{color:"#495057"}}}},this.polarOptions={plugins:{legend:{labels:{color:"#495057"}}},scales:{r:{grid:{color:"#ebedef"}}}},this.radarOptions={plugins:{legend:{labels:{color:"#495057"}}},scales:{r:{grid:{color:"#ebedef"}}}}},applyDarkTheme:function(){this.lineOptions={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}}}},this.barOptions={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}}}},this.pieOptions={plugins:{legend:{labels:{color:"#ebedef"}}}},this.polarOptions={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{r:{grid:{color:"rgba(160, 167, 181, .3)"}}}},this.radarOptions={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{r:{grid:{color:"rgba(160, 167, 181, .3)"}}}}}}},m=l("6b0d"),D=l.n(m);const v=D()(k,[["render",j]]);a["default"]=v}}]);
//# sourceMappingURL=chunk-2d0f0008.01aa99de.js.map