$(function () {
    $.fn.autoClear = function () {
        // сохраняем во внутреннюю переменную текущее значение
        $(this).each(function () {
            $(this).data("autoclear", $(this).attr("value"));
        });
        $(this)
            .bind('focus', function () {   // обработка фокуса
                if ($(this).attr("value") == $(this).data("autoclear")) {
                    $(this).attr("value", "").addClass('autoclear-normalcolor');
                }
            })
            .bind('blur', function () {    // обработка потери фокуса
                if ($(this).attr("value") == "") {
                    $(this).attr("value", $(this).data("autoclear")).removeClass('autoclear-normalcolor');
                }
            });
        return $(this);
    }
});

$(function () {
    // привязываем плагин ко всем элементам с классом "autoclear"    
    $('input').autoClear();
});

function sendAjaxForm_connect() {
    $("#ajax-form").submit(function (event) {
        //Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page
        var $form = $(this),
            uName = $form.find("input[name='name']").val(),
            uMail = $form.find("input[name='mail']").val(),
            uGoal = $form.find("input[name='goal']").val(),
            url = $form.attr("action");

        //Send hte data using post
        var posting = $.post(url, {
            name: uName,
            mail: uMail,
            goal: uGoal,
        });

        // Get the result
        posting.done(function (data) {
            $('#modalWindow').fadeToggle(1000);
            $("#modalWindow-content").empty().append(data);
        });
        var lang = (location.href.indexOf('ru') + 1) ? 'ru' : 'en';
        if (lang == 'ru') {
            var nameVal = "Имя";
            var mailVal = "Почта/Скайп/WhatsApp/Телефон";
            var goalVal = "Чем я могу Вам помочь?";
            var connect = "Связаться со мной"
        } else {
            var nameVal = "Name";
            var mailVal = "e-mail/Skype/WhatsApp";
            var goalVal = "How can I help You?";
            var connect = "Connect with me"
        }
        jQuery('#ajax-form')[0].reset();
        $("#uName").attr("value", nameVal);
        $("#uMail").attr("value", mailVal);
        $("#uGoal").attr("value", goalVal);
        $(".submit").attr("value", connect);
    });
}
