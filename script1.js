function simpleNum ()
{
    var str = prompt('Введите число:');
    var x = parseInt(str);
    if (x > 1) {
        for (let i = 2; i < x; i++) {
          if (x % i == 0) {
            return alert(x + ' не является простым числом!');
          }
        }
        return alert(x + ' является простым числом!');
      } 
}

function matrix() {
    var str1 = prompt('Введите число для строк и столбцов');
    var n = parseInt(str1);
    var i;
    var j;

    for (i=0; i < n; i++)  {
      for (j=0; j < n; j++)  {
           if (i === j)  {
            
             document.writeln(' 1 ');
           }
                  
           else  {
             document.writeln(' 0 ');}
            }
         document.writeln('<br>') ;
       }
   }