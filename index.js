//Variables
var autoroles = ['she / her', 'he / him', 'they / them', 'it / that', 'cq-80']
var games = ["with boxes!", "boxie!", "with more boxes!", "boxie?", "📦",]
var trashtalk = ["📦", "Woomy", "Friend!", "Boxie...", "Candy!", "Sleep...", "Party!", "Quiet?", "Boxie!", "Games?", "Boxie!?", "Touch!", "Squid?", "Urchin!", "Fishie!", "Jelly?", "Break! 📦","Fishie?", "Boring.", "Puff!", "Clam!", "Dance...", "Games!", "Boxie?", "Clam...", "Park?", "Noise...", "Boooo!", "Jump...", "Weeee!", "Sea...", "Jelly!", "Bug?", "Flip!", "Calamari...", "Magic...", "Hop!", "Octo!", "Vacation!", "Shiny...", "Hug?", "Yay!", "Play?", "Ball!?", "Draw?", "Music!", "Sky?", ":>", "Nyoom!", "Duckie?", "Awoooo!", "Glitter...", "Sweets!", "Fly...", "Fun?", "Boop!", "Ink!", "Bug...", "Hehe!", "Onion ring...", "Splash!", "Play!", "Friend?", "Draw!", "Huh?", "Sunset!", "Cardboard...", "Battle?", "Noise!", "Ink?", "Up!", "Stars...", "Spin!", "Fluff!", "Veemo!", "Drink!", "Vacation?", "Touch?", "Ball?", "Jump!", "Fluff...", "Sky!", "Party...", "Octo?", "Bonk!", "*Woosh*", "Friend...", "Hope.", "Fwhoooom!", "Pop! 🎈", "Eerie...", "Magic!", "Flip... Flop... Flip...", "I knew that...", "Aha!", "Outfit!", "Pretty...", "Box! 📦", "Caja! 📦", "Boîte! 📦", "ボックス! 📦", "Kahon! 📦", "Kiste! 📦", "Caixa! 📦", "Play...", "Urchin?", "Down...", "Dance!", "Relax...", "Squeek!", "Fluff?", "Flop!", "Candy?", "Toy!", "Squidbag!", "Wakey!", "Party?", "Magic?", "Duckie!", "Ball!", "Squid!", "Clam?", "Doggie!", "Park!", "Battle!", "Fun!", "Quiet...", "Hug!", "Paint!", "Sky...", "Splat!", "Awoooo...", "Calamari!", "♫", "Gift boxie! 🎁", "♪", "Sploosh!"] 
var emotes = ["📦", "📦", "🎁", "🦆", "🦑", "🐙", "🖌", "🎈", "🐌", "✨", "🦀", "🐟", "⚓", "🖌", "🎵", "🏓", "🐠"]
var igno = ["Dont ignore me!", "...Answer!", "Respond!...", "Say something!", "...Reply!...", "Seen...", ":<"]
var edit = ["Why did you edit that", "I saw it!", "*(edited)*"]
var delt = ["Why did you delete that", "I saw it!", "deleted..."]
var pin = ["Pin!", "Pin...", "📌!"]
var nchan = ["First!", "Pole.", "Empty...", "Fresh!"]
var nmen = ["Welcome!", "Newbie!", "Hey!"]
var wBritt = ['britt', 'bridgett']
var wBox = ['box', '📦']
var bID = "530502122190405652"
var rID = "320398018060746752"
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

//Ready
client.once('ready', () => {console.log('🐙')})

//Avys
client.on('userUpdate', (oldUser, newUser) => {
  var userRoles = client.guilds.cache.get("412116759668064256").member(newUser).roles
  if (oldUser.avatarURL() !== newUser.avatarURL() && userRoles.cache.find(role => role.id === "584594259550797824")) {
    getColors(newUser.displayAvatarURL({format: 'png', dynamic: true})).then(colors => {
    client.channels.cache.get("426520047301951509").send('<@' + newUser.id + '>, Pick a new color! [Reply "1", "2", "3" or Ignore]\nhttps://encycolorpedia.com/' + colors[0].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[1].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[2].toString().substring(1))
    const collector = new Discord.MessageCollector(client.channels.cache.get("426520047301951509"), m => m.author.id === newUser.id, {time: 600000})
    collector.on('collect', cMessage => {
      var numb = parseInt(cMessage.content)
      if (numb) {userRoles.color.setColor(colors[--numb].toString())}
      collector.stop()
      cMessage.reply("Set!")})})}})

