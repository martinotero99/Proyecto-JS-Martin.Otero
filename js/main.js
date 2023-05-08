




 const IVA = 0.21;


  function saludar(){

    alert("Bienvenidos a tienda de zapatillas ")
  }
  saludar();


 




let usuario
let pass ="12345";
let ingreso = false;

 let inicioDeSecion = ()=>{

   for (let i =2; i >= 0; i--){
     let ingresoUsuario = prompt (
       "Ingresa tu usuario. Tenes" + " "  + (i+1) + " " + "intentos"
     );
     if (ingresoUsuario === "Martin" || ingresoUsuario === "martin"){
       ingresoPass = prompt(
         "Ingresa tu contraseña. Tenes" + " "  + (i+1) + " " + "intentos"
         );
       if (ingresoPass === pass){
         alert("Bienvenido"+" "+ingresoUsuario+" "+"ya podes operar");
         ingreso = true;
  
         break;
       } else {alert("usuario o contraseña incorrecto")
     }
     } else{alert("usuario o contraseña incorrecto")}
   }
 }

 
  
   inicioDeSecion()



  let AdidasPrecio = 30000;
  let NikePrecio = 40000;
  let VancePrecio = 25000;
 



  let saldo =55000;

  let opcion = prompt(
      "Bienvenido a Tienda de zapatillas Ingrese una opción: \n1-Ver Saldo. \n2-Comprar zapatilla. \n3-Modelos. \n4- ingersar dinero\nPresiona X para finalizar."
    );
    while(opcion != "x"){
      switch (opcion) {
        case "1":1
          alert("Tu saldo es: $" + saldo);
          break;
          case "2":
         let CompraZapatillas = prompt(
           "Elija su modelo \n1-Adidas\n2-Nike\n3-Vance\nPresiona S para volver al menu"
         );
         switch (CompraZapatillas) {
           case "1":
           case "Adidas": 
           alert("Realizaste la compra de Zapatillas Adidas, te quedan:" +" "+ (saldo-AdidasPrecio) +"$ de saldo");
             break;
           case "2":
           case "Nike":
             alert("Realizaste la compra de Zapatillas Nike, te quedan:" +" "+ (saldo-NikePrecio) +"$ de saldo");
             break;
           case "3":
           case "Vance":
             alert("Realizaste la compra de Zapatillas Vance, te quedan:" +" "+ (saldo-VancePrecio) +"$ de saldo");
             break;
             
 
           default:
             alert("Opción no disponible");
             break;
         } 
          break;
          case "3":
           alert("Los modelos disponibles son Adidas - Nike - y Vance")
          break;
          case "4":
         let deposito = parseInt(prompt("ingrese el monto a depositar"));
         saldo= saldo + deposito;
         alert("la operacion se realizo con exito, tu saldo es: $"+ saldo)
          break;
  

          default:
           alert("Opción no válida");
            break;
            
        } 
      opcion = prompt(
        "Bienvenido a Tienda de zapatillas Ingrese una opción: \n1-Ver Saldo. \n2-Comprar zapatilla. \n3-Modelos. \n4- ingrsar dinero\nPresiona X para finalizar."
      );  
    } 


 

    const CalcularIva= ()=>{

     let opcionesProductos =  prompt("ingrese el producto de el culal desea calcular el iva: \n1-Adidas\n2-Nike\n3-Vance")

     if (opcionesProductos == "1") {
      alert("El IVA de las zapatillas adidas es: $"+ (AdidasPrecio*IVA));
    } else if (opcionesProductos == "2") {
      alert("El IVA de las zapatillas adidas es: $"+ (NikePrecio*IVA));
    } else if (opcionesProductos == "3") {
      alert("El IVA de las zapatillas adidas es: $"+ (VancePrecio*IVA));
    }  else {
      alert("Opción no válida");
    } 
    
 }
  CalcularIva()





