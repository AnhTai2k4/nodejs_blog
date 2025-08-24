const express = require('express') ;
const hbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path')
const app = express()
const port = 3000

const route = require('./routes/index.js')
const db = require('./config/db')

db.connect()

app.use(express.static(path.join(__dirname,'public')))

//http logger
app.use(morgan('combined'))

//template engine 
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

//Home, search, contact

//Routes init
route(app)


//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
