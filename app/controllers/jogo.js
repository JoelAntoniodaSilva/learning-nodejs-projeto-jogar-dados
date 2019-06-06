//var model = require('../models/Jogo');

var jogoModel = undefined;

module.exports.iniciar = function (application, req, res){

	console.log('controller: iniciar');
	console.log('controller: cria instancia de jogo');	
	jogoModel = new application.app.models.Jogo.Jogo();
	console.log('controller: atualiza view - novoJogo');
	res.render('novoJogo');

}

module.exports.novoLancamento = function(application, req, res){

	console.log('controller: novoLancamento');
	if (jogoModel){
		console.log('controller: pede para model fazer novoLancamento');
		var resultado = jogoModel.novoLancamento();
		res.render('novoLancamento', resultado );
	}

}

	module.exports.reiniciar = function(application, req, res){
		console.log('controller: reiniciar');
		if(jogoModel){
			console.log('controller: pede para o model criar um novo jogo');
			jogoModel.novoJogo();
			console.log('controller: atualizar a view');
			res.render('novoJogo');
		}else{
			console.log('controller: atualizar a view para pagina principal');
			res.render('home');
		}

	}
	module.exports.encerrar = function(application, req, res){
		console.log('controller: encerrar');
		jogoModel = undefined;
		res.render('home');
	}
