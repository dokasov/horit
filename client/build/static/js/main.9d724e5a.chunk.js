(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(47)},33:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(15),i=a.n(l),d=(a(32),a(33),a(8)),c=a(9),r=a(11),u=a(10),o=a(3),h=a(12),m=a(7),b=a.n(m),p=function(e){function t(){return Object(d.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"addClass",value:function(){var e=this.state.classes;e.push({id:b.a.v4(),name:"",schedules:[{id:b.a.v4(),timetables:[{id:b.a.v4(),days:[],hours:{ini:"06:00",end:"07:00"}}]}]}),this.setState({classes:e})}},{key:"deleteClass",value:function(e){var t=this.state.classes,a=t.findIndex(function(t){return t.id===e});t.splice(a,1),this.setState({classes:t})}},{key:"addSchedule",value:function(e){var t=this.state.classes,a=t.findIndex(function(t){return t.id===e});t[a].schedules.push({id:b.a.v4(),timetables:[{id:b.a.v4(),days:[],hours:{ini:"06:00",end:"07:00"}}]}),this.setState({classes:t})}},{key:"deleteSchedule",value:function(e,t){var a=this.state.classes,s=a.findIndex(function(t){return t.id===e}),n=a[s].schedules.findIndex(function(e){return e.id===t});a[s].schedules.splice(n,1),this.setState({classes:a})}},{key:"addTimetable",value:function(e,t){var a=this.state.classes,s=a.findIndex(function(t){return t.id===e}),n=a[s].schedules.findIndex(function(e){return e.id===t});a[s].schedules[n].timetables.push({id:b.a.v4(),days:[],hours:{ini:"06:00",end:"07:00"}}),this.setState({classes:a})}},{key:"deleteTimetable",value:function(e,t,a){var s=this.state.classes,n=s.findIndex(function(t){return t.id===e}),l=s[n].schedules.findIndex(function(e){return e.id===t}),i=s[n].schedules[l].timetables.findIndex(function(e){return e.id===a});s[n].schedules[l].timetables.splice(i,1),this.setState({classes:s})}},{key:"changeName",value:function(e,t){var a=this.state.classes;a[e].name=t,this.setState({classes:a})}},{key:"changeHoursIni",value:function(e,t,a,s){var n=this.state.classes;n[e].schedules[t].timetables[a].hours.ini=s,this.setState({classes:n})}},{key:"changeHoursEnd",value:function(e,t,a,s){var n=this.state.classes;n[e].schedules[t].timetables[a].hours.end=s,this.setState({classes:n})}},{key:"changeDaysChecked",value:function(e,t,a,s,n){var l=this.state.classes,i=l[e].schedules[t].timetables[a].days.findIndex(function(e){return e===s});!0===n&&-1===i?l[e].schedules[t].timetables[a].days.push(s):!1===n&&-1!==i&&l[e].schedules[t].timetables[a].days.splice(i,1),this.setState({classes:l})}}]),t}(s.Component),y=a(58),f=a(59),g=a(53),E=a(51),v=a(48),k=a(55),S=a(56),C=a(61),O=a(60),j=a(49),T=a(50),D=a(54),N=a(52),I=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={days:["Mo","Tu","We","Th","Fr","Sa","Su"]},a.changeDaysChecked=a.changeDaysChecked.bind(Object(o.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"changeDaysChecked",value:function(e,t){this.props.changeDaysChecked(this.props.index,e,t)}},{key:"render",value:function(){for(var e=this,t=["06:00"],a=[],s=7;s<22;s++)s<10?(t.push("0"+s+":00"),a.push("0"+s+":00")):(t.push(s+":00"),a.push(s+":00"));return a.push("22:00"),n.a.createElement(v.a,{sm:12,md:6,lg:4},n.a.createElement(j.a,{style:{marginBottom:10,fontSize:14}},n.a.createElement(T.a,null,n.a.createElement("div",null,this.state.days.map(function(t,a){return e.props.days.find(function(e){return e===t})?n.a.createElement(H,{day:t,key:a,checkedVar:!0,changeDaysChecked:e.changeDaysChecked}):n.a.createElement(H,{day:t,key:a,checkedVar:!1,changeDaysChecked:e.changeDaysChecked})})),n.a.createElement(E.a,{row:!0,style:{margin:0}},n.a.createElement(N.a,{sm:4,for:"iniTime"},"Ini"),n.a.createElement(v.a,{sm:8},n.a.createElement("select",{name:"time",id:"iniTime",value:this.props.hours.ini,onChange:function(t){e.props.changeHoursIni(e.props.index,t.target.value)}},t.map(function(e,t){return n.a.createElement("option",{key:b.a.v4()},e)})))),n.a.createElement(E.a,{row:!0,style:{margin:0}},n.a.createElement(N.a,{sm:4,for:"endTime"},"End"),n.a.createElement(v.a,{sm:8},n.a.createElement("select",{name:"time",id:"finTime",value:this.props.hours.end,onChange:function(t){e.props.changeHoursEnd(e.props.index,t.target.value)}},a.map(function(e,t){return n.a.createElement("option",{key:b.a.v4(),value:e},e)})))),n.a.createElement(g.a,{style:{marginTop:10,fontSize:14},color:"danger",onClick:function(t){t.preventDefault(),e.props.deleteTimetable(e.props.id)}},n.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})," Box"))))}}]),t}(s.Component),H=function(e){function t(){return Object(d.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"pretty p-default p-smooth p-bigger",style:{marginBottom:8}},n.a.createElement("input",{type:"checkbox",defaultChecked:this.props.checkedVar,onChange:function(t){e.props.changeDaysChecked(e.props.day,t.target.checked)}}),n.a.createElement("div",{className:"state p-primary"},n.a.createElement("label",null,this.props.day)))}}]),t}(s.Component),w=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).deleteTimetable=a.deleteTimetable.bind(Object(o.a)(a)),a.changeHoursIni=a.changeHoursIni.bind(Object(o.a)(a)),a.changeHoursEnd=a.changeHoursEnd.bind(Object(o.a)(a)),a.changeDaysChecked=a.changeDaysChecked.bind(Object(o.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"deleteTimetable",value:function(e){this.props.deleteTimetable(this.props.id,e)}},{key:"changeHoursIni",value:function(e,t){this.props.changeHoursIni(this.props.index,e,t)}},{key:"changeHoursEnd",value:function(e,t){this.props.changeHoursEnd(this.props.index,e,t)}},{key:"changeDaysChecked",value:function(e,t,a){this.props.changeDaysChecked(this.props.index,e,t,a)}},{key:"render",value:function(){var e=this;return n.a.createElement(j.a,{style:{marginTop:20}},n.a.createElement(T.a,null,n.a.createElement(D.a,null,this.props.timetables.map(function(t,a){return n.a.createElement(I,{days:t.days,key:t.id,hours:t.hours,changeDaysChecked:e.changeDaysChecked,deleteTimetable:e.deleteTimetable,id:t.id,changeHoursIni:e.changeHoursIni,changeHoursEnd:e.changeHoursEnd,index:a})}),n.a.createElement("div",null,n.a.createElement(g.a,{color:"primary",style:{fontSize:14,marginLeft:15},onClick:function(t){t.preventDefault(),e.props.addTimetable(e.props.id)}},n.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})," Box"))),n.a.createElement(g.a,{color:"danger",style:{fontSize:14},className:"pull-right",onClick:function(t){t.preventDefault(),e.props.deleteSchedule(e.props.id)}},n.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})," Schedule")))}}]),t}(s.Component),x=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(o.a)(a)),a.state={collapse:!1,rotated:!1},a.deleteSchedule=a.deleteSchedule.bind(Object(o.a)(a)),a.addTimetable=a.addTimetable.bind(Object(o.a)(a)),a.deleteTimetable=a.deleteTimetable.bind(Object(o.a)(a)),a.changeName=a.changeName.bind(Object(o.a)(a)),a.changeHoursIni=a.changeHoursIni.bind(Object(o.a)(a)),a.changeHoursEnd=a.changeHoursEnd.bind(Object(o.a)(a)),a.changeDaysChecked=a.changeDaysChecked.bind(Object(o.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"deleteSchedule",value:function(e){this.props.deleteSchedule(this.props.id,e)}},{key:"addTimetable",value:function(e){this.props.addTimetable(this.props.id,e)}},{key:"deleteTimetable",value:function(e,t){this.props.deleteTimetable(this.props.id,e,t)}},{key:"changeName",value:function(e){this.props.changeName(this.props.index,e.target.value)}},{key:"changeHoursIni",value:function(e,t,a){this.props.changeHoursIni(this.props.index,e,t,a)}},{key:"changeHoursEnd",value:function(e,t,a){this.props.changeHoursEnd(this.props.index,e,t,a)}},{key:"changeDaysChecked",value:function(e,t,a,s){this.props.changeDaysChecked(this.props.index,e,t,a,s)}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse,rotated:!this.state.rotated})}},{key:"render",value:function(){var e=this,t=this.props.schedules.map(function(t,a){return n.a.createElement(w,{id:t.id,key:t.id,deleteSchedule:e.deleteSchedule,timetables:t.timetables,addTimetable:e.addTimetable,deleteTimetable:e.deleteTimetable,changeHoursIni:e.changeHoursIni,changeHoursEnd:e.changeHoursEnd,changeDaysChecked:e.changeDaysChecked,index:a})});return n.a.createElement("div",null,n.a.createElement(E.a,{row:!0},n.a.createElement(g.a,{color:"danger",style:{fontSize:14,marginLeft:10,paddingTop:2,paddingBottom:2},onClick:function(t){t.preventDefault(),e.props.deleteClass(e.props.id)}},n.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),n.a.createElement(v.a,{xs:10,md:8,lg:5},n.a.createElement(k.a,{style:{height:30}},n.a.createElement(S.a,{defaultValue:this.props.name,style:{fontSize:14},onBlur:this.changeName}),n.a.createElement(C.a,{addonType:"prepend"},n.a.createElement(g.a,{onClick:this.toggle,style:{paddingTop:3}},n.a.createElement("i",{className:"fa fa-caret-"+(this.state.rotated?"up":"down"),"aria-hidden":"true"})))))),n.a.createElement(O.a,{isOpen:this.state.collapse},n.a.createElement(v.a,{lg:12,xl:9},n.a.createElement(j.a,null,n.a.createElement(T.a,null,n.a.createElement("h5",{style:{textAlign:"center"}},"Possible schedules for this class"),t,n.a.createElement(g.a,{color:"primary",style:{marginTop:15,fontSize:14},onClick:function(t){t.preventDefault(),e.props.addSchedule(e.props.id)}},n.a.createElement("i",{className:"fa fa-plus rotate","aria-hidden":"true"})," Schedule")))),n.a.createElement("br",null)))}}]),t}(s.Component),W=(a(45),a(57)),F=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={daysRaw:[],daysClean:[],classesWithColor:a.props.classesWithColor},a.state.daysRaw=a.arrangeClassesByDay(a.props.classesWithSchedule),a.state.daysClean=a.organizeDays(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"newWeekDays",value:function(){return[{day:"Mo",slots:[]},{day:"Tu",slots:[]},{day:"We",slots:[]},{day:"Th",slots:[]},{day:"Fr",slots:[]},{day:"Sa",slots:[]},{day:"Su",slots:[]}]}},{key:"arrangeClassesByDay",value:function(e){for(var t=this.newWeekDays(),a=0;a<e.length;a++)for(var s=0;s<e[a].timetables.length;s++)for(var n=0;n<e[a].timetables[s].days.length;n++)"Mo"===e[a].timetables[s].days[n]&&t[0].slots.push(this.newSlot(e[a],s)),"Tu"===e[a].timetables[s].days[n]&&t[1].slots.push(this.newSlot(e[a],s)),"We"===e[a].timetables[s].days[n]&&t[2].slots.push(this.newSlot(e[a],s)),"Th"===e[a].timetables[s].days[n]&&t[3].slots.push(this.newSlot(e[a],s)),"Fr"===e[a].timetables[s].days[n]&&t[4].slots.push(this.newSlot(e[a],s)),"Sa"===e[a].timetables[s].days[n]&&t[5].slots.push(this.newSlot(e[a],s)),"Su"===e[a].timetables[s].days[n]&&t[6].slots.push(this.newSlot(e[a],s));return t}},{key:"newSlot",value:function(e,t){return{color:this.checkColor(e.classId),name:e.className,ini:e.timetables[t].hours.ini,end:e.timetables[t].hours.end}}},{key:"checkColor",value:function(e){for(var t=0;t<this.state.classesWithColor.length;t++)if(this.state.classesWithColor[t].id===e)return this.state.classesWithColor[t].color}},{key:"organizeDays",value:function(){for(var e=this.state.daysRaw,t=this.newWeekDays(),a=0;a<e.length;a++)for(var s=0;s<e[a].slots.length;s++)t[a].slots.push(JSON.parse(JSON.stringify(e[a].slots[s]))),t[a].slots[s].ini=parseInt(e[a].slots[s].ini.substr(0,2),10),"00"===e[a].slots[s].end.substr(3,2)?t[a].slots[s].end=parseInt(e[a].slots[s].end.substr(0,2),10)-1:t[a].slots[s].end=parseInt(e[a].slots[s].end.substr(0,2),10);for(var n=0;n<t.length;n++)t[n].slots.sort(function(e,t){return e.ini<t.ini?-1:1});return t}},{key:"render",value:function(){var e=[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],t=JSON.parse(JSON.stringify(this.state.daysClean)).map(function(t,a){var s=!1,l=e.map(function(e){for(var a=0;a<t.slots.length;a++){var l=!1,i=void 0,d=void 0;if(e===t.slots[a].ini&&(s=!0),e===t.slots[a].end&&(s=!1,l=!0,i=t.slots[a].color,d=t.slots[a].name,t.slots.splice(a,1)),s)return n.a.createElement("tr",{key:b.a.v4(),style:{background:t.slots[a].color}},n.a.createElement("td",null,t.slots[a].name||"-"));if(l)return n.a.createElement("tr",{key:b.a.v4(),style:{background:i}},n.a.createElement("td",null,d||"-"))}return n.a.createElement("tr",{key:b.a.v4()},n.a.createElement("td",null,"-"))});return n.a.createElement("td",{style:{margin:0,padding:0},key:b.a.v4()},n.a.createElement(W.a,{size:"sm",style:{margin:0,padding:0}},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,t.day)),l)))});return n.a.createElement("div",{style:{fontSize:11}},n.a.createElement(W.a,{bordered:!0,style:{width:800}},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{style:{margin:0,padding:0}},n.a.createElement(W.a,{size:"sm",style:{margin:0,padding:0}},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Time")),n.a.createElement("tr",null,n.a.createElement("td",null,"6:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"7:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"8:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"9:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"10:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"11:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"12:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"13:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"14:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"15:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"16:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"17:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"18:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"19:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"20:00")),n.a.createElement("tr",null,n.a.createElement("td",null,"21:00"))))),t))),n.a.createElement("hr",null))}}]),t}(s.Component),z=function(e){function t(){return Object(d.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=["#e63737","#5a7aed","#69db40","#fff947","#ed79c3","#de823c"],a=0;a<this.props.classesName.length;a++)if(a<6)e.push({name:this.props.classesName[a].name,id:this.props.classesName[a].id,color:t[a]});else{var s="#000000".replace(/0/g,function(){return(~~(16*Math.random())).toString(16)});e.push({name:this.props.classesName[a].name,id:this.props.classesName[a].id,color:s})}var l=this.props.goodCombs.map(function(t){return n.a.createElement(F,{classesWithSchedule:t,classesWithColor:e,key:b.a.v4()})});return n.a.createElement("div",null,n.a.createElement("div",{style:{marginBottom:15}},l.length," possible combinations were generated:"),l)}}]),t}(s.PureComponent),M=(a(46),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).state={classes:e.newClasses(),goodCombs:[],classesName:[]},e.addClass=e.addClass.bind(Object(o.a)(e)),e.deleteClass=e.deleteClass.bind(Object(o.a)(e)),e.addSchedule=e.addSchedule.bind(Object(o.a)(e)),e.deleteSchedule=e.deleteSchedule.bind(Object(o.a)(e)),e.addTimetable=e.addTimetable.bind(Object(o.a)(e)),e.deleteTimetable=e.deleteTimetable.bind(Object(o.a)(e)),e.changeName=e.changeName.bind(Object(o.a)(e)),e.changeHoursIni=e.changeHoursIni.bind(Object(o.a)(e)),e.changeHoursEnd=e.changeHoursEnd.bind(Object(o.a)(e)),e.changeDaysChecked=e.changeDaysChecked.bind(Object(o.a)(e)),e.ready=e.ready.bind(Object(o.a)(e)),e.test=e.test.bind(Object(o.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"newClasses",value:function(){return Array(4).fill(null).map(function(){return{id:b.a.v4(),name:"",schedules:[{id:b.a.v4(),timetables:[{id:b.a.v4(),days:[],hours:{ini:"00:00",end:"00:00"}}]}]}})}},{key:"test",value:function(){var e=this;this.setState({classes:this.newClasses()},function(){for(var t=e.state.classes,a=0;a<t.length;a++)0===a&&(t[a].name="F\xeds. B\xe1s. I",e.deleteSchedule(t[a].id),e.addSchedule(t[a].id),e.addTimetable(t[a].id,t[a].schedules[0].id),e.addSchedule(t[a].id),e.addTimetable(t[a].id,t[a].schedules[1].id),e.addSchedule(t[a].id),e.addTimetable(t[a].id,t[a].schedules[2].id),e.addSchedule(t[a].id),e.addTimetable(t[a].id,t[a].schedules[3].id),t[a].schedules[0].timetables[0].days=["Mo"],t[a].schedules[0].timetables[0].hours.ini="16:00",t[a].schedules[0].timetables[0].hours.end="18:00",t[a].schedules[0].timetables[1].days=["We","Fr"],t[a].schedules[0].timetables[1].hours.ini="08:00",t[a].schedules[0].timetables[1].hours.end="10:00",t[a].schedules[1].timetables[0].days=["Mo"],t[a].schedules[1].timetables[0].hours.ini="12:00",t[a].schedules[1].timetables[0].hours.end="14:00",t[a].schedules[1].timetables[1].days=["We","Fr"],t[a].schedules[1].timetables[1].hours.ini="08:00",t[a].schedules[1].timetables[1].hours.end="10:00",t[a].schedules[2].timetables[0].days=["Mo"],t[a].schedules[2].timetables[0].hours.ini="14:00",t[a].schedules[2].timetables[0].hours.end="16:00",t[a].schedules[2].timetables[1].days=["We","Fr"],t[a].schedules[2].timetables[1].hours.ini="12:00",t[a].schedules[2].timetables[1].hours.end="14:00",t[a].schedules[3].timetables[0].days=["Mo"],t[a].schedules[3].timetables[0].hours.ini="18:00",t[a].schedules[3].timetables[0].hours.end="20:00",t[a].schedules[3].timetables[1].days=["We","Fr"],t[a].schedules[3].timetables[1].hours.ini="12:00",t[a].schedules[3].timetables[1].hours.end="14:00"),1===a&&(t[a].name="F\xeds. Exp. I",e.deleteSchedule(t[a].id),e.addSchedule(t[a].id),e.addSchedule(t[a].id),e.addSchedule(t[a].id),e.addSchedule(t[a].id),e.addSchedule(t[a].id),t[a].schedules[0].timetables[0].days=["We","Fr"],t[a].schedules[0].timetables[0].hours.ini="08:00",t[a].schedules[0].timetables[0].hours.end="10:00",t[a].schedules[1].timetables[0].days=["We","Fr"],t[a].schedules[1].timetables[0].hours.ini="10:00",t[a].schedules[1].timetables[0].hours.end="12:00",t[a].schedules[2].timetables[0].days=["We","Fr"],t[a].schedules[2].timetables[0].hours.ini="12:00",t[a].schedules[2].timetables[0].hours.end="14:00",t[a].schedules[3].timetables[0].days=["We","Fr"],t[a].schedules[3].timetables[0].hours.ini="14:00",t[a].schedules[3].timetables[0].hours.end="16:00",t[a].schedules[4].timetables[0].days=["We","Fr"],t[a].schedules[4].timetables[0].hours.ini="16:00",t[a].schedules[4].timetables[0].hours.end="18:00"),2===a&&(t[a].name="\xc1lg. Lin.",e.deleteSchedule(t[a].id),e.addSchedule(t[a].id),e.addSchedule(t[a].id),e.addSchedule(t[a].id),e.addTimetable(t[a].id,t[a].schedules[2].id),t[a].schedules[0].timetables[0].days=["Mo","We","Fr"],t[a].schedules[0].timetables[0].hours.ini="16:00",t[a].schedules[0].timetables[0].hours.end="18:00",t[a].schedules[1].timetables[0].days=["Mo","Tu","Th"],t[a].schedules[1].timetables[0].hours.ini="12:00",t[a].schedules[1].timetables[0].hours.end="14:00",t[a].schedules[2].timetables[0].days=["Mo"],t[a].schedules[2].timetables[0].hours.ini="14:00",t[a].schedules[2].timetables[0].hours.end="16:00",t[a].schedules[2].timetables[1].days=["Tu","Th"],t[a].schedules[2].timetables[1].hours.ini="06:00",t[a].schedules[2].timetables[1].hours.end="08:00"),3===a&&(t[a].name="C\xe1lc. I",e.deleteSchedule(t[a].id),e.addSchedule(t[a].id),e.addSchedule(t[a].id),e.addSchedule(t[a].id),e.addTimetable(t[a].id,t[a].schedules[2].id),e.addSchedule(t[a].id),t[a].schedules[0].timetables[0].days=["Mo","Tu","Th"],t[a].schedules[0].timetables[0].hours.ini="06:00",t[a].schedules[0].timetables[0].hours.end="08:00",t[a].schedules[1].timetables[0].days=["Mo","Tu","Th"],t[a].schedules[1].timetables[0].hours.ini="12:00",t[a].schedules[1].timetables[0].hours.end="14:00",t[a].schedules[2].timetables[0].days=["Mo"],t[a].schedules[2].timetables[0].hours.ini="10:00",t[a].schedules[2].timetables[0].hours.end="12:00",t[a].schedules[2].timetables[1].days=["We","Fr"],t[a].schedules[2].timetables[1].hours.ini="14:00",t[a].schedules[2].timetables[1].hours.end="16:00",t[a].schedules[3].timetables[0].days=["Mo","We","Fr"],t[a].schedules[3].timetables[0].hours.ini="06:00",t[a].schedules[3].timetables[0].hours.end="08:00");e.setState({classes:t})})}},{key:"ready",value:function(){var e=this;fetch("/schedule",{method:"POST",body:JSON.stringify(this.state.classes),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){return e.received(t.combs)}).catch(function(e){return console.log("Request failure: ",e)})}},{key:"received",value:function(e){for(var t=[],a=0;a<this.state.classes.length;a++)t.push({name:this.state.classes[a].name,id:this.state.classes[a].id});this.setState({goodCombs:e,classesName:t})}},{key:"render",value:function(){var e=this,t=this.state.classes.map(function(t,a){return n.a.createElement(x,{key:t.id,id:t.id,name:t.name,schedules:t.schedules,deleteClass:e.deleteClass,deleteSchedule:e.deleteSchedule,addSchedule:e.addSchedule,addClass:e.addClass,deleteTimetable:e.deleteTimetable,addTimetable:e.addTimetable,changeName:e.changeName,changeHoursIni:e.changeHoursIni,changeHoursEnd:e.changeHoursEnd,changeDaysChecked:e.changeDaysChecked,index:a})}),a=n.a.createElement(z,{goodCombs:this.state.goodCombs,classesName:this.state.classesName});return n.a.createElement("div",{className:"App"},n.a.createElement(y.a,null,n.a.createElement(f.a,null,t),n.a.createElement(g.a,{color:"primary",onClick:this.addClass,style:{fontSize:14}},n.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})," Class")," ",n.a.createElement(g.a,{color:"success",onClick:this.ready,style:{fontSize:14}},n.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})," Ready")," ",n.a.createElement(g.a,{color:"primary",onClick:this.test,style:{fontSize:14}},n.a.createElement("i",{className:"fa fa-align-justify","aria-hidden":"true"})," Test"),n.a.createElement("div",{style:{marginTop:20}},a)))}}]),t}(p));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.9d724e5a.chunk.js.map