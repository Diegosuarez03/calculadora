//variables
const card =document.querySelectorAll('.card');
const stard =document.querySelector('.stard');
const stard_=document.querySelector('.stard_');
let  numeros= [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let targetas_destapadas= 0;
let targeta_1=null;
let  targeta_2=null;
let _m_movimientos=0;
let conteo_aciertos=0;

//eventos
document.addEventListener('DOMContentLoaded',()=>{
    inicarAPP();
})
stard.addEventListener('click', () =>{//hago la accion de oprimir un boton
    cronometro();
    
})
stard_.addEventListener('click', ()=>{
    location.reload();


})
//funciones
function inicarAPP(){
    for (let i=0; i < card.length;  i++ ){
        card[i].disabled =true;
      
    }
}
function desbloquear_cards(){
    for(let i=0; i<card.length; i++){
        card[i].disabled=false; 
    }
}
function cronometro(){
   desbloquear_cards();
    let time = 60;
    stard.classList.add("disabled");
    const contado_tiempo = setInterval(()=>{
    time--; 
    contado_cronometro.innerHTML=time;  
    if(time == 0) {
        clearInterval(contado_tiempo);
       
        swal.fire({
            position: 'end',
            icon: 'erro',
            title: 'Your time end',
            showConfirmButton:true,
          })
          .then((result)=>{
            if(result.isConfirmed){
                location.reload();
            }
          })
        }
    
    },1000)

}
/////////////////////__logica__//////////
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);
//////////////////////funtion//////////////
function destapar(id){
targetas_destapadas++;
console.log(targetas_destapadas);
if(targetas_destapadas==1){
    //--------mostrar _el _primer numero------////
  targeta_1= document.getElementById(id); 
  targeta_1.innerHTML =numeros[id];  
  targeta_1.disabled=true;  
}
if(targetas_destapadas==2){
    targeta_2=document.getElementById(id);
    targeta_2.innerHTML=numeros[id];
    targeta_2.disabled=true;
    _m_movimientos++;
    contador_de_movimientos.innerHTML=_m_movimientos;

if(targeta_1.innerHTML==targeta_2.innerHTML){
    conteo_aciertos++;
    contador_de_aciertos.innerHTML=conteo_aciertos;
    targetas_destapadas=0;
    if(conteo_aciertos==8){
        swal.fire({
            position: 'end',
            icon: 'ok',
            title: 'You win the game',
            showConfirmButton:true,
          })
          .then((result)=>{
            if(result.isConfirmed){
                location.reload();
            }
          })
    }
}
if(targeta_1.innerHTML!=targeta_2.innerHTML){
     
   const delay= setInterval(()=>{
        targeta_1.disabled=false;
        targeta_1.innerHTML=null;
targeta_2.disabled=false;
targeta_2.innerHTML=null;
clearInterval(delay);
targetas_destapadas=0;
},1000)

}
}
}
