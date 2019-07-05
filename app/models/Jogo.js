function Jogo(dados = 5, lados = 6) {

	console.log('model: executar construtor de jogo');
	this.dados = dados;
	this.lados = lados;
	this.pontos = 0;
	this.n = 0;
	this.nGenerala = 0;
	this.nPoker = 0;
	this.nFull = 0;
}

Jogo.prototype.novoJogo = function () {
	console.log('model: novoJogo');
	this.pontos = 0;
	this.n = 0; 
	this.nGenerala = 0;
	this.nPoker = 0;
	this.nFull = 0;
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

const GENERALA = { jogo : 'Generala *Parabéns você conseguiu a pontuação máxima*', pontos : 100 }
const POKER    = { jogo : 'Poker *Olá você alcançou 50 pontos*'   , pontos : 50 }
const FULL     = { jogo : 'Full *Parabens você atingiu 30 pontos*'    , pontos : 30  }
const NADA     = { jogo : 'Nenhum'  , pontos : 0   }

Jogo.prototype.analizarLancamento = function(lancamento){

	var contagem = this.contarDados(lancamento);
	var resultado;

	if (contagem.find(e => e === 5)){
		resultado = GENERALA;
		this.nGenerala += 1;
	}

	else if(contagem.find(e => e === 4)){
		resultado = POKER;
		this.nPoker +=  1; 
	}


	else if(contagem.find(e => e === 3) && contagem.find (e => e === 2)){
		resultado = FULL;
		this.nFull += 1;
	}

	else 
		resultado = NADA

	return resultado;

}
Jogo.prototype.novoLancamento = function(){

	console.log('model: novoLancamento');
	var lancamento = this.lancarDados();
	console.log('model: analiseLancamento');
	var analiseLancamento = this.analizarLancamento(lancamento);
	this.pontos += analiseLancamento.pontos;
	this.n += 1;
	console.log('model: prepara resultado');

	var resultado = {
		pontosAcumulados : this.pontos,
		nLancamentos : this.n,
		lancamento : lancamento,
		jogoLancamento : analiseLancamento.jogo,
		pontosLancamento : analiseLancamento.pontos,
		nGenerala: this.nGenerala,
		nPoker: this.nPoker,
		nFull: this.nFull

	};

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