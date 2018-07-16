$(function () {
    $('.service-card').on('click', function () {
        $('#modalWindow').fadeToggle(1000);
        var id = $(this).attr('id');
        var source = '/cards/' + id + '.html';
        $.get(source, function (data) {
            $("#modalWindow-content").html(data);
        });
    });
    $('#modalWindow').on('click', function () {
        $('#modalWindow').fadeToggle(1000);
    });
});