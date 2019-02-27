class ListaDeNegociacao{
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        //Criando uma copia das negociações para não poder fazer alterações por fora da classe
        return [].concat(this._negociacoes);
    }
}