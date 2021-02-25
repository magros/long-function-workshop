const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports.run = async (event, context) => {

    await delay(50000)

    console.log(event)


    return {
        statusCode: 200,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: "Ok"})
    };
}