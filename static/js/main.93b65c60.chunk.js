(this["webpackJsonpne-kadar-verdin"]=this["webpackJsonpne-kadar-verdin"]||[]).push([[0],{11:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),l=a.n(s),i=(a(11),a(5)),c=a(1),o=a.n(c),d=a(4),m=a.n(d);const h={2019:{18e3:.15,22e3:.2,58e3:.27,last:.35},2018:{14800:.15,19200:.2,86e3:.27,last:.35},2017:{13e3:.15,17e3:.2,8e4:.27,last:.35},2016:{12600:.15,17400:.2,39e3:.27,last:.35},2015:{12e3:.15,17e3:.2,8e4:.27,last:.35},2014:{11e3:.15,16e3:.2,7e4:.27,last:.35},2013:{10700:.15,15300:.2,68e3:.27,last:.35},2012:{1e4:.15,15e3:.2,63e3:.27,last:.35},2011:{9400:.15,13600:.2,57e3:.27,last:.35},2010:{8800:.15,13200:.2,74200:.27,last:.35},2009:{8800:.15,13200:.2,28e3:.27,last:.35}},u={2019:6.57,2018:4.84,2017:3.64,2016:3.01,2015:2.72,2014:2.18,2013:1.9,2012:1.79,2011:1.67,2010:1.5,2009:1.54};const v=e=>{function t(e,t,a){let n,r=t,s=0,l=0;return Object.keys(e).forEach(t=>{if(r>0){const i=e[t];n="last"!==t&&r>t?t*i:r*i,r-=t,s+=function(e,t){return t/u[e]}(a,n),l+=n}}),{total_tax:l,usd_tax:s}}return function(e,a){let n=0,r=0;return Object.keys(a).forEach(s=>{const l=t(e[s],a[s],s),i=l.total_tax,c=l.usd_tax;n+=i,r+=c}),{result:n,resultUSD:r}}(h,e)};a(16);class p extends n.Component{constructor(e){super(e),this.handleChange=(e,t)=>{this.setState({wages:Object(i.a)({},this.state.wages,{[e]:t})})},this.handleShowResults=()=>{const e=v(this.state.wages),t=e.result,a=e.resultUSD;this.setState({result:t,resultUSD:a,stage:"result"})},this.handleShowData=()=>{this.setState({stage:"data"})},this.handleShare=()=>{const e=document.body,t=(Math.max(document.documentElement.clientWidth,window.innerWidth||0)>640?1280:750)/e.offsetWidth,a=document.querySelector(".remove1"),n=document.querySelector(".remove2");a.classList.add("hidden"),n.classList.add("hidden"),m.a.toPng(e,{height:e.offsetHeight*t,width:e.offsetWidth*t,style:{transform:"scale("+t+")",transformOrigin:"top left",width:e.offsetWidth+"px",height:e.offsetHeight+"px"}}).then(e=>{const t=document.createElement("a");t.download="nekadarverdin.png",t.href=e,t.click(),a.classList.remove("hidden"),n.classList.remove("hidden")})},this.state={wages:{},stage:"data",result:0,resultUSD:0}}render(){return r.a.createElement("div",{className:"Calculator"},"data"===this.state.stage?r.a.createElement("div",{className:"data"},r.a.createElement("p",null,'4A detayl\u0131 hizmet d\xf6k\xfcm\xfcn\xfczdeki y\u0131ll\u0131k "Prime Esas Kazan\xe7 (P.E.K)" de\u011ferini girmeniz yeterlidir.'),r.a.createElement("div",{className:"wages"},Object.keys(h).reverse().map(e=>r.a.createElement("div",{className:"wage",key:e},r.a.createElement("label",null,e,":",r.a.createElement(o.a,{className:"input-numeric",value:this.state.wages[e]||"",minimumValue:"0",currencySymbol:" \u20ba",decimalCharacter:",",digitGroupSeparator:".",onChange:(t,a)=>this.handleChange(e,a),onInvalidPaste:"ignore"}))))),r.a.createElement("button",{onClick:this.handleShowResults},"HESAPLA")):r.a.createElement("div",{className:"result"},r.a.createElement("div",null,"Bug\xfcne kadar devlete do\u011frudan ",r.a.createElement("br",null),"verdi\u011fim vergilerin toplam\u0131:"),r.a.createElement("div",{className:"price"},r.a.createElement(o.a,{className:"priceinput",readOnly:!0,currencySymbol:" $",decimalCharacter:",",digitGroupSeparator:".",value:this.state.resultUSD})),r.a.createElement(o.a,{readOnly:!0,className:"priceinput",currencySymbol:" \u20ba",decimalCharacter:",",digitGroupSeparator:".",value:this.state.result}),r.a.createElement("div",{className:"nekadarverdin"}),r.a.createElement("div",{className:"hashtag"}),r.a.createElement("div",null,r.a.createElement("button",{className:"secondary remove1",onClick:this.handleShare},"G\xd6R\xdcNT\xdc AL"),r.a.createElement("button",{className:"secondary remove2",onClick:this.handleShowData},"TEKRAR D\xdcZENLE"))))}}var E=p;a(17);class g extends n.Component{render(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-wrapper"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"logo"})),r.a.createElement(E,null)),r.a.createElement("footer",null,r.a.createElement("a",{href:"https://github.com/hypeserver/ne-kadar-verdin",target:"_blank",rel:"noopener noreferrer"},"Ne kadar verdin?")," ","GitHub \xfczerinde bar\u0131nd\u0131r\u0131lan a\xe7\u0131k kaynakl\u0131 bir projedir. Bilgilerinizin asla kaydedilmedi\u011fine emin olabilirsiniz.",r.a.createElement("br",null),r.a.createElement("i",null,"Dolar de\u011feri her y\u0131l\u0131n kur seviyesine g\xf6re hesaplan\u0131r.")))}}var f=g;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},6:function(e,t,a){e.exports=a(18)}},[[6,1,2]]]);
//# sourceMappingURL=main.93b65c60.chunk.js.map