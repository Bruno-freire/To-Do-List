const express = require('express');
const path = require('path')

const checkListRouter = require('./src/routes/checklist');
const TaskRouter = require('./src/routes/task');
const rootRouter = require('./src/routes/index');
const methodOverride = require('method-override');

require('./config/database')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method', {methods:['POST', 'GET']}));

app.use(express.static(path.join(__dirname,'public')))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/', rootRouter)
app.use('/checklist', checkListRouter)
app.use('/checklist', TaskRouter.checklistDependent)
app.use('/tasks', TaskRouter.simple);


const log = (req,res, next) => {
  console.log(req.body);
  console.log(`Data: ${Date.now()}`)
  next();
}

app.use(log);

app.listen(3000, () => {
  console.log('Servidor iniciado');
})