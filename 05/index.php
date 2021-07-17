<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form class="form-control" method="POST">
        <input type="text" name="num1" value="<?= @$_POST['num1'] ?>">
        <select name="operator">
            <option value="+" <?= (@$_POST['operator'] === "+") ? 'selected' : '' ?>>+</option>
            <option value="-" <?= (@$_POST['operator'] === "-") ? 'selected' : '' ?>>-</option>
            <option value="*" <?= (@$_POST['operator'] === "*") ? 'selected' : '' ?>>*</option>
            <option value="/" <?= (@$_POST['operator'] === "/") ? 'selected' : '' ?>>/</option>
        </select>
        <input type="text" name="num2" value="<?= @$_POST['num2'] ?>">
        <button name="calculate">Calculate</button>
    </form>
</body>
</html>

<?php 
    if(isset($_POST['calculate'])) {
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $operator = $_POST['operator'];

        $result = 0;

        switch($operator) {
            case "+":
                $result = $num1 + $num2;
                break;
            case "-":
                $result = $num1 - $num2;
                break;
            case "*":
                $result = $num1 * $num2;
                break;
            case "/":
                $result = $num1 / $num2;
                break;
        }

        echo "There result is: $result";
    }
?>