class NegociacaoController{
    constructor(){
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputData = document.querySelector('#data');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona(event){
        event.preventDefault();
        let helper = new DateHelper();
        let data = helper.textoParaData(this.inputData.value);
        console.log(data);
        let negociacao = new Negociacao(data,this.inputQuantidade.value,this.inputValor.value);
        let diaDoMes = helper.dataParaTexto(data);
        console.log(diaDoMes);
    }
}