const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
 
// rotas da aplicação
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const conteudosRouter = require('./routes/conteudosRouter');
const deletarRouter = require('./routes/usersRouter');

 
app.set('port', process.env.PORT);
app.use(express.json());
app.use(cors());

// habilitar utilização em nossa aplicação
app.use('/api', usersRouter);
app.use('/api', loginRouter);  
app.use('/api', conteudosRouter); 
app.use('/api', deletarRouter);  
// app.use('/api', forgotPasswordRouter);

module.exports = app;