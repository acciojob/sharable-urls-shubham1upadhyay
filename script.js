function getValue()
{
let a = document.getElementById("name").value;
let b = document.getElementById("year").value;
let show = "https://localost:8080/?" ;
if(a == "" && b != "")
{
    document.getElementById("url").innerHTML = show +"year=" + b;
}
else if(b == "" && a !="")
{
    document.getElementById("url").innerHTML = show + "name=" + a;
}
else if(a != "" && b != ""){
    document.getElementById("url").innerHTML = show + "name=" + a +"&"+"year=" + b;
}
else{
    document.getElementById("url").innerHTML = show;
}

}