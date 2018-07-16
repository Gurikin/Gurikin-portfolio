$(function () {
    $(document).on("click", ".service-card", function () {
        var id = $(this).attr('id');
        $('#' + id + ' .card-content-wrapper').fadeToggle(500);
        console.log(id);
        var scl = $('#' + id).attr('class');
        if ((scl.indexOf('scaled')+1)) {
            $('#' + id).css('transform', 'scale(1,1)');
            $('#' + id).css('z-index', '1');
        } else {
            $('#' + id).css('transform', 'scale(3,2)');
            $('#' + id).css('z-index', '5');
        }
        $('#' + id).toggleClass('scaled');                
        $.get('/cards/markup.html', function(data) {
            $('#' + id).css('unset');
            $('#' + id).html(data);
        }).delay(1000);
    });
});