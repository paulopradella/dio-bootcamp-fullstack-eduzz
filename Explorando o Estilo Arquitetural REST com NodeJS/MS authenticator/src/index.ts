import express,{Request, Response,NextFunction} from'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//configuração da Aplicação
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//configuração de rotas
app.use(statusRoute)
app.use(usersRoute);

//Inicialização do servidor
app.listen(3000, ()=>{
    console.log('Aplicação executando na porta 3000');
    
})