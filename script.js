function hello()
{
    var f=document.getElementById('firstName');
    r=f.value;

    var l=document.getElementById('lastName');
    r1=l.value;

    var s=document.getElementById('surname');
    r2=s.value;

    var yy=document.getElementById('year');
    y=yy.value;

    var m=document.getElementById('place');
    p=m.value;

    var lh = document.getElementById('favoriteHobby');
    fh =lh.value;

    var uh = document.getElementById('unloveHobby');
    unlh = uh.value;
    var win=window.open("","","width=400,height=500");
    // открываем запись в это окно - объект win
    win.document.open();
    // формирование строки str
    36
    // содержимое в заголовок передается из поля формы, переменная r 
    var str = "<h1>Биография пользователя:</h1><hr>";
    // вывод строки в документ окна win
    win.document.write(str);
    str = "<span>Меня зовут "+r+" "+r1+" "+r2+". Я родился в "+y+" году, в прекрасном месте - "+p+".</span><br>";
    win.document.write(str);
    str = "<span>Больше всего на свете я люблю "+fh+". Считаю, что этому можно посвятить всю жизнь! А вот чему, по моему мнению, уделять внимание совсем не стоит - так это "+unlh+"...</span><br>";
    win.document.write(str);
    str = "<span>Если бы единственное занятие было "+unlh+ ", а "+fh+ " было невозможно, меня бы давно не существовало.</span><br>"
    win.document.write(str);
    // формирование и вывод кнопки закрытия
    str ='<input type="button" value="закрыть"'
    +'onClick="window.close();">';
    win.document.write(str);
    // закрываем вывод в документ объекта win
    win.document.close();
}