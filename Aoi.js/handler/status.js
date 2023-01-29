module.exports = (bot) => {
    bot.status({
        text: `$getServerVar[prefix]help`,
        type: 'PLAYING',
        time: 12
    })
}