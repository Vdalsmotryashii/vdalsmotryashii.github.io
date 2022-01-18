<?php
$phone = $_POST['user_tel'];
$email = $_POST['user_mail'];

//echo $phone;
//echo "<br>";
//echo $email;

mail("germannkk@gmail.com", "Заявка с сайта", "тел:".$phone.". E-mail: ".$email ,"From: germannkk@mail.ru \r\n");

if (mail("germannkk@gmail.com", "Заказ с сайта", "тел:".$phone.". E-mail: ".$email ,"From: germannkk@mail.ru \r\n"))
 {
    echo "Good";
} else {
    echo "fuck";
}
ini_set('display_errors','On');
error_reporting('E_ALL');

?>