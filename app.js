const express = require('express')
const exhbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  const content = {
    string: `首頁`
  }
  res.render('index', { content })
})

app.get('/:btn_name', (req, res) => {

  const content = {
    string: `${req.params.btn_name}`
  }
  res.render('index', { content })
})

app.listen(port, () => {
  console.log(`Activate http://localhost:${port}`)
})