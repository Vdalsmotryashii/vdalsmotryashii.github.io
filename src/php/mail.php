<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$phone = $_POST['user_tel'];
$email = $_POST['user_mail'];
$ratio = $_POST['exampleRadios'];
$check = $_POST['check1'];


$mail->SMTPDebug = 3;                               


$mail->setFrom('vdalsmotryashii@yadex.ru');
$mail->addAddress('germannkk@gmail.com'); 

$mail->isHTML(true);

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = ' оставил заявку!';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'success';
}
?>