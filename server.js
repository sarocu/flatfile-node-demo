const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const EMBED_ID = '82989a11-32d0-42e2-960d-d363e80ce944'
const PRIVATE_KEY = 'd4JcuXbVdJlQtZv4ghDTwD0hPKHUK9iBSzMnWKCmXopYUh9TsZEGZdyodVaD6oX'

app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile)

app.get('/', async (_req, res) => {
  const currentUser = {
    email: 'sam+111@example.com'
  }

  return res.render('index.html', {
    token: jwt.sign({
      embed: EMBED_ID,
      sub: currentUser.email
    }, PRIVATE_KEY)
  })
})

app.listen(4242)