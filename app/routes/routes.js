module.exports = function(application) {

	application.get('/', function(req, res){

		res.render('home');

	});

	application.get('/iniciar', function(req,res){

		console.log('routes: /iniciar');

		application.app.controllers.jogo.iniciar(application,req,res);
		
		//res.send('Esta Funcionalidade Não foi implementada ainda');

	});

	application.get('/lancarDados', function(req,res){

		console.log('routes: /lancarDados');

		application.app.controllers.jogo.novoLancamento(application, req, res);
		
		res.send('Esta Funcionalidade Não foi implementada ainda');

	});

	application.get('/reiniciar', function(req,res){

		console.log('routes: /reiniciar');
		
		res.send('Esta Funcionalidade Não foi implementada ainda');

	});

	application.get('/encerrar', function(req,res){

		console.log('routes: /encerrar');
		
		res.send('Esta Funcionalidade Não foi implementada ainda');

	});

}