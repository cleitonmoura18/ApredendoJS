class NegociacaoController{
    constructor(){
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputData = document.querySelector('#data');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona(event){
        event.preventDefault();
      
        let data = DateHelper.textoParaData(this.inputData.value);
        console.log(data);
        let negociacao = new Negociacao(data,this.inputQuantidade.value,this.inputValor.value);
        let diaDoMes = DateHelper.dataParaTexto(data);
        console.log(diaDoMes);
    }
}