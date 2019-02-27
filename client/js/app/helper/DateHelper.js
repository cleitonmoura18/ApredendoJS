class DateHelper{
    constructor(){
        throw new Error("Classe estática favor não iniciar");
    }
   static textoParaData(texto){
    if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
        throw new Error('Deve esta no formato aaaa-mm-dd');
    }
    return new Date(...texto.split('-').
    map((item,indice)=> item -indice % 2));
    }

   static dataParaTexto( data){
       return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
}