//Packages
const Discord = require('discord.js')
const client = new Discord.Client({presence: {status: 'online', activity: {name: 'GAME'}}, disableMentions: 'everyone'})
const http = require('http')
const express = require('express')
const app = express()
const getColors = require('get-image-colors')
const prefix = '---!'
var autoroles = []

//Page
var port = (process.env.PORT || 0)
app.get('/', (req, res) => res.sendStatus(200))
app.listen(port, () => console.log('Listening at port ' + port))
setInterval(() => {http.get("http://BOTNAME-v8.herokuapp.com/")}, 280000)

//Ready
client.once('ready', () => {console.log('---')})

//Avys
client.on('userUpdate', (oldUser, newUser) => {
  var userRoles = client.guilds.cache.get("SERVER").member(newUser).roles
  if (oldUser.avatarURL() !== newUser.avatarURL() && userRoles.cache.find(role => role.id === "ROLE")) {
    getColors(newUser.displayAvatarURL({format: 'png', dynamic: true})).then(colors => {
    client.channels.cache.get("CHANNEL").send('<@' + newUser.id + '>, Elije un color nuevo! [Responde "1", "2", "3" o Ignora]\nhttps://encycolorpedia.com/' + colors[0].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[1].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[2].toString().substring(1))
    const collector = new Discord.MessageCollector(client.channels.cache.get("CHANNEL"), m => m.author.id === newUser.id, {time: 600000})
    collector.on('collect', cMessage => {
      var numb = parseInt(cMessage.content)
      if (numb) {userRoles.color.setColor(colors[--numb].toString())}
      collector.stop()
      cMessage.react("EMOTE")})})}})

//Messages
client.on('message', message => {

  try {

  //Non-Prefix Ignore
  if (!message.guild && !message.author.id === "320398018060746752") return;
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

  //Color
  if (msgCon.startsWith(prefix + 'color ')) {
    message.member.roles.color.setColor(argresult).catch(() => message.reply('Error.'))
    message.react("EMOTE")}

  //Autoroles
  if (msgCon.startsWith(prefix + 'rol ') && autoroles.includes(argresult.toLowerCase())) {
    var roles = message.member.roles, rol = message.guild.roles.cache.find(role => role.name.toLowerCase().includes(argresult.toLowerCase()))
    if (!roles.cache.find(role => role.id === rol.id)) {roles.add(rol.id)}
    else {roles.remove(rol.id)}
    message.react("EMOTE")}

  //Eval
  if (msgCon.startsWith(prefix + 'eval ') && message.author.id === "320398018060746752") {
    eval(argresult)}

  } catch(error) {console.log('Trigger: ' + message.content + ' | ' + error)}})

//Token
client.login(process.env.TOKEN)
