module.exports = ({
    name: 'reload',
    code: `
$updateCommands
$deletecommand
\`\`\`kt
$author[1;All command has been reloaded;$userAvatar[$authorID]]
@$username updated $commandscount commands\`\`\`
$color[1;$getGlobalUserVar[color]]
$onlyforids[$botownerid;You don't have permission for this command, this command is only for bot owner.]`
})