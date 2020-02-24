
$(document).ready(function(){

	$.pjax({
		selector: 'a',
		container: '#pjax-content', //被替换的容器
		_container: '#pjax-content', //要替换的容器
		show: 'fade',  //展现的动画，支持默认和fade, 可以自定义动画方式，这里为自定义的function即可。
		cache: true,  //是否使用缓存
		storage: true,  //是否使用本地存储
		titleSuffix: '', //标题后缀
		filter: function(){},
		callback: function(){}
	});
  
	if (!!window.localStorage) {
		for (var key in localStorage) {
			try {
				if ((key.split("_") || [""])[0] === "pjax") {
					var item = localStorage.getItem(key);
					if (item) {
						item = JSON.parse(item);
						if ((parseInt(item.time) + 600 * 1000) <= new Date * 1) {
							localStorage.removeItem(key)
						}
					}
				}
				} catch (e) { }
		}
	}
  
});


//$(document).pjax('a', '#pjax-content');