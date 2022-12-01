var n=10;
var s;
document.write("<table>");
let st=9;
for(let i=1; i <= n; i=i+1)
{
    document.write("<tr>");
    for(let j=1; j<=n; j=j+1)
    {
        if(st<=j) {s="bgcolor=#4ca30a"; }
        else {s="bgcolor=#ff4d00";}

        document.write("<td width=30 height=30 " + s +"> </td>");
    }
    document.write("</tr>");
    st=st-1;
}
document.write("</table>");

document.write("<table>");
let sd = 0;
for(let i=1; i <= n; i=i+1)
{
    document.write("<tr>");
    for(let j=1; j<=n; j=j+1)
    {
        if((i+j)%4==0) {s="bgcolor=pink";}
        else {s="bgcolor=black";}

        document.write("<td width=30 height=30 " + s +"> </td>");
    }
    document.write("</tr>");
    sd=sd+1;
}
document.write("</table>");