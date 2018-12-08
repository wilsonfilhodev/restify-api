const restify = require('restify')
const mongoose = require('mongoose')
const alunoRouter = require('./routers/aluno.router');

mongoose.connect('mongodb://root:root1234@ds129484.mlab.com:29484/api-restify', 
	{
        useNewUrlParser: true
    }
).then(_ => {
	initializeServer()
}).catch(console.error)

function initializeServer() {
	const server = restify.createServer({
    	name: 'api-restify',
		version: '1.0.0',
		ignoreTrailingSlash: true
	})
	
	server.use(restify.plugins.acceptParser(server.acceptable))
	server.use(restify.plugins.queryParser())
	server.use(restify.plugins.bodyParser())
	
	alunoRouter.applyRoutes(server);
	
	server.listen(3000, function () {
		console.log('api listening on 3000');
	})
}