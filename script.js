var num1 = +prompt('Введите 1 число')
    num2 = +prompt('Введите 2 число')
    num3 = +prompt('Введите 3 число')
    
if(num1 > num2 && num1 < num3) alert('Среднее число ' +num1);
else if(num2 > num1 && num2 < num3) alert('Среднее число ' +num2);
else if(num3 > num1 && num3 < num2) alert('Среднее число ' +num3);
else if(isNaN(num1) || isNaN(num2) || isNaN(num3)) alert('Смотри что пишешь');
else alert('Здесь нет среднего числа');   