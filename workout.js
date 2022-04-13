//COMPRA DE HELADO
        
let roberto = parseFloat(prompt("Ingresar el dinero de Roberto"));
let pedro = parseFloat(prompt("Ingresar el dinero de Pedro"));
let cofla = parseFloat(prompt("Ingresar el dinero de Cofla"));

let heladoAgua = parseFloat(0.6);
let heladoCrema = parseFloat(1.0);
let bombonHeladix = parseFloat(1.6);
let bombonHeladovich = parseFloat(1.7);
let bombonHelardo = parseFloat(1.8);
let potecitoConfities = parseFloat(2.9);
let pote = parseFloat(2.9);

//Formula 1
if (pote < roberto) {
    document.write("Roberto compró  el Pote")
    document.write(" y le sobra $" + parseFloat(roberto - pote))
    document.write("<br>")
    }  

    else if (potecitoConfities < roberto) {
        document.write("Roberto compró el potecito confities")
        document.write(" y le sobra $" + parseFloat(roberto - potecitoConfities))
        document.write("<br>")
    } 
    else if (bombonHelardo < roberto) {
        document.write("Roberto compró el potecito bombon helardo") 
        document.write(" y le sobra $" + parseFloat(roberto - bombonHelardo))
        document.write("<br>")
    } 
    else if (bombonHeladovich < roberto) {
        document.write("Roberto compró el potecito bombon heladovich") 
        document.write(" y le sobra $" + parseFloat(roberto - bombonHeladovich))
        document.write("<br>")
    } 
    else if (bombonHeladix < roberto) {
        document.write("Roberto compró el Heladix")
        document.write(" y le sobra $" + parseFloat(roberto - bombonHeladix))
        document.write("<br>")
    } 
    else if (heladoCrema < roberto) {
        document.write("Roberto compró el de Crema")
        document.write(" y le sobra $" + parseFloat(roberto - heladoCrema))
        document.write("<br>")
    } 
    else if (heladoAgua < roberto){
        document.write("Roberto compró el helado de Agua")
        document.write(" y le sobra $" + parseFloat(roberto - heladoAgua))
        document.write("<br>")
    }

if (pedro >= 0.6 && pedro < 1.0) {
    document.write("Pedro compro el helado de agua")
    document.write(" y le sobra $" + parseFloat(pedro - heladoAgua))
    document.write("<br>")
    } 

    else if (pedro >= 1.0 && pedro < 1.6) {
        document.write("Pedro compro el helado de crema")    
        document.write(" y le sobra $" + parseFloat(pedro - heladoCrema))
        document.write("<br>")
    }
    else if (pedro >= 1.6 && pedro < 1.7) {
        document.write("Pedro compro el bombon Heladix")    
        document.write(" y le sobra $" + parseFloat(pedro - bombonHeladix))
        document.write("<br>")
    }
    else if (pedro >= 1.7 && pedro < 1.8) {
        document.write("Pedro compro el bombon Heladovich")    
        document.write(" y le sobra $" + parseFloat(pedro - bombonHeladovich))
        document.write("<br>")
            
    }
    else if (pedro >= 1.8 && pedro < 2.9) {
        document.write("Pedro compro el bombon Helardo")    
        document.write(" y le sobra $" + parseFloat(pedro - bombonHelardo))
        document.write("<br>")
    }
    else if (pedro > 2.9) {
        document.write("Pedro puede comprar el 1/4 o el potecito con confities")    
        document.write(" y le sobraria $" + parseFloat(pedro - pote))
        document.write("<br>")
    } 

if (cofla >= 0.6 && cofla < 1.0) {
    document.write("Cofla compro el helado de agua")
    document.write(" y le sobra $" + parseFloat(cofla - heladoAgua))
    } 

    else if (cofla >= 1.0 && cofla < 1.6) {
        document.write("Cofla compro el helado de crema")
        document.write(" y le sobra $" + parseFloat(cofla - heladoCrema))
    }
    else if (cofla >= 1.6 && cofla < 1.7) {
        document.write("Cofla compro el bombon Heladix")    
        document.write(" y le sobra $" + parseFloat(cofla - bombonHeladix))
    }

    else if (cofla >= 1.7 && cofla < 1.8) {
        document.write("Cofla compro el bombon Heladovich")    
        document.write(" y le sobra $" + parseFloat(cofla - bombonHeladovich))
    }

    else if (cofla >= 1.8 && cofla <= 2.8) {
        document.write("Cofla compro el bombon Helardo")    
        document.write(" y le sobra $" + parseFloat(cofla - bombonHelardo))
    }
    else if (cofla > 2.9) {
        document.write("Cofla puede comprar el potecito confities o el pote 1/4")    
        document.write(" y le sobraria $" + parseFloat(cofla - pote))

    } 


// COMPRA DE BOLETO
    
let raul = parseInt(prompt("Ingresar el dinero que posee Raul"))
let boleto = parseInt(prompt("Ingresar el precio del boleto"))
let boleto3 = boleto * 3
let boleto2 = boleto * 2

if (raul > boleto3) {
    console.log(boleto3)
    document.write("Raul compro 3 boletos")
    document.write(`A Raul le sobra $${raul-boleto3} entonces decide regalarlo`)
} else if (raul > boleto2) {
    console.log(boleto2)
    document.write("Raul compro 2 boletos")
    document.write(`A Raul le sobra $${raul-boleto2} entonces decide regalarlo`)
} else {
    console.log(boleto)
    document.write("Raul compro 1 boletos")
    document.write(`A Raul le sobra $${raul-boleto} entonces decide regalarlo`)
}