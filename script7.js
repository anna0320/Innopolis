function calculator(){
    var num1 = document.getElementById("firstnumber");
    var num2 = document.getElementById("secondnumber");
    var op1 = document.getElementById("operation1");
    var op2 = document.getElementById("operation2");
    var op3 = document.getElementById("operation3");
    var valueResult = document.getElementById("input_result");
    if (op1.checked || op2.checked || op3.checked)
    {
        if (num1.value =="" || num2.value =="")
        {
            alert("Число не задано")
        }
        else{
            parseNum1 = parseInt(num1.value);
            parseNum2 = parseInt(num2.value);
            if(op1.checked)
            {
                valueResult.value = parseNum1 + parseNum2;
            }
            if(op2.checked)
            {
                valueResult.value = parseNum1 - parseNum2;
            }
            if(op3.checked)
            {
                valueResult.value = parseNum1 * parseNum2;
            }
        }
    }
    else
    {
        alert("Выберите операцию!")
    }
}
