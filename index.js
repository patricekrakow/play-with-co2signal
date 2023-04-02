const https = require('https')

const secret = require('./secret.json')

const options = {
  host: 'api.co2signal.com',
  path: '/v1/latest?countryCode=BE',
  method: 'GET',
  headers: {
    'auth-token': secret.apiKey
  }
}

const request = https.request(options, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Did not get an 200 OK from the server, but ${res.statusCode}`)
    res.resume()
    return
  }

  let data = ''
  res.on('data', (chunk) => {
    data += chunk
  })

  res.on('close', () => {
    console.log(JSON.stringify(JSON.parse(data), null, '  '))
  })
})

request.end()

request.on('error', (err) => {
  console.error(`Encountered an error trying to make a request: ${err.message}`);
})
