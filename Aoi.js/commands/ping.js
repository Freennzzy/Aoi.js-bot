module.exports = ({
    name: 'ping',
    code: `
    $author[1;My ping $ping ms;$userAvatar[$authorID]]
    $color[1;$getGlobalUserVar[color]]`
})