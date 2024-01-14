<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$name = $_POST["name"];
$lastname = $_POST["lastname"];
$phone = $_POST["phone"];
$fromDate = date("d-m-Y", strtotime($_POST["from-date"]));
$toDate = date("d-m-Y", strtotime($_POST["to-date"]));
$message = $_POST["message"];

try {
    //Server settings
    $mail->SMTPDebug = 2;
    $mail->SMTPOptions = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
        )
        );                      //Enable verbose debug output
    $mail->isSMTP(); 
    $mail->CharSet = 'UTF-8';                                           //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'aziz.aliyev.9898@gmail.com';                     //SMTP username
    $mail->Password   = 'jajgkrwamcruverf';                               //SMTP password
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('aziz.aliyev.9898@gmail.com', $name . ' ' . $lastname);
    $mail->addAddress('goodaport@mail.ru', 'Joe User');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Заказ';
    $mail->Body    = 'Имя: ' . $name . '<br/>' . 
                     'Фамилия: ' . $lastname . '<br/>' .
                     'Номер: ' . $phone . '<br/>' .
                     'От: ' . $fromDate . '  До: ' . $toDate . '<br/>' .
                     'Сообщение: ' . $message;
    $mail->AltBody = '';
    
    header('location: thank-you.html');
    $mail->send();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
