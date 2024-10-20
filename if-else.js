let task_number = prompt(
    "Введите номер задачи, которую хотите проверить(1-12):"
);
switch (+task_number) {
    case 1:
        let a1 = +prompt("Введите a:");
        let b1 = +prompt("Введите b:");
        a1 <= 1 && b1 >= 3 ? alert(a1 + b1) : alert(Math.abs(a1 - b1));
        break;
    
    case 2:
        let num = +prompt("Введите число от 0 до 59:");
        if (num >= 0 && num <=59) {
            if (num >= 0 && num <= 14) alert("В первую четверть");
            else if (num >= 15 && num <=30) alert("Во вторую четверть");
            else if (num >= 31 && num <=45) alert("В третью четверть");
            else if (num >= 46 && num <=59) alert("В четвертую четверть");
        }   else alert("Вы должны ввести число от 0 до 59!");
        break;

    case 3:
        let emp1 = +prompt("Введите зарплату первого сотрудника:");
        let emp2 = +prompt("Введите зарплату второго сотрудника:");
        let emp3 = +prompt("Введите зарплату третьего сотрудника:");
        alert(Math.max(emp1, emp2, emp3) - Math.min(emp1, emp2, emp3));
        break;

    case 4:
        let a4 = +prompt("Введите первое целое число:");
        let b4 = +prompt("Введите второе целое число:");
        if (a4 % 2 == 0 && b4 % 2 == 0) alert(a4 * b4 * (a4 * b4));
        else if (a4 % 2 == 0 || b4 % 2 == 0) alert(a4 / b4 + a4 * b4);
        else alert(a4 + b4);
        break;

    case 5:
        let a5 = +prompt("Введите a:");
        let b5 = +prompt("Введите b:");
        let c5 = +prompt("Введите c:");
        if (a5 <= b5 && b5 <= c5) {
            let max5 = Math.max(a5, b5, c5);
            alert(`a = ${max5}; b = ${max5}; c = ${max5};`);
        } else if (a5 > b5 && b5 > c5) {
            alert(`a = ${a5 * a5}; b = ${Math.pow(b5, 2)}; c = ${Math.pow(c5, 2)};`);
        } else alert(`a = ${a5 * -1}; b = ${b5 * -1}; c = ${c5 * -1};`);
        break;

    case 6:
        let login = "admin";
        let password = "secret";
        let log = prompt("Введите логин:");
        let pass = prompt("Введите пароль:");
        if (log == login && pass == password) {
            alert("Вы успешно авторизировались!");
        } else if (log == login && pass != password) {
            alert("Вы неверно ввели пароль");
        } else alert("Пользователя с данным логином не зарегистрирован");
        break;

    case 7:
        let a7= prompt("Введите a:");
        a7 == 5 || a7 == 10 || a7 == 14 || a7 == 100
            ? alert(`Вы ввели ${a7}. Ответ ${Math.paw(a7, 3)}.`) 
            : alert(`Вы ввели ${a7}. Ответ ${Math.abs(a7)}.`);
            break;

    case 8:
        let numbr = +prompt("Введите число:");
        if (numbr % 11 == 0) alert(`Вы ввели ${numbr}. Ответ ${numbr +20}.`);
        else if (numbr > 0 && numbr % 2 == 0)
            alert(`Вы ввели ${numbr}. Ответ ${numbr - 5}.`);
        else alert(`Вы вели ${numbr}. Ответ ${numbr * numbr}.`);
        break;

    case 9:
        let a9 = +prompt("Введите a:");
        let b9 = +prompt("Введите b:");
        let c9 = +prompt("Введите c:");
        let max9 = Math.max(a9, b9, c9);    
        let min9 = Math.min(a9, b9, c9);
        if (a9 != max9 && a9 != min9) alert(`Ответ ${a9}.`);
        else if (b9 != max9 && b9 != min9) alert(`Ответ ${b9}.`);
        else alert(`Ответ ${c9}.`);
    break;

    case 10:
        let a10 = +prompt("Введите a:");
        let b10 = +prompt("Введите b:");
        let c10 = +prompt("Введите c:");
        var numbers = [a10, b10, c10];
        var negNumbers = numbers.filter(function (num) {
            return num < 0;
        });
        var plusNumbers = numbers.filter(function (num) {
            return num > 0;
        });
        var countNeg = negNumbers.length;
        var countPlus = plusNumbers.length;
        alert(
            `Вы ввели ${countPlus} положительных и ${countNeg} отрицательных чисел`
        );

        break;

    case 11:
        let str11 = prompt("Введите слово:");
        if (str11[0] == "a") alert("Да");
        else alert("Нет");
        break;

    case 12:
        let str12 = prompt("Введите строку с цифрами:");
        if (str12[0] =="1" || str12[0] == "2" || str12[0] == "3") alert("Да");
        else alert("Нет");
        break;

    default:
        alert("Вы ввели несуществующую задачу!");
}
