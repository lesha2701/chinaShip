<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['text'];

$mail->isSMTP();                                     
$mail->Host = 'smtp.mail.ru';  																							
$mail->SMTPAuth = true;                              
$mail->Username = 'china.shipp@mail.ru'; 
$mail->Password = 'Rsdrk6Jmd3XZH27XyzWb'; 
$mail->SMTPSecure = 'ssl';                          
$mail->Port = 465;

$mail->setFrom('china.shipp@mail.ru'); 
$mail->addAddress('leksey.tyulenev@gmail.com');    
$mail->isHTML(true);       

$mail->Subject = 'Заявка с тестового сайта';
if(!empty($text)) {
    $mail->Body = '' . $name . ' оставил заявку, его телефон ' . $phone . '<br>Почта этого пользователя: ' . $email . '<br>Сообщение: ' . $text . '<br>';
} else {
    $delivery = $_POST['delivery'];
    $deliveryText = '';
    switch ($delivery) {
        case 'ship':
            $deliveryText = 'Доставка морем';
            break;
        case 'car_fast':
            $deliveryText = 'Быстрое авто';
            break;
        case 'car':
            $deliveryText = 'Авто доставка';
            break;
        case 'train':
            $deliveryText = 'ЖД доставка';
            break;
        case 'plane':
            $deliveryText = 'Авиа доставка';
            break;
        default:
            $deliveryText = 'Вариант доставки не выбран';
            break;
    }
    $mail->Body = '' . $name . ' оставил заявку, его телефон ' . $phone . '<br>Почта этого пользователя: ' . $email . '<br>Выбранный вариант доставки: ' . $deliveryText . '<br>';
}
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>