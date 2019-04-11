var test = require('tape')
var tiny = require('tiny-json-http')
var arc = require('@architect/architect')

test('env', t=> {
  t.plan(1)
  t.ok(true, 'yas')
})

let close
test('arc.sandbox.start', async t=> {
  t.plan(1)
  close = await arc.sandbox.start()
  t.ok(true, 'http server started on http://localhost:3333')
})

/**
 * then we can make a request to it and check the result
 */
test('get /', async t=> {
  t.plan(1)
  let url = 'http://localhost:3333'
  let result = await tiny.get({url})
  t.ok(result.body, 'got 200 response')
  console.log(result.body)
})

/**
 * finally close the server so we cleanly exit the test
 */
test('server.close', t=> {
  t.plan(1)
  close()
  t.ok(true, 'server closed')
})
