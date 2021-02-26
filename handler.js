const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports.run = async (event, context) => {

    const name = event.queryStringParameters.name

    await delay(50000)

    return {
        statusCode: 200,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: `Hola ${name}`})
    };
}