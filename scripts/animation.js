$(function () {
    $('.service-card').on('click', function () {
        $('#modalWindow').fadeToggle(1000);
        var id = $(this).attr('id');
        console.log(id);
        var lang = (location.href.indexOf('ru') + 1) ? 'ru' : 'en';
        var source = './cards/' + id + '-' + lang + '.html';
        $.get(source, function (data) {
            $("#modalWindow-content").html(data);
        });
    });
    $('#modalWindow').on('click', function () {
        $('#modalWindow').fadeToggle(1000);
    });
    var $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
});