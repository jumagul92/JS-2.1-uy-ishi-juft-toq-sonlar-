let num = +prompt("Son kiriting, biz uni juft yoki toqligini aniqlab beramiz")
while (isNaN(num) || num=="" || num==null) {
    num= +prompt("Bu son emas, iltimos, son kiriting!")
}
if (num%2==0) {
    alert("Siz juft son kiritdingiz")
} else{
    alert("Siz toq son kiritdingiz")
}