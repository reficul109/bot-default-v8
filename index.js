//Packages
const Discord = require('discord.js')
const client = new Discord.Client({presence: {status: 'online', activity: {name: 'Hehe 🎵'}}, disableMentions: 'everyone'})
const http = require('http')
const express = require('express')
const app = express()
const getColors = require('get-image-colors')
const prefix = 'br!'
var autoroles = ['cq-80']

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
    client.channels.cache.get("426520047301951509").send('<@' + newUser.id + '>, Pick a new color! [Reply "1", "2", "3" o Ignora]\nhttps://encycolorpedia.com/' + colors[0].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[1].toString().substring(1) + '\nhttps://encycolorpedia.com/' + colors[2].toString().substring(1))
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
  if (!message.guild) return;
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
  if (msgCon.startsWith(prefix + 'rol ')) {
    var roles = message.member.roles
    if (roles.color.id === "563155114886561792") {
      message.guild.roles.create({data: {name: argresult}}).then(role => {
      role.setPermissions(0)
      role.setPosition(13)
      roles.add(role.id)})}
    else {roles.color.setName(argresult)}}

  //Color
  if (msgCon.startsWith(prefix + 'color ')) {
    var roles = message.member.roles
    if (roles.color.id === "563155114886561792") {return message.reply('You need a custom role first! (' + prefix + 'rol <text>)')}
    roles.color.setColor(argresult).catch(() => message.reply('Error.'))
    message.reply("Set!")}

  //Autoroles
  if (msgCon.startsWith(prefix + 'autorol ') && autoroles.includes(argresult.toLowerCase())) {
    var roles = message.member.roles, rol = message.guild.roles.cache.find(role => role.name.toLowerCase().includes(argresult.toLowerCase()))
    if (rol.id === "584594259550797824" && roles.color.id === "563155114886561792") {return message.reply('You need a custom role first! (' + prefix + 'rol <text>)')}
    if (!roles.cache.find(role => role.id === rol.id)) {roles.add(rol.id)}
    else {roles.remove(rol.id)}
    message.reply("Done!")}

  //Eval
  if (msgCon.startsWith(prefix + 'eval ') && message.author.id === "320398018060746752") {
    eval(argresult)}

  } catch(error) {console.log('Trigger: ' + message.content + ' | ' + error)}})

//Token
client.login(process.env.TOKEN)
