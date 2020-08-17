<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../vendor/phpmailer/phpmailer/src/Exception.php';
require '../../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../../vendor/phpmailer/phpmailer/src/SMTP.php';

// Переменные
$name = htmlspecialchars($_POST['name']);
$tel = htmlspecialchars($_POST["tel"]);
$address = htmlspecialchars($_POST["address"]);

$height = htmlspecialchars($_POST["height"]);
$width = htmlspecialchars($_POST["width"]);
$length = htmlspecialchars($_POST["length"]);
$corners = htmlspecialchars($_POST["corners"]);
$frame = htmlspecialchars($_POST["frame"]);
$material = htmlspecialchars($_POST["material"]);
$calculatorCost = htmlspecialchars($_POST["calculatorCost"]);

$orderDetails = [$calculatorCost, $height, $width, $length, $corners, $frame, $material];

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;

$mail->Host = 'ssl://smtp.gmail.com';
$mail->Port = 465;
$mail->Username = 'boffeerleads@gmail.com';
$mail->Password = 'Bo8612241142ds';

// От кого
$mail->setFrom('boffeerleads@gmail.com', 'Новая заявка');

// Кому
$mail->addAddress('boffeerleads@gmail.com', 'Принмающий лиды');

// Тема письма
$mail->Subject = 'Смарт столы, лид с квиза';

// Тело письма

$body = "Цена: ".$calculatorCost."<br>Имя: ".$name."<br>Телефон: " .$tel."<br>Адрес: ".$address."<br>Толщина: ".$height."<br>Ширина: ".$width."<br>Длина: ".$length."<br>Скруглять углы? ".$corners."<br>Фрейм: ".$frame."<br>Материал: ".$material;
$mail->msgHTML($body);

// Приложение
// $mail->addAttachment(__DIR__ . '/image.jpg');



$mail->send();

echo '<script>
  location.href= "https://ya.ru";
</script>';
?>