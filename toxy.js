const toxy = require('toxy')

// Create the toxy admin server
var admin = toxy.admin({ cors: true, apiKey: 's3cr3t' })
admin.listen(9000)

// Create the toxy proxy
var proxy = toxy()
proxy.listen(3000)

// Add the toxy instance to be managed by the admin server
admin.manage(proxy)

// Then configure the proxy
proxy
  .forward('https://www.google.com.br')

//50% Gateway timeout 
proxy
  .poison(toxy.poisons.inject({
          code: 504,
          body: '{"error": "gateway timeout"}',
          headers: {'Content-Type': 'application/json'}
        }))
  .withRule(toxy.rules.probability(50))


proxy.all('/*')

console.log('toxy proxy listening on port:', 3000)
console.log('toxy admin server listening on port:', 9000)