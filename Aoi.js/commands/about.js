module.exports = ({
    name: 'about',
    code: `
    $title[1;$client[user.username] Statistics]
    $thumbnail[1;$useravatar[$clientid]]
    $description[1;
    **Owner**
\`\`• $userTag[$botOwnerID]\`\`
**General Information**
\`\`• Users: $allMembersCount\`\`
\`\`• Guilds: $serverCount\`\`
\`\`• Channels: $allChannelsCount\`\`
**Bot Information**
\`\`• Ping: $ping MS \`\`
\`\`• Uptime: $uptime\`\`
\`\`• Created: $creationDate[$clientID]\`\`
**System Information**
\`\`• Memory: $round[$ram] MB\`\`
\`\`• CPU Usage: $cpu[os]%\`\`
\`\`• Aoi.js: v$packageVersion\`\`
\`\`• Node.js: $nodeVersion\`\`]
    $color[$getGlobalUserVar[color]]
    $footer[1;Requested by $usertag $addTimestamp[1]]`
})