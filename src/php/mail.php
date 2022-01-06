<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$phone = $_POST['user_tel'];
$email = $_POST['user_mail'];
$ratio = $_POST['exampleRadios'];
$check = $_POST['check1'];
$result = $_POST['js-result'];
$result2 = $_POST['js-result2'];

$namefooter = $_POST['user_name_footer'];
$mailfooter = $_POST['user_mail_footer'];
$textfooter = $_POST['submitFooter'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'germannkk@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '00ayafiatlaiokudl00'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('germannkk@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('germannkk@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$mail . $phone . $ratio . $check . $result . $result2 . $namefooter . $mailfooter . $textfooter . ' оставил заявку!';
$mail->AltBody = '';

if(!$mail->send()) {
    return 'Error';
} else {
    return 'success';
}
?>