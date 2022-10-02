<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5574336656:AAFHfHF9-Nb3MgzhSgFc_0ovPFcYektZJz8";

//Сюда вставляем chat_id
$chat_id = "-1001753385281";

//Определяем переменные для передачи данных из нашей формы
$name = ($_POST['name']);
$phone = ($_POST['phone']);

//Собираем в массив то, что будет передаваться боту
$arr = array(
    'name:' => $name,
    'phone:' => $phone
);

//Настраиваем внешний вид сообщения в телеграме
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

//Передаем данные боту
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
//if ($sendToTelegram) {
//    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');


?>