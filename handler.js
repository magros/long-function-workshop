const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports.run = async (event, context) => {
    await delay(20000)

    console.log(event)
}