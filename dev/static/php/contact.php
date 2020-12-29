<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../vendor/phpmailer/phpmailer/src/Exception.php';
require '../../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../../vendor/phpmailer/phpmailer/src/SMTP.php';

// Переменные
$formname = htmlspecialchars($_POST['formname']);
$name = htmlspecialchars($_POST['name']);
$tel = htmlspecialchars($_POST["tel"]);
$about = htmlspecialchars($_POST["about"]);
$adv = htmlspecialchars($_POST["adv"]);
$wait = htmlspecialchars($_POST["wait"]);


$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;

$mail->Host = 'ssl://server93.hosting.reg.ru';
$mail->Port = 465;
$mail->Username = 'leads@fadeevgroup.com';
$mail->Password = 'Q@8612241142';
// От кого
$mail->setFrom('leads@fadeevgroup.com', 'Новая заявка');

// Кому
$mail->addAddress('boffeerleads@gmail.com', 'Принмающий лиды');

// Тема письма
$mail->Subject = 'Онлайн магазины, '.$formname;

// Тело письма

$body =
"<br>Имя: ".$name.
"<br>Телефон: " .$tel.
"<br>Контакт: ".$contact.
"<br>Про товар: ".$about.
"<br>Продвигает ли: ".$adv.
"<br>Чего ждет: ".$wait;
$mail->msgHTML($body);

// Приложение
// $mail->addAttachment(__DIR__ . '/image.jpg');



$mail->send();

?>