const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports.run = async (event, context) => {

    // console.log(event)

    const name = event.queryStringParameters.name

    // const name = JSON.parse(event.Records[0].body).name

    // await delay(50000) //Simulate a long job

    return {
        statusCode: 200,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: `Hola ${name}`})
    };
}