const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`jalil`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:wave:  Welcome to TBA :wave: 
:crown:  ${member} :crown:  
Rules:
1.    Respect everyone, no politics and religious discussion
2.    Behave as a professional player
3.    Make sure you connect on discord first and join the voice channel
4.    It is only allowable to start squad battle when Leader, Co-Leader or Elder is  available
5.    When you’re -3 you exit
6.    If you’re using hacks, it is preferably to kick yourself 
7.    Stay active for squad battle
8.    Act as a team player and loyal as well, cause you might exit from the match sometimes even if you’re not negative
9.    If you’re not willing to be a loyal player, then kick yourself again
u'are member  ${member.guild.memberCount}`) 
}).catch(console.error)
})
client.on('message', message => {
if(message.content.startsWith('hi')) {
    message.reply("Hello!");
}
if(message.content.startsWith('Hi')) {
    message.reply("Hello!");
}
if(message.content.startsWith('hello')) {
    message.reply("Hello!");
}
if(message.content.startsWith('Hello')) {
    message.reply("Hello!");
}
if(message.content.startsWith('gn')) {
    message.reply("Good Night Bro!");
}
if(message.content.startsWith('Gn')) {
    message.reply("Good Night Bro!");
}
if(message.content.startsWith('good night')) {
    message.reply("Good Night Bro!");
}
if(message.content.startsWith('Good night')) {
    message.reply("Good Night Bro!");
}
if(message.content.startsWith('puta')) {
    message.reply("ur the only puta here!");
}
if(message.content.startsWith('Puta')) {
    message.reply("ur the only puta here!");
}
if(message.content.startsWith('gay')) {
    message.reply("ur the only gay here!");
}
if(message.content.startsWith('Gay')) {
    message.reply("ur the only gay here!");
}
if(message.content.startsWith('sb')) {
    message.reply("@everyone +2");
}
if(message.content.startsWith('Sb')) {
    message.reply("@everyone +2");
}
if(message.content.startsWith('.')) {
    message.reply("...");
}
if(message.content.startsWith('good morning')) {
    message.reply("Good Morning Bro!");
}
if(message.content.startsWith('Good morning')) {
    message.reply("Good Morning Bro!");
}
if(message.content.startsWith('cya')) {
    message.reply("Cya Bro!");
}
if(message.content.startsWith('Cya')) {
    message.reply("Cya Bro!");
}

});




client.login(process.env.BOT_TOKEN);
