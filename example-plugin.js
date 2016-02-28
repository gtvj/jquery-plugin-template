(function($){
	// $.fn is an alias for $.prototype
	$.fn.examplePlugin = function(options){
		// The settings variable represents the defaults overridden by the any values passed through when it was called. Note: the first argument to extend is necessary to prevent $.fn.examplePlugin.defaults from being overwritten the default behaviour of $.extend is to return the results AND overwrite the first argument with the results also. 
		var settings = $.extend( {}, $.fn.examplePlugin.defaults, options );
		// Returning the jQuery object to support chaining. Note: the each will not be necessary for trivial plugins. If the plugin isn't doing much just return the jQuery object that's returned anyway. i.e. return this.addClass("funky-duck")
		return this.each(function(){
			// Wrap each element in jQuery
			var $this = $(this); 
			var newElement = $('<span>', { text : settings.text }).css({ color : settings.color	});
			$this.append(newElement);
		});
	}

	$.fn.examplePlugin.defaults = {
		text : "I am the default text for this plugin",
		color : "orange"
	}
}(jQuery));