//Messages
client.on('message', message => {

  try {

  //Non-Prefix Ignore
  if (wBritt.some(word => message.content.toLowerCase().includes(word))) { 
    return message.channel.send("Me!")}
  
  if (!message.guild && message.author.id !== rID) return;
  if (message.author.bot || message.system) return;
  if (!message.content.toLowerCase().startsWith(prefix)) return;

  //Args
  var msgCon = message.content.toLowerCase()
  var args = message.content.split(' ')
  var argresult = args.slice(1).join(' ')

  //Message Attachments
  if (message.attachments.size) {var msgAtt = Array.from(message.attachments.values(), x => x.url)}

  //Say
  if (msgCon.startsWith(prefix + 'say')) {
    message.channel.send(argresult, {files: msgAtt})
    message.delete()}

  //Rol
  else if (msgCon.startsWith(prefix + 'rol ')) {
    var roles = message.member.roles
    if (roles.color.id === "563155114886561792") {
      message.guild.roles.create({data: {name: argresult, color: "WHITE", position: 9, permissions: 0}}).then(role => {
      roles.add(role.id)})}
    else {roles.color.setName(argresult)}
    message.reply("Set!")}

  //Color
  else if (msgCon.startsWith(prefix + 'color ')) {
    var roles = message.member.roles
    if (roles.color.id === "563155114886561792") {return message.reply('You need a custom role first! (' + prefix + 'rol <text>)')}
    roles.color.setColor(argresult).catch(() => message.reply('Error.'))
    message.reply("Set!")}

  //Autoroles
  else if (msgCon.startsWith(prefix + 'autorole ') && autoroles.includes(argresult.toLowerCase())) {
    var roles = message.member.roles, rol = message.guild.roles.cache.find(role => role.name.toLowerCase().includes(argresult.toLowerCase()))
    if (rol.id === "584594259550797824" && roles.color.id === "563155114886561792") {return message.reply('You need a custom role first! (' + prefix + 'rol <text>)')}
    if (!roles.cache.find(role => role.id === rol.id)) {roles.add(rol.id)}
    else {roles.remove(rol.id)}
    message.reply("Done!")}

  //Chaos
  else if (message.content.toLowerCase() === (prefix + 'chaos')) {
    message.delete()
    const chaos = new Discord.MessageCollector(message.channel, m => m.author.id !== bID, {time: 3600000})
    var c_guild = message.guild.id
    var origin = message.channel
    origin.send('Hehe~ 📦')

    chaos.on('collect', message => {

      if (message.content.toLowerCase() === (prefix + 'get back to your box') && client.guilds.cache.get('412116759668064256').member(message.author).roles.find(role => role.id === ('458840596988035072'))) {
        return chaos.stop()}

      if (message.content.toLowerCase().startsWith(prefix + 'say ')) return;

      var b_msg = trashtalk[Math.floor(Math.random() * trashtalk.length)]
      var b_rct = emotes[Math.floor(Math.random() * emotes.length)]
      var one = ["0", "1"], two = ["2", "3"], three = ["4", "5"], four = ["6", "7"], five = ["8", "9"]

      if (one.some(word => message.id.endsWith(word))) {
        message.author.send(b_msg).catch(() => origin.send(b_msg)).then(function (message) {
        var sent_in = message.channel;
        const collector = new Discord.MessageCollector(sent_in, m => m.author.id !== bID, {time: 20000})
        collector.on('collect', message => {collector.stop()})
        collector.on('end', message => {if (!collector.received) {
        var b_ign = igno[Math.floor(Math.random() * igno.length)]
        sent_in.send(b_ign)}})})}

      else if (two.some(word => message.id.endsWith(word))) {
        origin.send(b_msg).then(function (message) {
        var sent_in = message.channel;
        const collector = new Discord.MessageCollector(sent_in, m => m.author.id !== bID, {time: 20000})
        collector.on('collect', message => {collector.stop()})
        collector.on('end', message => {if (!collector.received) {
        var b_ign = igno[Math.floor(Math.random() * igno.length)]
        sent_in.send(b_ign)}})})}

      else if (three.some(word => message.id.endsWith(word))) {
        client.guilds.cache.get(c_guild).member(message.author.id).setNickname(b_msg).catch(() => origin.send(b_msg).then(function (message) {
        var sent_in = message.channel; 
        const collector = new Discord.MessageCollector(sent_in, m => m.author.id !== bID, {time: 20000})
        collector.on('collect', message => {collector.stop()})
        collector.on('end', message => {if (!collector.received) {
        var b_ign = igno[Math.floor(Math.random() * igno.length)]
        sent_in.send(b_ign)}})}))}

      else if (four.some(word => message.id.endsWith(word))) {
        client.guilds.cache.get(c_guild).member(bID).setNickname(b_msg)}

      else if (five.some(word => message.id.endsWith(word))) {
        message.react(b_rct)}})

  chaos.on('end', message => {origin.send('Nap...')})}

  //Eval
  if (msgCon.startsWith(prefix + 'eval ') && message.author.id === rID) {
    eval(argresult)
    message.reply("Done!")}

  } catch(error) {console.log('Trigger: ' + message.content + ' | ' + error)}})

//Token
client.login(process.env.TOKEN)
