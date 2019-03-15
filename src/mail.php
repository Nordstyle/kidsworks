<?php
$to      = 'zolotukhinwebpr@mail.ru';
$subject = 'Обратная связь с сайта "Биржа труда для детей и молодежи"';
$preferences = ['input-charset' => 'UTF-8', 'output-charset' => 'UTF-8'];
$encoded_subject = iconv_mime_encode('Subject', $subject, $preferences);
$encoded_subject = substr($encoded_subject, strlen('Subject: '));


$message = '
<html>
    <head>
        <title>Обратная связь с сайта "Биржа труда для детей и молодежи"</title>
    </head>
    <body>
        <p>Сообщение было отправлено c вашего сайта</p>
        <table>
            <tr>
                <td>Имя отправителя:</td><td>' . $_POST["name"] . '</td>
            </tr>
            <tr>
                <td>Телефон:</td><td>' . $_POST["tel"] .'</td>
            </tr>
            <tr>
                <td>Email:</td><td>' . $_POST["email"] . '</td>
            </tr>
            <tr>
                <td>Сообщение:</td><td>' . $_POST["text"] . '</td>
            </tr>
        </table>
    </body>
</html>
';

$headers = 'From: admin@birzha-deti.ru' . "\r\n" .
    'MIME-Version: 1.0'. "\r\n" .
    'Content-Type: text/html; charset=UTF-8;' . "\r\n" .
    'Reply-To: admin@birzha-deti.ru' . "\r\n" .
    "X-Sender: admin@birzha-deti.ru". "\n" .
    "X-Priority: 3". "\n" .
    "Importance: 3". "\n" .
    "Delivered-to: $to". "\n" .
    "Return-Path: admin@birzha-deti.ru". "\n" .
    "Envelope-from: admin@birzha-deti.ru". "\n" .
    "Content-Transfer-Encoding: 8bit\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $encoded_subject, $message, $headers);
?>

