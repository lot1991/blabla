
;
        Do = (typeof Do === 'undefined')? $ : Do;
        Do(function() {
            var reportDiv = "#link-report".concat("_group");
            $("body").delegate(reportDiv, 'mouseenter mouseleave', function(e){
                switch (e.type) {
                    case "mouseenter":
                        $(this).find(".report").css('visibility', 'visible');
                        break;
                    case "mouseleave":
                        $(this).find(".report").css('visibility', 'hidden');
                        break;
                }
            });
            
            $(reportDiv).delegate(".report a", 'click', function(e) {
                e.preventDefault();
                var auditUrl = "https://www.douban.com/misc/audit_report?url=",
                    opt = "";
                var obj = $(e.target).closest(reportDiv);
                var target_id = obj.length !== 0 ? obj.data("id") : undefined;
                var params = (opt && target_id) ? '?'.concat(opt, '=', target_id) : '';
                var url = "https://www.douban.com/group/topic/180915721/".concat(params);
                    var reasons = JSON.parse("{\"group_reasons\":[],\"douban_reasons\":[{\"reason\":\"辱骂攻击\",\"type\":1,\"desc\":\"用脏话\\\/侮辱性词汇攻击他人\"},{\"reason\":\"引战\",\"type\":1,\"desc\":\"恶意引导不同群体互相攻击\"},{\"reason\":\"广告\",\"type\":1,\"desc\":null},{\"reason\":\"色情低俗\",\"type\":1,\"desc\":null},{\"reason\":\"政治相关\",\"type\":1,\"desc\":null},{\"reason\":\"违法违规\",\"type\":1,\"desc\":null},{\"reason\":\"未授权下载资源\",\"type\":1,\"desc\":null},{\"reason\":\"泄露他人隐私\",\"type\":1,\"desc\":null},{\"reason\":\"影响评分公正性\",\"type\":1,\"desc\":null},{\"reason\":\"涉未成年人\",\"type\":1,\"desc\":null},{\"reason\":\"饭圈乱象\",\"type\":1,\"desc\":null}]}");
                var is_group_member = false;

                generate_report_dialog({
                    report_url: url,
                    reasons: reasons,
                    group_id: '248952',
                    topic_id: String(target_id),
                    is_group_member: is_group_member
                });
            });

            $(reportDiv).append('<div class="report"><a rel="nofollow" href="javascript:void(0)">投诉</a></div>');
        });
    ;
        "use strict";$(function(){function e(e,t){var a=e.text(),i=a?parseInt(a):0;i+=t,i>0?e.text(i):0===i&&e.text("")}var t="https://m.douban.com/rexxar/api/v2/";$(".react-btn").bind("click",function(a){if(window._USER_ABNORMAL)return void(show_abnormal&&show_abnormal());var i=$(this),r=i.find(".react-text"),c=i.hasClass("react-dislike")||i.hasClass("react-cancel-dislike"),s=i.find(".react-num"),n=i.data(),l=void 0,o=0===n.reaction_type;l=o?c?2:1:1===n.reaction_type?c?2:0:2===n.reaction_type?c?0:1:0;var d={reaction_type:l,ck:get_cookie("ck")},_=""+t+n.type+"/"+n.object_id+"/react";$.ajax({type:"post",url:_,data:d,traditional:!0,beforeSend:function(e){e.withCredentials=!0},xhrFields:{withCredentials:!0},success:function(t){i.data("reaction_type",t.reaction_type);var a=i.siblings(".react-cancel-like"),n=i.siblings(".react-cancel-dislike");a.data("reaction_type",t.reaction_type),n.data("reaction_type",t.reaction_type),c?2===t.reaction_type?(r.text("已踩"),i.removeClass("react-dislike").addClass("react-cancel-dislike"),e(a.find(".react-num"),-1),a.removeClass("react-cancel-like").addClass("react-like"),a.find(".react-text").text("赞")):(r.text("踩"),i.removeClass("react-cancel-dislike").addClass("react-dislike")):1===t.reaction_type?(e(s,1),r.text("已赞"),i.removeClass("react-like").addClass("react-cancel-like"),n.removeClass("react-cancel-dislike").addClass("react-dislike"),n.find(".react-text").text("踩")):(e(s,-1),r.text("赞"),i.removeClass("react-cancel-like").addClass("react-like"))},error:function(e){try{var t=JSON.parse(e.response);t.extra&&t.extra.solution_uri&&(window.location.href=t.extra.solution_uri),t.code&&4090===t.code&&alert(t.localized_message)}catch(e){console.error(e)}}})})});
            "use strict";function show_doulist_remind(){var e="         <div id='doulist-new-function-remind'>             <div class='title'>“喜欢”升级啦</div>             <div class='desc'>觉得内容不错，点个赞吧；</br>想Mark，收藏到豆列是最好的选择</div>             <button class='i_know'>我知道了</button>         </div>     ",o=document.createElement("DIV");o.innerHTML=e,o=o.firstElementChild;var t=document.querySelector(".action-react"),i=t.querySelector(".react-add");if(t&&get_cookie("ck")&&(!i||!i.classList.contains("a_show_login"))){t.style.position="relative",t.appendChild(o);var n=document.querySelector(".i_know");n.addEventListener("click",close_doulist_remind)}}function close_doulist_remind(){var e=document.getElementById("doulist-new-function-remind");e&&e.remove()}!function(){localStorage&&localStorage.getItem("douban-fav-remind")||get_cookie&&get_cookie("douban-fav-remind")||(show_doulist_remind(),localStorage&&localStorage.setItem("douban-fav-remind","1"),set_cookie&&set_cookie({"douban-fav-remind":1},36500,"douban.com","/"))}();
    ;
var dialogJoinGroup = $(".dialog_join_group");
window._JOIN_POPUP_DIALOG = function() {
    dialogJoinGroup.css('display', 'block');
}
$(".join_group_cancel, .join_group_close").bind('click', function(e) {
    dialogJoinGroup.css('display', 'none');
})
