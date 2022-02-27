//Variables
var autorolesReef = ['she / her', 'he / him', 'they / them', 'it / that', 'hide spanish', 'hide english', 'hide portuguese', 'hide french', 'showdown!', 'cq-80']
var autorolesSDJ = ['uno!', 'casino', 'werewolf', 'among us', 'gente plana', 'nsfw', 'mutacolor']
var games = ["with boxes!", "boxie!", "with more boxes!", "boxie?", "📦",]
var trashtalk = ["📦", "Woomy", "Friend!", "Boxie...", "Candy!", "Sleep...", "Party!", "Quiet?", "Boxie!", "Games?", "Boxie!?", "Touch!", "Squid?", "Urchin!", "Fishie!", "Jelly?", "Break! 📦","Fishie?", "Boring.", "Puff!", "Clam!", "Dance...", "Games!", "Boxie?", "Clam...", "Park?", "Noise...", "Boooo!", "Jump...", "Weeee!", "Sea...", "Jelly!", "Bug?", "Flip!", "Calamari...", "Magic...", "Hop!", "Octo!", "Vacation!", "Shiny...", "Hug?", "Yay!", "Play?", "Ball!?", "Draw?", "Music!", "Sky?", ":>", "Nyoom!", "Duckie?", "Awoooo!", "Glitter...", "Sweets!", "Fly...", "Fun?", "Boop!", "Ink!", "Bug...", "Hehe!", "Onion ring...", "Splash!", "Play!", "Friend?", "Draw!", "Huh?", "Sunset!", "Cardboard...", "Battle?", "Noise!", "Ink?", "Up!", "Stars...", "Spin!", "Fluff!", "Veemo!", "Drink!", "Vacation?", "Touch?", "Ball?", "Jump!", "Fluff...", "Sky!", "Party...", "Octo?", "Bonk!", "*Woosh*", "Friend...", "Hope.", "Fwhoooom!", "Pop! 🎈", "Eerie...", "Magic!", "Flip... Flop... Flip...", "I knew that...", "Aha!", "Outfit!", "Pretty...", "Box! 📦", "Caja! 📦", "Boîte! 📦", "ボックス! 📦", "Kahon! 📦", "Kiste! 📦", "Caixa! 📦", "Play...", "Urchin?", "Down...", "Dance!", "Relax...", "Squeek!", "Fluff?", "Flop!", "Candy?", "Toy!", "Squidbag!", "Wakey!", "Party?", "Magic?", "Duckie!", "Ball!", "Squid!", "Clam?", "Doggie!", "Park!", "Battle!", "Fun!", "Quiet...", "Hug!", "Paint!", "Sky...", "Splat!", "Awoooo...", "Calamari!", "♫", "Gift boxie! 🎁", "♪", "Sploosh!"] 
var emotes = ["📦", "📦", "🎁", "🦆", "🦑", "🐙", "🖌", "🎈", "🐌", "✨", "🦀", "🐟", "⚓", "🖌", "🎵", "🏓", "🐠"]
var hearts = ["❤️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤎", "🤍", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟"]
var igno = ["Dont ignore me!", "...Answer!", "Respond!...", "Say something!", "...Reply!...", "Seen...", ":<"]
var edit = ["Why did you edit that", "I saw it!", "*(edited)*"]
var delt = ["Why did you delete that", "I saw it!", "deleted..."]
var pin = ["Pin!", "Pin...", "📌!"]
var nChan = ["First!", "Pole.", "Empty...", "Fresh!"]
var nMen = ["Welcome!", "Newbie!", "Hey!"]
var wBritt = ['britt', 'bridgett', '530502122190405652']
var wBox = ['box', 'caja', 'boite', 'kahon', 'kiste', 'caixa', 'scatola', '箱', 'hako', '📦']
var bID = "530502122190405652"
var rID = "320398018060746752"
var guilds = ["412116759668064256", "707295290461257760"]
var avyChanns = ["426520047301951509", "707311420735225886"]
var avyRoles = ["584594259550797824", "737786182116573185"]
var channelMoved = false;
const colorOptions = {count: 11}
const prefix = 'br!'

//Packages
const Discord = require('discord.js')
const client = new Discord.Client({presence: {status: 'online', activity: {name: games[Math.floor(Math.random() * games.length)]}}, disableMentions: 'everyone'})
const http = require('http')
const express = require('express')
const app = express()
const getColors = require('get-image-colors')

//Page
var port = (process.env.PORT || 0)
app.get('/', (req, res) => res.sendStatus(200))
app.listen(port, () => console.log('Listening at port ' + port))
setInterval(() => {http.get("http://bridgett-v8.herokuapp.com/")}, 280000)

//Functions
function newAvy(int, oldUser, newUser, palette) {
  var userRoles = client.guilds.cache.get(guilds[int]).member(newUser).roles
    if (oldUser.avatarURL() !== newUser.avatarURL() && (palette || userRoles.cache.find(role => role.id === avyRoles[int]))) {
      getColors(newUser.displayAvatarURL({format: 'png', dynamic: true}), colorOptions).then(colors => {
      var firstColors = ('<@' + newUser.id + '>, Pick a new color! [Reply "1", "2", "3" ... "+" or Ignore]\nhttps://encycolorpedia.com/' + colors[0].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[1].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[2].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[3].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[4].toString().substring(1))
      var secondColors = ('<@' + newUser.id + '>, Pick a new color! [Reply "6", "7", "8" ... "-" or Ignore]\nhttps://encycolorpedia.com/' + colors[5].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[6].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[7].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[8].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[9].toString().substring(1))
      client.channels.cache.get(avyChanns[int]).send(firstColors).then(function (nMessage) {
        const collector = new Discord.MessageCollector(client.channels.cache.get(avyChanns[int]), m => m.author.id === newUser.id, {time: 1800000})
        collector.on('collect', cMessage => {
          var numb = parseInt(cMessage.content)
          if (cMessage.content === '+') {
            nMessage.edit(secondColors)}
          else if (cMessage.content === '-') {
            nMessage.edit(firstColors)}
          else if (numb) {userRoles.color.setColor(colors[--numb].toString())
            collector.stop()
            cMessage.reply("Set!")}
          else {collector.stop()}})})})}}

//Ready
client.once('ready', () => {console.log('🐙')})

//Avys
client.on('userUpdate', (oldUser, newUser) => {
  if (client.guilds.cache.get(guilds[0]).member(newUser)) {newAvy(0, oldUser, newUser, false)}
  if (client.guilds.cache.get(guilds[1]).member(newUser)) {newAvy(1, oldUser, newUser, false)}
})


//Channel Lock
client.on('channelUpdate', (oldChannel, newChannel) => {
  if (!(oldChannel && newChannel)) {return;}
  if (newChannel.guild !== client.guilds.cache.get(guilds[1])) {return;}
  if (oldChannel.position === newChannel.position) {return;}
  if (!channelMoved) {
    newchannel.setPosition(oldChannel.position)
    channelMoved = true;}
  else {channelMoved = false}})


//Messages
client.on('message', message => {

  try {

  //Ignore Bots
  if (message.author.bot || message.system) return;

  //Britt
  if (wBritt.some(word => message.content.toLowerCase().includes(word))) {
    return message.channel.send("Me!")}

  //Box
  if (wBox.some(word => message.content.toLowerCase().includes(word))) {
    message.react("📦")
    return message.channel.send("Boxie!")}  

  //Args
  var msgCon = message.content.toLowerCase()
  var args = message.content.split(' ')
  var argresult = args.slice(1).join(' ')

  //Message Attachments
  if (message.attachments.size) {var msgAtt = Array.from(message.attachments.values(), x => x.url)}
    
  //Cool Hearts
  if (msgAtt && message.channel.parentID === "430744121297207296") {message.react(hearts[Math.floor(Math.random() * hearts.length)])}
  
  //Non-Prefix Ignore
  if (!message.guild && message.author.id !== rID) return;
  if (!message.content.toLowerCase().startsWith(prefix)) return;

  //Say
  if (msgCon.startsWith(prefix + 'say') && (argresult || msgAtt)) {
    if (client.channels.cache.get(args[1])) {
      client.channels.cache.get(args[1]).send((args.slice(2).join(' ')), {files: msgAtt})
      message.reply("Done!")}
    else if (client.users.cache.get(args[1])) {
      client.users.cache.get(args[1]).send((args.slice(2).join(' ')), {files: msgAtt})
      message.reply("Done!")}
    else {
      message.channel.send(argresult, {files: msgAtt})
      message.delete()}}

  //Vitali
  else if (msgCon.startsWith(prefix + 'vit ') && message.guild === client.guilds.cache.get(guilds[1])) {
    client.fetchWebhook("869232606133252207", "JpQ9cAb_t2RcgebgFIjbN742tWSn4M1b6S6wmEVr4yYLKlOXZH-8NFNMCDeZUQLLU_ry").then(async webhook => {
    await webhook.edit({avatar: this.avatar, channel: message.channel})
    await webhook.send(argresult)})
    message.delete()}

  //Edit
  else if (msgCon.startsWith(prefix + 'edit ') && args[3]) {
    var chann = client.channels.cache.get(args[1])
    chann.messages.fetch(args[2]).then(function (nMessage) {nMessage.edit(args.slice(3).join(' '))})}

  //Rol
  else if (msgCon.startsWith(prefix + 'role ') && message.guild === client.guilds.cache.get(guilds[0])) {
    var roles = message.member.roles
    if (roles.color.id === "563155114886561792") {
      message.guild.roles.create({data: {name: argresult, color: "WHITE", position: 16, permissions: 0}}).then(role => {
      roles.add(role.id)})}
    else {roles.color.setName(argresult)}
    message.reply("Set!")}

  //Color
  else if (msgCon.startsWith(prefix + 'color ')) {
    if (argresult === "000000") {return message.reply("Discord doesn't like this color...")}
    var roles = message.member.roles
    if (roles.color.id === "563155114886561792") {return message.reply('You need a custom role first! (' + prefix + 'role <text>)')}
    roles.color.setColor(argresult).catch(() => message.reply('Error.'))
    message.reply("Set!")}
 
  //Color Palette
  else if (message.content.toLowerCase() === (prefix + 'palette')) {
    var roles = message.member.roles
    if (roles.color.id === "563155114886561792") {return message.reply('You need a custom role first! (' + prefix + 'role <text>)')}
    if (client.guilds.cache.get(guilds[0]).member(message.author)) {newAvy(0, client.user, message.author, true)}
    if (client.guilds.cache.get(guilds[1]).member(message.author)) {newAvy(1, client.user, message.author, true)}}

  //Autoroles
  else if (msgCon.startsWith(prefix + 'autorole ') && (autorolesReef.includes(argresult.toLowerCase()) || autorolesSDJ.includes(argresult.toLowerCase()))) {
    var roles = message.member.roles, rol = message.guild.roles.cache.find(role => role.name.toLowerCase().includes(argresult.toLowerCase()))
    if (typeof rol === "undefined") {return message.reply("Error.")}
    if (rol.id === "584594259550797824" && roles.color.id === "563155114886561792") {return message.reply('You need a custom role first! (' + prefix + 'role <text>)')}
    if (!roles.cache.find(role => role.id === rol.id)) {roles.add(rol.id)}
    else {roles.remove(rol.id)}
    message.reply("Done!")}
  
  //Ping Pong Bomb
  else if (message.content.toLowerCase() === (prefix + '🏓')) {
    var player = message.author, origin = message.channel
    origin.send('🏓❗')
    const game = new Discord.MessageCollector(origin, m => m.author.id === player.id, {time: 600000})
    var safes = ["1", "2", "3", "4", "5"], traps = ["6", "7", "8", "9"]
    var britt_swinged = true, replied = false, score = 0
    game.on('collect', nMessage => {
      if (nMessage.content === ('🏓') && britt_swinged && !replied) {
        score++
        if (nMessage.id.endsWith("0")) {
          origin.send('<:golden_ping:881382652488343603>❗').then(async function () {
          const collector = new Discord.MessageCollector(origin, m => m.author.id === player.id, {time: 1200})
          collector.on('collect', rMessage => {
            if (rMessage.content === ('🏓')) {replied = true
              score = (score + 2)
              collector.stop()}})
          collector.on('end', () => {
            if (!replied) {origin.send('🏓<:dots:881376853233897472>')}
            replied = false})})}
        else if (safes.some(word => nMessage.id.endsWith(word))) {
          origin.send('🏓❗').then(async function () {
          const collector = new Discord.MessageCollector(origin, m => m.author.id === player.id, {time: 2000})
          collector.on('collect', rMessage => {
            if (rMessage.content === ('🏓')) {replied = true
              collector.stop()}})
          collector.on('end', () => {
            if (!replied) {
              origin.send('You lost... Ping faster!')
              game.stop()}
            replied = false})})}
        else if (traps.some(word => nMessage.id.endsWith(word))) {
          britt_swinged = false
          origin.send('💣❗').then(async function () {
          const collector = new Discord.MessageCollector(origin, m => m.author.id === player.id, {time: 2000})
          collector.on('collect', rMessage => {
            if (rMessage.content === ('🏓')) {replied = true
              origin.send('You lost... Watch out for bombs!')
              collector.stop()
              game.stop()}})
          collector.on('end', () => {
            if (!replied) {
              britt_swinged = true
              score++
              origin.send('🏓<:dots:881376853233897472>')}
            replied = false})})}}})
    game.on('end', () => {
      origin.send(score + " points!")})}

  //Chaos
  else if (message.content.toLowerCase() === (prefix + 'chaos') && message.guild === client.guilds.cache.get(guilds[0])) {
    message.delete()
    const chaos = new Discord.MessageCollector(message.channel, m => m.author.id !== bID, {time: 3600000})
    var origin = message.channel
    origin.send('Hehe~')

    chaos.on('collect', message => {

      if (message.content.toLowerCase() === (prefix + 'get back to your box') && client.guilds.cache.get(guilds[0]).member(message.author).roles.find(role => role.id === ('458840596988035072'))) {
        return chaos.stop()}

      if (message.content.toLowerCase().startsWith(prefix + 'say ')) return;

      var bMsg = trashtalk[Math.floor(Math.random() * trashtalk.length)]
      var bRct = emotes[Math.floor(Math.random() * emotes.length)]
      var one = ["0", "1"], two = ["2", "3"], three = ["4", "5"], four = ["6", "7"], five = ["8", "9"]

      if (one.some(word => message.id.endsWith(word))) {
        message.author.send(bMsg).catch(() => origin.send(bMsg)).then(function (message) {
        var sent_in = message.channel;
        const collector = new Discord.MessageCollector(sent_in, m => m.author.id !== bID, {time: 20000})
        collector.on('collect', message => {collector.stop()})
        collector.on('end', message => {if (!collector.received) {
        var bIgn = igno[Math.floor(Math.random() * igno.length)]
        sent_in.send(bIgn)}})})}

      else if (two.some(word => message.id.endsWith(word))) {
        origin.send(bMsg).then(function (message) {
        var sent_in = message.channel;
        const collector = new Discord.MessageCollector(sent_in, m => m.author.id !== bID, {time: 20000})
        collector.on('collect', message => {collector.stop()})
        collector.on('end', message => {if (!collector.received) {
        var bIgn = igno[Math.floor(Math.random() * igno.length)]
        sent_in.send(bIgn)}})})}

      else if (three.some(word => message.id.endsWith(word))) {
        client.guilds.cache.get(guilds[0]).member(message.author.id).setNickname(bMsg).catch(() => origin.send(b_msg).then(function (message) {
        var sent_in = message.channel; 
        const collector = new Discord.MessageCollector(sent_in, m => m.author.id !== bID, {time: 20000})
        collector.on('collect', message => {collector.stop()})
        collector.on('end', message => {if (!collector.received) {
        var bIgn = igno[Math.floor(Math.random() * igno.length)]
        sent_in.send(bIgn)}})}))}

      else if (four.some(word => message.id.endsWith(word))) {
        client.guilds.cache.get(guilds[0]).member(bID).setNickname(bMsg)}

      else if (five.some(word => message.id.endsWith(word))) {
        message.react(bRct)}})

  chaos.on('end', message => {origin.send('Nap...')})}

  //Eval
  if (msgCon.startsWith(prefix + 'eval ') && message.author.id === rID) {
    eval(argresult)
    message.reply("Done!")}

  } catch(error) {console.log('Trigger: ' + message.content + ' | ' + error)}})

//Token
client.login(process.env.TOKEN)
