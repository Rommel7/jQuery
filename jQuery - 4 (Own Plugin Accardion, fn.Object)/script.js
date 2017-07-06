(function ($) {
    $.fn.accordion = function (options) {
        var settings = $.extend({}, {
            open: false
        }, options);
        return this.each(function () {
            var spans = $(this).children('span');
            spans.click(onClick);
            spans.each(reset);
            if (settings.open) $(this).children('span:first-child').next().show();
        });

        function onClick() {
            $(this).siblings('span').each(hide);
            $(this).next().slideDown('fast');
            return false;
        }

        function hide() {
            $(this).next().slideUp('fast');
        }

        function reset() {
            $(this).next().hide();
        }
    }
})(jQuery);