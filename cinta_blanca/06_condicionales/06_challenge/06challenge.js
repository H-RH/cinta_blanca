

function aleatorio (minimo, maximo)
{ 
 var numero = Math.floor (Math.random() * (maximo - minimo+1) + minimo);
return numero;
}


var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ['Piedra', 'Papel', 'Tijera'];

var opcionUsuario; 
var opcionMaquina = aleatorio (0,2);

opcionUsuario = prompt('Elige\nPiedra: 0\nPapel: 1\nTijera: 2' );

alert('Maquina eligio:' + opciones[opcionMaquina]);

if(opcionUsuario==piedra&&opcionMaquina==piedra||opcionUsuario==papel&&opcionMaquina==papel||
    opcionUsuario==tijera&&opcionMaquina==tijera){alert('Empate') }

    if (opcionUsuario==piedra&&opcionMaquina==tijera||
            opcionUsuario==tijera&&opcionMaquina==papel||
            opcionUsuario==papel&&opcionMaquina==piedra){alert ('Ganaste')}
            
            if (opcionUsuario==piedra&&opcionMaquina==papel||
                opcionUsuario==tijera&&opcionMaquina==piedra||
                opcionUsuario==papel&&opcionMaquina==tijera){alert ('Perdiste')}       
                
else {alert(Estupido)}





 
   

// if(opcionUsuario == piedra)
// {
//   alert("Elegiste Piedra!");
//   if(opcionMaquina == piedra)
//   {
//   	alert("Empate!");
//   }
  
//   else if(opcionMaquina == papel)
//   {
//     alert("Perdiste!");
//   }
  
//   else if(opcionMaquina == tijera)
//   {
//     alert("Ganaste!");
//   }

// }
  
  
// else if(opcionUsuario == papel)
// {
//   alert("Elegiste Papel!");
//   if(opcionMaquina == piedra)
//   {
//     alert("Ganaste!");
//   }
  
//   else if(opcionMaquina == papel)
//   {
//     alert("Empate!");
//   }
  
//   else if(opcionMaquina == tijera) 
//   {
//     alert("Perdiste!");
//   }
  
// }



// else if(opcionUsuario == tijera)
// {
// 	alert("Elegiste Tijera!");
// 	if(opcionMaquina == piedra)
//     {
//       alert("Perdiste!");
//     }
    
    
//     else if(opcionMaquina == papel)
//     {
//       alert("Ganaste!");	
//     }

//     else if(opcionMaquina == tijera)
//     { 
//       alert("Empate!");
//     }

// }

// else

// {
// 	alert("Debes elegir 0,1 ó 2; Tonto!");
// }






// function aleatorio(minimo, maximo)
// {
// 	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
// 	return numero;
// }

// var piedra = 0;
// var papel = 1;
// var tijera = 2;

// var opciones = ["Piedra", "Papel", "Tijera"];

// var opcionUsuario;
// var opcionMaquina = aleatorio(0,2); 

// opcionUsuario = prompt("¿Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2" , 0);

// alert("Javascript elegio:" + opciones[opcionMaquina]);


// if(opcionUsuario == piedra)
// {
//   alert("Elegiste Piedra!");
//   if(opcionMaquina == piedra)
//   {
//   	alert("Empate!");
//   }
  
//   else if(opcionMaquina == papel)
//   {
//     alert("Perdiste!");
//   }
  
//   else if(opcionMaquina == tijera)
//   {
//     alert("Ganaste!");
//   }

// }
  
  
// else if(opcionUsuario == papel)
// {
//   alert("Elegiste Papel!");
//   if(opcionMaquina == piedra)
//   {
//     alert("Ganaste!");
//   }
  
//   else if(opcionMaquina == papel)
//   {
//     alert("Empate!");
//   }
  
//   else if(opcionMaquina == tijera) 
//   {
//     alert("Perdiste!");
//   }
  
// }



// else if(opcionUsuario == tijera)
// {
// 	alert("Elegiste Tijera!");
// 	if(opcionMaquina == piedra)
//     {
//       alert("Perdiste!");
//     }
    
    
//     else if(opcionMaquina == papel)
//     {
//       alert("Ganaste!");	
//     }

//     else if(opcionMaquina == tijera)
//     { 
//       alert("Empate!");
//     }

// }

// else

// {
// 	alert("Debes elegir 0,1 ó 2; Tonto!");
// }








    // {   alert('Elegiste Piedra');
    
    //      if()
    //     {
    //         ;
    //     }
    
    //     else if(opcionMaquina==papel)
    //     {
    //         alert('you lose :(')
    //     }
    
    //     else if(opcionMaquina==tijera)
    //     {
    //         alert('Winner Winner chicken dinner (∞)>');
    //     }
    // }
    
    // else if(opcionUsuario==papel){
    //     alert('Elegiste Piedra');
    
    //     if (opcionMaquina==papel){
    //         alert('Empate');
    //     }
    
    //     else if(opcionMaquina==tijera){
    //         alert('you lose :(');
    //     }
    
    //     else if(opcionMaquina==piedra){
    //         alert('Winner Winner chicken dinner (∞)>');
    //     }
    // }
    
    // else if(opcionUsuario==tijera){
    //     alert('Elegiste Piedra');
    
    //     if (opcionMaquina==tijera){
    //         alert('Empate');
    //     }
    
    //     else if(opcionMaquina==piedra){
    //         alert('you lose :(');
    //     }
    
    //     else if(opcionMaquina==papel){
    //         alert('Winner Winner chicken dinner (∞)>');
    //     }
    // } 
    
    // else{
    //    alert ('Estas bien wey *FacePalm*') }  
//and &&
//or ||
// if(edad >= 18 && edad <= 80 ){
//     console.log('Puedes conducir')
// }else if (edad === 17 || edad === 16 ){
//     console.log('Puedes sacar el permiso para conducir')
// }else if(edad < 16 || edad > 80 ){
//     console.warn('No puedes conducir')
// }else{
//     console.error('Ingresaste mal tu edad')
// }
//      comp 1                  comp2
//   comp a    comp b         comp a      comp b
// if(edad < 18 && edad > 10 || edad < 10 && edad === 5){
//     console.log('Estamos cool')
// }

