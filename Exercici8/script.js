function myFunction(operacio) {
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);
    var resultat = calculadora(operacio,x,y);
    text="";
    
    text += "El resultat de l'operació " + operacio + " entre " + x + " i " + y + " és " + resultat;
    document.getElementById("resultat").innerHTML = text;
  }



function calculadora(operacio,valor1,valor2){
    switch (operacio) {
        case 'suma':
            return valor1+valor2;
        case 'resta':
            return valor1-valor2;
        case 'multiplicacio':
            return valor1*valor2;
        case 'divisio':
            if(valor2!=0){
                return valor1/valor2
            }else{
                return "indefinit. Imagina't que tens zero galetes i la reparteixes entre zero amics. Quantes galetes li toquen a cada amic? No té sentit, ho veus? Així que el Monstre de les galetes està trist perquè no té galetes i tu estàs trist perquè no tens amics"
            }
        default:
            return "Ha passat alguna cosa."
    }
}