
        function openExam(e){function t(){o.parentNode.removeChild(o)}function i(e){const o=e.data;switch(o.status){case"error":break;case"cancel":t(),window.removeEventListener("message",i);break;case"finish":var n=window.location.href.indexOf("topic")===-1;if(n){var a=document.createElement("a");a.href="new_topic",a.click()}else window.location.reload()}}var o=document.createElement("div"),n="";e&&(n="?exam_topic="+e);var a='<iframe src="https://m.douban.com/people/mine/examination'+n+'" frameborder="0" style="position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;"></iframe>';o.setAttribute("class","exam-wrap"),o.setAttribute("style","position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,.7);"),o.innerHTML=a,window.addEventListener("message",i),document.body.appendChild(o)}
    ;
  ;(function(){var F=8;var B=window.dui||{},e="dui-dialog",x=[],t=null,f=($.browser.msie&&$.browser.version==="6.0")?true:false,D="ontouchstart" in window,d={},r={},E="j_close_dialog",c="dui-dialog",m="dui-dialog-close",a="dui-dialog-shd",q="dui-dialog-content",n="dui-dialog-iframe",j="dui-dialog-msk",p="确定",b="取消",w="提示",l="下载中，请稍候...",i='<div id="{ID}" class="'+c+' {CLS}" style="{CSS_ISHIDE}">                <span class="'+a+'"></span>                <div class="'+q+'">                    {BN_CLOSE}                    {TITLE}                    <div class="bd">{BODY}</div>                </div>            </div>',g='<a href="#" class="'+E+" "+m+'">X</a>',k='<div class="hd"><h3>{TITLE}</h3></div>',y='<iframe class="'+n+'"></iframe>',u='<div class="'+j+'"></div>',o={confirm:{text:p,method:function(G){G.close()}},cancel:{text:b,method:function(G){G.close()}}},C={url:"",nodeId:"",cls:"",content:"",title:w,width:0,height:0,visible:false,modal:false,iframe:false,maxWidth:960,autoupdate:false,cache:true,buttons:[],callback:null,dataType:"text",isStick:false,isHideClose:false,isHideTitle:false},h=function(J,I){var G={},H;for(H in I){if(I.hasOwnProperty(H)){G[H]=J[H]===undefined?I[H]:J[H]}}return G},A=function(L){var I=L.elements,H=0,J,K=[],G={"select-one":function(M){return encodeURIComponent(M.name)+"="+encodeURIComponent(M.options[M.selectedIndex].value)},"select-multiple":function(P){var O=0,N,M=[];for(;N=P.options[O++];){if(N.selected){M.push(encodeURIComponent(P.name)+"="+encodeURIComponent(N.value))}}return M.join("&")},radio:function(M){if(M.checked){return encodeURIComponent(M.name)+"="+encodeURIComponent(M.value)}},checkbox:function(M){if(M.checked){return encodeURIComponent(M.name)+"="+encodeURIComponent(M.value)}}};for(;J=I[H++];){if(G[J.type]){K.push(G[J.type](J))}else{K.push(encodeURIComponent(J.name)+"="+encodeURIComponent(J.value))}}return K.join("&").replace(/\&{2,}/g,"&")},v=function(G){var H=G||{};this.config=h(H,C);this.init()};v.prototype={init:function(){if(!this.config){return}this.render();this.bind();return this},render:function(J){var G=this.config,L=G.nodeId||e+x.length;x.push(L);var I=$("body"),K=I.find("."+j),H=typeof G.content==="object"?$(G.content).html():G.content;I.append(i.replace("{ID}",L).replace("{CSS_ISHIDE}",G.visible?"":"visibility:hidden;top:-999em;left:-999em;").replace("{CLS}",G.cls).replace("{TITLE}",k.replace("{TITLE}",G.title)).replace("{BN_CLOSE}",g).replace("{BODY}",H||J||""));if(G.modal&&!K.length){I.append(u);this.msk=$("."+j)}else{this.msk=K.eq(0)}this.nodeId=L;this.node=$("#"+L);this.title=$(".hd",this.node);this.body=$(".bd",this.node);this.btnClose=$("."+m,this.node);this.shadow=$("."+a,this.node);this.iframe=$("."+n,this.node);this.set(G);return this},bind:function(){var G=this;if(!f){$(window).bind({resize:s(function(){G.updatePosition()},"pos"),scroll:s(function(){G.updatePosition()},"pos")})}G.node.delegate("."+E,"click",function(H){G.close();H.preventDefault()});G.node.find("."+m).bind("click",function(H){G.close();H.preventDefault()});$("body").keypress(function(H){if(H.keyCode===27){G.close()}});return this},updateSize:function(){var I=this.node.width(),J,G=$(window).width(),K=$(window).height(),H=this.config;$(".bd",this.node).css({height:"auto","overflow-x":"visible","overflow-y":"visible"});J=this.node.height();var L=2*F;H.maxWidth=Math.min(H.maxWidth,G-L);if(I>H.maxWidth){I=H.maxWidth;this.node.css("width",I+"px")}if(J>K){$(".bd",this.node).css({height:(K-150)+"px","overflow-x":"hidden","overflow-y":"auto"})}J=this.node.height();this.shadow.width(I);this.shadow.height(J);this.iframe.width(I+L).height(J+L);return this},updatePosition:function(){if(this.config.isStick){return}var G=this.node.width(),I=this.node.height(),J=$(window),H=f?J.scrollTop():0;this.node.css({left:Math.floor(J.width()/2-G/2)+"px",top:Math.floor(J.height()/2-I/2-F)+H+"px"});return this},set:function(L){var N,Q,H,I,G=this.nodeId,O=this.nodeId||O,J=[],K=this,P=function(R){J.push(0);return G+"-"+R+"-"+J.length};if(!L){return this}if(L.width){this.node.css("width",L.width+"px");this.config.width=L.width}if(L.height){this.node.css("height",L.height+"px");this.config.height=L.height}if($.isArray(L.buttons)&&L.buttons[0]){I=$(".ft",this.node);H=[];$(L.buttons).each(function(){var S=arguments[1],R=P("bn");if(typeof S==="string"){S=o[S]}if(!S.text){return}if(S.href){H.push('<a class="'+(S.cls||"")+'" id="'+R+'" href="'+S.href+'">'+S.text+"</a> ")}else{H.push('<span class="bn-flat '+(S.cls||"")+'"><input type="button" id="'+R+'" class="'+O+'-bn" value="'+S.text+'" /></span> ')}r[R]=S.method});if(!I[0]){I=this.body.parent().append('<div class="ft">'+H.join("")+"</div>")}else{I.html(H.join(""))}this.footer=$(".ft",this.node);$(".ft input, .ft a",this.node).click(function(T){var S=this.id&&r[this.id];if(S){var R=S.call(this,K)}if(R){T.preventDefault();if(typeof R=="string"){alert(R)}}})}else{this.footer=$(".ft",this.node);this.footer.html("")}if(typeof L.isHideClose!=="undefined"){if(L.isHideClose){this.btnClose.hide()}else{this.btnClose.show()}this.config.isHideClose=L.isHideClose}if(typeof L.isHideTitle!=="undefined"){if(L.isHideTitle){this.title.hide()}else{this.title.show()}this.config.isHideTitle=L.isHideTitle}if(L.title){this.setTitle(L.title);this.config.title=L.title}if(typeof L.iframe!=="undefined"){if(!L.iframe){this.iframe.hide()}else{if(!this.iframe[0]){this.node.prepend(y);this.iframe=$("."+n,this.node)}else{this.iframe.show()}}this.config.iframe=L.iframe}if(L.content){this.body.html(typeof L.content==="object"?$(L.content).html():L.content);this.config.content=L.content}if(L.url){if(L.cache&&d[L.url]){if(L.dataType==="text"||!L.dataType){this.setContent(d[L.url])}if(L.callback){L.callback(d[L.url],this)}}else{if(L.dataType==="json"){this.setContent(l);if(this.footer){this.footer.hide()}$.getJSON(L.url,function(R){K.footer.show();d[L.url]=R;if(L.callback){L.callback(R,K)}})}else{this.setContent(l);if(this.footer){this.footer.hide()}$.ajax({url:L.url,dataType:L.dataType,success:function(R){d[L.url]=R;if(K.footer){K.footer.show()}K.setContent(R);if(L.callback){L.callback(R,K)}}})}}}var M=L.position;if(M){this.node.css({left:M[0]+"px",top:M[1]+"px"})}if(typeof L.autoupdate==="boolean"){this.config.autoupdate=L.autoupdate}if(typeof L.isStick==="boolean"){if(L.isStick){this.node.css("position","absolute")}else{this.node.css("position","fixed")}this.config.isStick=L.isStick}return this.update()},update:function(){this.updateSize();this.updatePosition();return this},setContent:function(G){this.body.html(G);return this.update()},setTitle:function(G){$("h3",this.title).html(G);return this},submit:function(I){var G=this,H=$("form",this.node);H.submit(function(M){M.preventDefault();var J=this.getAttribute("action",2),K=this.getAttribute("method")||"get",L=A(this);$[K.toLowerCase()](J,L,function(N){if(I){I(N)}},"json")});H.submit()},open:function(){this.node.appendTo("body").css("visibility","visible").show();var H=this,G=this.config,I=H.body[0];H.contentHeight=I.offsetHeight;this.watcher=!G.autoupdate?0:setInterval(function(){if(I.offsetHeight===H.contentHeight){return}H.update();H.contentHeight=I.offsetHeight},100);if(G.modal){this.msk.show().css({height:$(document).height()})}return this},close:function(){this.node.hide();this.msk.hide();this.node.trigger("dialog:close",this);clearInterval(this.watcher);return this}};B.Dialog=function(G,H){if(!H&&t){return G?t.set(G):t}if(!t&&!H){t=new v(G);return t}return new v(G)};window.dui=B;var z={};function s(G,H){return function(){var K=z[H];var J=arguments;var I=this;if(K){clearTimeout(K)}z[H]=setTimeout(function(){G.apply(I,arguments)},300)}}})();
  ;(function() {
      $('.article .active-member-icon').click(function() {
        dui.Dialog({
            width: 400,
            title: '活跃成员<span class="active-member-icon"></span>',
            content: [
                '什么是活跃成员？',
                '活跃成员根据成员的组内发帖数、回复数、精华帖数等数据综合计算产生。活跃成员的发言将展示活跃成员标识，该标识仅本组组长/管理员可见。',
                '<br/>识别活跃成员有什么用？',
                '组长/管理员在日常浏览小组时，可通过活跃成员标识快速识别、熟悉组内的活跃成员，积极与之互动、建立感情，维护小组核心成员。'
            ].join('<br />'),
            buttons: ['confirm']
        }).open()
      })
  })();
