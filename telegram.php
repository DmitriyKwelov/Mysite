<?php

/* https://api.telegram.org/bot5285935631:AAHAXQ4vnOzHwHkL2e8EMFUtznJEmpkq350/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "5285935631:AAHAXQ4vnOzHwHkL2e8EMFUtznJEmpkq350";
$chat_id = "-652875954";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>