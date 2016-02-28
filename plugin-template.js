(function($){
	$.fn.pluginTemplate = function(options){
		var settings = $.extend( {}, $.fn.pluginTemplate.defaults, options );
		return this.each(function(){
			// Plugin logic
		});
	}

	$.fn.pluginTemplate.defaults = {
		// Plugin defaults
	}
}(jQuery));