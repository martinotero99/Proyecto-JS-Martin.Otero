




  const IVA = 0.21;


   function saludar(){

     alert("Bienvenidos a tienda de zapatillas ")
   }
   saludar();


 

 let usuario
 let pass ="12345";
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


const productos = [
  { id: 1, nombre: "Nike Air Force", precio: 40000, tipo: "Deportiva" },
  { id: 2, nombre: "Nike Air Max", precio: 63000, tipo: "Deportiva" },
  { id: 3, nombre: "Nike Air Force Stage 1", precio: 59000, tipo: "Deportiva" },
  { id: 4, nombre: "Nike Air Max 90", precio: 37000, tipo: "Deportiva" },
  { id: 5, nombre: "Nike Air Max Axis", precio: 70000, tipo: "Deportiva" },
  { id: 6, nombre: "Nike Air Max Impact", precio: 60000, tipo: "Deportiva" },
  { id: 7, nombre: "Nike Air Max LTD3", precio: 67000, tipo: "Deportiva" },
  { id: 8, nombre: "Nike Air Sport", precio: 90000, tipo: "Deportiva" },
  { id: 9, nombre: "Nike Air Jordan", precio: 140000, tipo: "Deportiva" },
  { id: 10, nombre: "Nike Air Jordan Retro", precio: 120000, tipo: "Deportiva" },
];


  let nikeAirForcePrecio = 40000;
  let nikeAirJordanPrecio = 140000;
  let nikeAirSportPrecio = 90000;
  let saldo =90000;
  
  let opcion = prompt(
    "Bienvenido a Tienda de zapatillas Ingrese una opción: \n1-Ver Saldo. \n2-Comprar zapatilla. \n3-Calcular IVA de Productos. \n4- ingersar dinero. \n5- Busqueda productos por nombre. \n6 ingrese un limite de precio de lo que desea \nPresiona X para finalizar."
  );
  while(opcion != "x"){
    switch (opcion) {
      case "1":1
        alert("Tu saldo es: $" + saldo);
        break;
        case "2":
       let CompraZapatillas = prompt(
        "Elija su modelo \n1-Nike Air Force\n2-Nike Air Jordan\n3-Nike Air Sport\nPresiona s para volver al menu"
       );
       while(CompraZapatillas != "s"){

         switch (CompraZapatillas) {
           case "1":
            case "Nike Air Force": 
            if(nikeAirForcePrecio <= saldo){
              alert("Realizaste la compra de Zapatillas Nike Air Force, te quedan:" +" "+ (saldo-nikeAirForcePrecio) +"$ de saldo");
            }else{alert("Saldo insuficiente")}
            saldo = (saldo-nikeAirForcePrecio)
             break;
           case "2":
            case "Nike Air Jordan":
              if(nikeAirJordanPrecio <= saldo){
                alert("Realizaste la compra de Zapatillas Nike Air Force, te quedan:" +" "+ (saldo-nikeAirJordanPrecio) +"$ de saldo");
              }else{alert("Saldo insuficiente")}
             break;
           case "3":
            case "Nike Air Sport":
              if(nikeAirSportPrecio <= saldo){
                alert("Realizaste la compra de Zapatillas Nike Air Force, te quedan:" +" "+ (saldo-nikeAirSportPrecio) +"$ de saldo");
              }else{alert("Saldo insuficiente")}
             break;
             
           default:
             alert("Opción no disponible");
             break;
         } 
         CompraZapatillas = prompt(
          "Elija su modelo \n1-Nike Air Force\n2-Nike Air Jordan\n3-Nike Air Sport\nPresiona s para volver al menu")
       }
        break;
        case "3":
          const CalcularIva= ()=>{

            let opcionesProductos =  prompt("ingrese el producto de el cual desea calcular el iva: \n1-Nike Air Force\n2-Nike Air Jordan\n3-Nike Air Sport")
        
            if (opcionesProductos == "1") {
             alert("El IVA de las zapatillas adidas es: $"+ (nikeAirForcePrecio*IVA));
           } else if (opcionesProductos == "2") {
             alert("El IVA de las zapatillas adidas es: $"+ (nikeAirJordanPrecio*IVA));
           } else if (opcionesProductos == "3") {
             alert("El IVA de las zapatillas adidas es: $"+ (nikeAirSportPrecio*IVA));
           }  else {
             alert("Opción no válida");
           }    
        } 
        CalcularIva()
        break;
        case "4":
       let deposito = parseInt(prompt("ingrese el monto a depositar"));
       saldo= saldo + deposito;
       alert("la operacion se realizo con exito, tu saldo es: $"+ saldo)
        break;
        case "5":
          const buscarPorNombre = ()=>{

           let busqueda= productos.find((el)=>{
            return el.nombre.includes(prompt("ingrese el nombre del producto que busca"))
          })
          console.log(busqueda);
         }
         buscarPorNombre()
        break;
        // me pregunta 1 vez por cada elemento que tenga el array(es decir 10 veces). No encontre la forma de arreglarlo :(
        case "6":
             let filtrar= productos.filter(el=>{
              return el.precio <= parseInt(prompt("ingrese un monto para ver productos con precio menores a lo indicado"))
            })
            console.log(filtrar);
          break;



        default:
         alert("Opción no válida");
          break;
          
      } 
    opcion = prompt(
      "Bienvenido a Tienda de zapatillas Ingrese una opción: \n1-Ver Saldo. \n2-Comprar zapatilla. \n3-Calcular IVA de Productos. \n4- ingersar dinero. \n5- Busqueda productos por nombre. \n6 ingrese un limite de precio de lo que desea \nPresiona X para finalizar."

    );  
  } 
// funcion para aumentar precios
let aumentarPrecios = ()=>{

  const aumentoDePrecios = productos.map(prod=>{
    return{
      id: prod.id,
      nombre: prod.nombre,
      precio: prod.precio * 1.10,
      tipo: prod.tipo
    }
  })

  console.log(aumentoDePrecios);
}
aumentarPrecios()



// FN Constructora
function Producto(nombre, precio, tipo) {
  this.id = productos.length + 1;
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  this.tipo = tipo;
}

const producto_11 = new Producto("addidas", "5300.99", "urbanas");
function crearProducto() {
  let nombre = prompt("Ingresa el nombre del producto");
  let precio = prompt("Ingresa el precio del producto");
  let tipo = prompt("Ingresa el tipo de producto");

  const nuevoProducto = new Producto(nombre, precio, tipo);

  return nuevoProducto;
}
console.log(producto_11);
console.log(productos);