const express = require('express')
const port = 3000
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const getUsers = require('./user')

app.use(bodyParser.urlencoded({extended : true}))

app.engine('handlebars',exphbs({defaultLayout : 'main'}))
app.set('view engine','handlebars')

app.get('/', (req, res)=>{
  res.render('index')
})

app.post('/',(req, res)=>{
  let user = getUsers(req.body.id, req.body.passwords)
  if(user.includes('OOPS')){
    res.render('index', {notUser : user})
    return
  } 
  
  res.render('login', {user})
})

app.listen(port,()=>{
  console.log('now is running')
})