const feathers = require('@feathersjs/feathers')
const rest = require('@feathersjs/rest-client')
const auth = require('@feathersjs/authentication-client')

const app = feathers()

// Connect to a different URL
const restClient = rest('http://localhost:3030')

// Configure an AJAX library (see below) with that client
app.configure(restClient.fetch(window.fetch.bind(window)))

app.configure(auth({
  storageKey: 'auth'
}))

export default app
