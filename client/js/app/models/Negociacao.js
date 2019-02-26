class Negociacao{
    constructor(data,quantidade,valor){
        this._data = data;
        this._quantidade=quantidade;
        this._valor =valor;
        /**Usado para congelar o objeto e impetir alterações dos atributos,
         *  porém mesmo assim é possível alterar as propriedades do objeto data */
        Object.freeze(this);
    }
    get volume ( ) {
        return this._quantidade * this._valor;
    }
    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
    toString(){
        return this._data+';'+this._quantidade+';'+this._valor;
    }
}