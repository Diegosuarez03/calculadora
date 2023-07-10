class Display{
    constructor(displayvaloranterior, displayvaloractual){
        this.displayvaloranterior=displayvaloranterior;
        this.displayvaloractual=displayvaloractual;
        this.calculador= new Calculadora;
        this.valoractual='';
        this.valoranterior='';
        this.tipo_operacion=undefined;
        this.signos={
            sumar: '+',
            dividir: '/',
            multiplicar:'x',
            restar:'-' ,
        }
    }
    borrar_todo(){
        this.valoractual='';
        this.valoranterior='';
        this.tipo_operacion=undefined;
        this.imprimirvalores();
    }
    borrar(){
        this.valoractual=this.valoractual.toString().slice(0,-1);
         this.imprimirvalores();
    }
  
    agregarnumero(numero ){
        if(numero=='.'&& this.valoractual.includes('.'))return;
this.valoractual= this.valoractual.toString()+numero.toString();  
this.imprimirvalores();
    }
    operar(tipo){
        this.tipo_operacion !=='igual'&& this.calculator(); 
        this.tipo_operacion=tipo;
        this.valoranterior= this.valoractual || this.valoranterior;
        this.valoractual=''; 
        this.imprimirvalores();
       }
    imprimirvalores(){
        this.displayvaloractual.textContent=this.valoractual;
        this.displayvaloranterior.textContent = this.valoranterior + this.signos[this.tipo_operacion || '']; 
    }
  
    calculator(){
        this.valoractual=parseFloat(this.valoractual);
        this.valoranterior=parseFloat(this.valoranterior);
        if(isNaN(this.valoractual) || isNaN(this.valoranterior)) return; 
        this.valoractual= this.calculador[this.tipo_operacion](this.valoranterior, this.valoractual);
    }
}