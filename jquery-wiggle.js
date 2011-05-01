// Copyright (c) Whenever, Corey Schram
//
// jQuery wiggle plugin!
// wiggles!

(function ($) {
    
    var defaults = {
        waggle : 5,
        duration : 2
    };
    
    $.fn.wiggle = function (options, callback) {
        options = $.extend({}, defaults, options);
        
        var duration = options.duration,
            elem = this,
            top = elem.css('top'),
            left = elem.css('left'),
            pos = elem.css('position');
            
        elem.css('position', 'relative');
        
        function doWiggle() {
            elem.css('top', String(Math.random() * options.waggle) + 'px');
            elem.css('left', String(Math.random() * options.waggle) + 'px');
            
            duration -= 0.1;
            if (duration <= 0) {
                elem.css('top', top);
                elem.css('left', left);
                elem.css('position', pos);
                
                callback && callback();
            } else {
                setTimeout(doWiggle, 100);
            }
        }
        setTimeout(doWiggle, 100);
    };
    
}(jQuery));