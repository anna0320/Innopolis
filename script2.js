function sqr()
{
        var height_str = document.getElementById('input_height');
        var height = height_str.value;
        var width_str = document.getElementById('input_width');
        var width = width_str.value;
        var sqr = height * width;
        if(sqr !== sqr)
        {
            alert("Введите корректно данные!");
        }
        else
        {
            alert("Площадь прямоугольника равна: " + sqr);
        }
}