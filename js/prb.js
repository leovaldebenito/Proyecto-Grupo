//comentario de linea
/*
comentario de bloque
no 
se
ve
*/
/* var num3 = 4
var num8 = 9
document.write("Hola. 5 +  9 = ", 5 + 9)

document.write(num3+num8) */


/* s="Hola"
n=28
b=true
var u

document.write(typeof(s)+"<br>")
document.write(typeof(n)+"<br>")
document.write(typeof(b)+"<br>")
document.write(typeof(u)+"<br>") */


/* n=23

document.write(Number.isNaN(n)) */

// document.write(parseInt("345")+parseInt("100"))

function cuadrado(num) {
    num = num**2
    return num;
}
numtxt =  prompt ("Ingrese el número al que desea exponer al cuadrado: ","0")
numPosta = parseInt(numtxt)
document.write(cuadrado(numPosta))