function getAnketa() {
    
    const surname = getInfo ("Введите фамилию", valid);
    const name = getInfo ("Введите имя", valid);
    const patronymic = getInfo ("Введите отчество", valid);
    const age = Number(getInfo ("Введите ваш возраст", valid, validAge));
    const isMan = confirm("Вы мужчина?");
    let pension = null;
    let sex = isMan ? "мужчина" : "женщина";
    if ((isMan && age >= 62) || (!isMan && age >= 57)) {
      pension = "на пенсии";
    } else {
      pension = "не на пенсии";
    };
    
    function getInfo (text, valid, validAge) {
        let data = prompt(text)
        if (valid(data) === false) {
            alert ("Строка не заполнена!")
            getInfo(text,valid)
        } else {
            return data;
        }

        if (validAge(data) === false) {
            alert ("Вы ввели не числовое значение")
            getInfo(text,valid,validAge)
        } else {
            return data;
        }
    }

    function valid (value){
        if (value !== "") {
            return true;
        } else {
            return false
        }
    }

    function validAge (valueForAge){
        if (valueForAge === Number) {
            return true;
        } else {
            return false
        }
    }

    alert(`
    Ваше ФИО ${surname} ${name} ${patronymic}, 
    Ваш возраст ${age} лет, 
    Ваш возраст в днях ${age*365} дней, 
    Через 5 лет вам будет ${age+5} лет, 
    Вы ${sex}, 
    Вы ${pension}`);
  }
  
  getAnketa()
  