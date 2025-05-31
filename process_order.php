<?php
$item = $_POST["item"];
$material = $_POST["material"];
$quantity = $_POST["quantity"];
?>
<!DOCTYPE HTML>
<html>
<head>
    <title>Підтвердження замовлення</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
    <h3>Ваше замовлення прийнято</h3>
    <p>Замовлено виріб: <?php echo $item; ?></p>
    <p>Матеріал: <?php echo $material; ?></p>
    <p>Кількість: <?php echo $quantity; ?></p>
    <p><a href="index.html">Повернення</a></p>
</body>
</html>