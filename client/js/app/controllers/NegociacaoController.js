class NegociacaoController {
  constructor() {
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputData = document.querySelector("#data");
    this.inputValor = document.querySelector("#valor");
    this._listaNegociacao = new ListaDeNegociacao();
    this._negociacaoView = new NegociacaoView(document.querySelector("#tabelaNegociacao"));
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView( document.querySelector('#mensagemView'));
    this._mensagemView.update(this._mensagem);
  }I
  adiciona(event) {
    event.preventDefault();

    this._criarNegociacao();
    console.log(this._listaNegociacao.negociacoes);
    this._negociacaoView.update(this._listaNegociacao);
    this._mensagem.texto = 'Negociação adicionada com sucesso';
    this._mensagemView.update(this._mensagem);
    this._limparFormulario();
  }

    _criarNegociacao() {
       let negociacao= new Negociacao(DateHelper.textoParaData(this.inputData.value), this.inputQuantidade.value, this.inputValor.value);
       this._listaNegociacao.adiciona(negociacao);
    }

  _limparFormulario() {
    this.inputData.value = "";
    this.inputQuantidade.value = 1;
    this.inputValor.value = 0;
    this.inputData.focus();
  }
}
