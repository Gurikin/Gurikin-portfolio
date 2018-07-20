<?php
    error_reporting(0);
    xdebug_disable();//put it on the header of your code,like cofig file.
    require("SendMailSmtp.php");
    $lang = (substr_count($_SERVER['HTTP_REFERER'],'ru') !== 0) ? 'ru' : 'en';
    if ($lang == 'ru') {
        $okResponse = '<h4><b>Ваша заявка успешно принята.</b></h4><p>Я обязательно свяжусь с Вами в ближайшее время.</p>';
        $badResponse = '<h4><b>Что-то пошло не так!</b><h4><p>Напишите, пожалуйста в службу тех. поддержки
            <a href="mailto:igor.gurik.in@gmail.com">igor.gurik.in@gmail.com</a></p>';
    } else {
        $okResponse = '<h4><b>Your application has been successfully accepted.</b></h4><p>I will contact you shortly.</p>';
        $badResponse = '<h4><b>Oops. Something wrong!</b><h4><p>Write, please, to technical support:
            <a href="mailto:igor.gurik.in@gmail.com">igor.gurik.in@gmail.com</a></p>';
    }
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST)) {        
        $name = $_POST['name'];
        $mail = $_POST['mail'];
        $goal = $_POST['goal'];
        $message = $name." | ".$mail." | ".$goal;
        $mailSMTP = new SendMailSmtpClass('gurikin@yandex.ru', 'U&y6T%r4E#w2Q!"', 'ssl://smtp.yandex.ru', 'gurikin', 465);
        
        // $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'имя отправителя');
        
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: gurik <gurikin@yandex.ru>\r\n"; // от кого письмо
        $result =  $mailSMTP->send('igor.gurik.in@gmail.com', 'Заявка с igor.net', $message, $headers); // отправляем письмо
        // $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Заголовки письма');
        if($result === true){            
            echo $okResponse;
        }else{
            echo $badResponse;
        }
    }    
?>