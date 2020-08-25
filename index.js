function getAnketa() {
    const surname = getInfo ("Введите фамилию", valid);
    const name = getInfo ("Введите имя", valid);
    const patronymic = getInfo ("Введите отчество", valid);
    const age = getInfo ("Введите ваш возраст", validAge);
    const isMan = confirm("Вы мужчина?");
    let pension = null;
    let sex = isMan ? "мужчина" : "женщина";
    if ((isMan && age >= 62) || (!isMan && age >= 57)) {
      pension = "на пенсии";
    } else {
      pension = "не на пенсии";
    };
    
    function getInfo (text, valid) {
        let data = prompt(text)
        if (valid(data) === false) {
            alert ("Строка заполнена не корректно!")
            return getInfo(text,valid)
        } else {
            return data;
        }
    }

    function valid (value){
        return (value !== "") ? true: false
    }

    function validAge (valueForAge){
        return Number(valueForAge) ? true: false
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