;
  ;!function(){function t(t,e){return function(){var i=R[e],o=this;i&&clearTimeout(i),R[e]=setTimeout(function(){t.apply(o,arguments)},300)}}var e=8,i=window.dui||{},o="dui-dialog",n=[],s=null,h=!(!$.browser||!$.browser.msie||"6.0"!==$.browser.version),d=("ontouchstart"in window,{}),a={},c="j_close_dialog",l="dui-dialog",r="dui-dialog-close",u="dui-dialog-shd",f="dui-dialog-content",p="dui-dialog-iframe",m="dui-dialog-msk",g="确定",v="取消",b="提示",w="下载中，请稍候...",y='<div id="{ID}" class="'+l+' {CLS}" style="{CSS_ISHIDE}">                <span class="'+u+'"></span>                <div class="'+f+'">                    {BN_CLOSE}                    {TITLE}                    <div class="bd">{BODY}</div>                </div>            </div>',C='<a href="#" class="'+c+" "+r+'">X</a>',I='<div class="hd"><h3>{TITLE}</h3></div>',k='<iframe class="'+p+'"></iframe>',x='<div class="'+m+'"></div>',T={confirm:{text:g,method:function(t){t.close()}},cancel:{text:v,method:function(t){t.close()}}},S={url:"",nodeId:"",cls:"",content:"",title:b,width:0,height:0,visible:!1,modal:!1,iframe:!1,maxWidth:960,autoupdate:!1,cache:!0,buttons:[],callback:null,dataType:"text",isStick:!1,isHideClose:!1,isHideTitle:!1},H=function(t,e){var i,o={};for(i in e)e.hasOwnProperty(i)&&(o[i]=void 0===t[i]?e[i]:t[i]);return o},j=function(t){for(var e,i=t.elements,o=0,n=[],s={"select-one":function(t){return encodeURIComponent(t.name)+"="+encodeURIComponent(t.options[t.selectedIndex].value)},"select-multiple":function(t){for(var e,i=0,o=[];e=t.options[i++];)e.selected&&o.push(encodeURIComponent(t.name)+"="+encodeURIComponent(e.value));return o.join("&")},radio:function(t){if(t.checked)return encodeURIComponent(t.name)+"="+encodeURIComponent(t.value)},checkbox:function(t){if(t.checked)return encodeURIComponent(t.name)+"="+encodeURIComponent(t.value)}};e=i[o++];)s[e.type]?n.push(s[e.type](e)):n.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value));return n.join("&").replace(/\&{2,}/g,"&")},D=function(t){var e=t||{};this.config=H(e,S),this.init()};D.prototype={init:function(){if(this.config)return this.render(),this.bind(),this},render:function(t){var e=this.config,i=e.nodeId||o+n.length;n.push(i);var s=$("body"),h=s.find("."+m),d="object"==typeof e.content?$(e.content).html():e.content;return s.append(y.replace("{ID}",i).replace("{CSS_ISHIDE}",e.visible?"":"visibility:hidden;top:-999em;left:-999em;").replace("{CLS}",e.cls).replace("{TITLE}",I.replace("{TITLE}",e.title)).replace("{BN_CLOSE}",C).replace("{BODY}",d||t||"")),e.modal&&!h.length?(s.append(x),this.msk=$("."+m)):this.msk=h.eq(0),this.nodeId=i,this.node=$("#"+i),this.title=$(".hd",this.node),this.body=$(".bd",this.node),this.btnClose=$("."+r,this.node),this.shadow=$("."+u,this.node),this.iframe=$("."+p,this.node),this.set(e),this},bind:function(){var e=this;return h||$(window).bind({resize:t(function(){e.updatePosition()},"pos"),scroll:t(function(){e.updatePosition()},"pos")}),e.node.delegate("."+c,"click",function(t){e.close(),t.preventDefault()}),e.node.find("."+r).bind("click",function(t){e.close(),t.preventDefault()}),$("body").keypress(function(t){27===t.keyCode&&e.close()}),this},updateSize:function(){var t,i=this.node.width(),o=$(window).width(),n=$(window).height(),s=this.config;$(".bd",this.node).eq(0).css({height:"auto","overflow-x":"visible","overflow-y":"visible"}),t=this.node.height();var h=2*e;return s.maxWidth=Math.min(s.maxWidth,o-h),i>s.maxWidth&&(i=s.maxWidth,this.node.css("width",i+"px")),t>n&&$(".bd",this.node).eq(0).css({height:n-150+"px","overflow-x":"hidden","overflow-y":"auto"}),t=this.node.height(),this.shadow.width(i),this.shadow.height(t),this.iframe.width(i+h).height(t+h),this},updatePosition:function(){if(!this.config.isStick){var t=this.node.width(),i=this.node.height(),o=$(window),n=h?o.scrollTop():0;return this.node.css({left:Math.floor(o.width()/2-t/2)+"px",top:Math.floor(o.height()/2-i/2-e)+n+"px"}),this}},set:function(t){var e,i,o=this.nodeId,n=this.nodeId||n,s=[],h=this,c=function(t){return s.push(0),o+"-"+t+"-"+s.length};if(!t)return this;t.cls&&(this.node.removeClass(),this.node.addClass([t.cls,l].join(" "))),t.width&&(this.node.css("width",t.width+"px"),this.config.width=t.width),t.height&&(this.node.css("height",t.height+"px"),this.config.height=t.height),$.isArray(t.buttons)&&t.buttons[0]?(i=$(".ft",this.node),e=[],$(t.buttons).each(function(){var t=arguments[1],i=c("bn");"string"==typeof t&&(t=T[t]),t.text&&(t.href?e.push('<a class="'+(t.cls||"")+'" id="'+i+'" href="'+t.href+'">'+t.text+"</a> "):e.push('<span class="bn-flat '+(t.cls||"")+'"><input type="button" id="'+i+'" class="'+n+'-bn" value="'+t.text+'" /></span> '),a[i]=t.method)}),i[0]?i.html(e.join("")):i=this.body.parent().append('<div class="ft">'+e.join("")+"</div>"),this.footer=$(".ft",this.node),$(".ft input, .ft a",this.node).click(function(t){var e=this.id&&a[this.id];if(e)var i=e.call(this,h);i&&(t.preventDefault(),"string"==typeof i&&alert(i))})):(this.footer=$(".ft",this.node),this.footer.html("")),"undefined"!=typeof t.isHideClose&&(t.isHideClose?this.btnClose.hide():this.btnClose.show(),this.config.isHideClose=t.isHideClose),"undefined"!=typeof t.isHideTitle&&(t.isHideTitle?this.title.hide():this.title.show(),this.config.isHideTitle=t.isHideTitle),t.title&&(this.setTitle(t.title),this.config.title=t.title),"undefined"!=typeof t.iframe&&(t.iframe?this.iframe[0]?this.iframe.show():(this.node.prepend(k),this.iframe=$("."+p,this.node)):this.iframe.hide(),this.config.iframe=t.iframe),t.content&&(this.body.html("object"==typeof t.content?$(t.content).html():t.content),this.config.content=t.content),t.url&&(t.cache&&d[t.url]?("text"!==t.dataType&&t.dataType||this.setContent(d[t.url]),t.callback&&t.callback(d[t.url],this)):"json"===t.dataType?(this.setContent(w),this.footer&&this.footer.hide(),$.getJSON(t.url,function(e){h.footer.show(),d[t.url]=e,t.callback&&t.callback(e,h)})):(this.setContent(w),this.footer&&this.footer.hide(),$.ajax({url:t.url,dataType:t.dataType,success:function(e){d[t.url]=e,h.footer&&h.footer.show(),h.setContent(e),t.callback&&t.callback(e,h)}})));var r=t.position;return r&&this.node.css({left:r[0]+"px",top:r[1]+"px"}),"boolean"==typeof t.autoupdate&&(this.config.autoupdate=t.autoupdate),"boolean"==typeof t.isStick&&(t.isStick?this.node.css("position","absolute"):this.node.css("position","fixed"),this.config.isStick=t.isStick),this.update()},update:function(){return this.updateSize(),this.updatePosition(),this},setContent:function(t){return this.body.html(t),this.update()},setTitle:function(t){return $("h3",this.title).html(t),this},submit:function(t){var e=$("form",this.node);e.submit(function(e){e.preventDefault();var i=this.getAttribute("action",2),o=this.getAttribute("method")||"get",n=j(this);$[o.toLowerCase()](i,n,function(e){t&&t(e)},"json")}),e.submit()},open:function(){this.node.appendTo("body").css("visibility","visible").show();var t=this,e=this.config,i=t.body[0];return t.contentHeight=i.offsetHeight,this.watcher=e.autoupdate?setInterval(function(){i.offsetHeight!==t.contentHeight&&(t.update(),t.contentHeight=i.offsetHeight)},100):0,e.modal&&this.msk.show().css({height:$(document).height()}),this},close:function(){return this.node.hide(),this.msk.hide(),this.node.trigger("dialog:close",this),clearInterval(this.watcher),this}},i.Dialog=function(t,e){return!e&&s?t?s.set(t):s:e||s?new D(t):s=new D(t)},window.dui=i;var R={}}();