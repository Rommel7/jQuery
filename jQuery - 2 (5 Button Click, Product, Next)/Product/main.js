$(document).ready(function () {
    $('.columns').nextAll().css({
        'background': '#ddd'
    });
    $('.columns').change(function () {
        $(this).nextAll().attr('disabled', 'disabled').css({
            "background": "#ddd"
        }).find('option:first').attr("selected", "selected");
        $(this).next().removeAttr('disabled', 'disabled').css({
            "background": "white"
        }).children().removeAttr("selected", "selected");
    })
})