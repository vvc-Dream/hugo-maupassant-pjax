$(function(){
              $('a').bind('click',function(){
              	$.ajax({
              		type:'GET',
              		url:this.href,
              		success:function(data){
						var _content = $(data).find("#pjax-content").html();
              			$('#pjax-content').html(_content);
              		}
              	});
              	window.history.pushState({url:this.href},null,this.href);
              	return false;
              });
              window.addEventListener("popstate", function() {
              	$.ajax({
              		type:'GET',
              		url:location.href,
              		success:function(data){
						var _content = $(data).find("#pjax-content").html();
              			$('#pjax-content').html(_content);
              		}
              	});										
	          });

		})
		

function pjax_οnclick(vvc){
	$.ajax({
            type:'GET',
            url:vvc.href,
            success:function(data){
				$('#pjax-content').html('');
				var _content = $(data).find("#pjax-content").html();
            	$('#pjax-content').html(_content);
            }
              	});
	vvc.href = "#";
    window.history.pushState({url:vvc.href},null,vvc.href);
}
