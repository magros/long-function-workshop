const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports.run = async (event, context) => {

    await delay(20000)

    console.log(event)


    return {
        statusCode: 200,
        headers: {"Content-Type": "application/pdf"},
        body: {message: "Ok"},
        isBase64Encoded: true,
    };
}