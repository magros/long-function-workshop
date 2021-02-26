const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const axios = require('axios')

module.exports.run = async (event, context) => {

    const name = JSON.parse(event.Records[0].body).name

    await delay(50000)

    await axios.post('http://marco-5cd40021.localhost.run/test-long-job-webhook', {
        message: `Hola ${name}`
    })

    //
    // return {
    //     statusCode: 200,
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify({message: `Hola ${name}`})
    // };
}