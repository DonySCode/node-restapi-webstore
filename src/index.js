import app from './app.js'

app.listen(app.get('port'))

console.log('servidor iniciado en puerto', app.get('port'))