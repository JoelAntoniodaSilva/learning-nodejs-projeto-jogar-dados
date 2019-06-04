function Jogo(dados  = 5, lados = 6) {

	console.log('model: executar construtor de jogo');
	this.dados = dados;
	this.lados = lados;
	this.pontos = 0;
	this.n = 0;
}

Jogo.prototype.novoJogo = function () {
	console.log('model: novoJogo');
	this.pontos = 0;
	this.n = 0; 
}

Jogo.prototype.lancarUmDado = function(){
	var valorAleatorio = Math.random();
	var lado = 1 + Math.floor(valorAleatorio * this.lados);
	return lado;
}

Jogo.prototype.lancarDados = function () {
	console.log('model: lancarDados');
	var lancamento = [];
	for (var i = 0; i < this.dados; i++) {
		lancamento[i] = this.lancarUmDado();
	}
	return lancamento;
}

Jogo.prototype.contarDados = function (lancamento) {
	var contagem = Array(this.lados).fill(0);
	for (var i = 0; i < lancamento.length; i++) {
		var numero = lancamento[i];
		contagem[numero-1] += 1;
	} 
	return contagem;
}

const GENERALA = { jogo : 'Generala', pontos : 100 }
const POKER    = { jogo : 'Poker'   , pontos : 100 }
const FULL     = { jogo : 'Full'    , pontos : 50  }
const NADA     = { jogo : 'Nenhum'  , pontos : 0   }

Jogo.prototype.analizarLancamento = function(lancamento){

	var contagem = this.contarDados(lancamento);
	var resultado;

	if (contagem.find(e => e === 5))
		resultado = GENERALA;
	
	else if(contagem.find(e => e === 4))
		resultado = POKER;

	else if(contagem.find(e => e === 3) && contagem.find (e => e === 2) )
		resultado = FULL;

	else 
		resultado = NADA

	return resultado;

}	

jogo = new Jogo();

lancamento = jogo.lancarDados();
contagem = jogo.contarDados(lancamento);
resultado = jogo.analizarLancamento(lancamento);

console.log('dados sorteado: ', lancamento);
console.log('Contagem: ', contagem);
console.log('Analise Do Lancamento: ', resultado);

module.exports.Jogo = Jogo;