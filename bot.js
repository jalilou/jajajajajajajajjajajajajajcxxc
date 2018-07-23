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



client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "meme")) {

  let{body} = await superagent
  .get(`https://api-to.get-a.life/meme`);

  let me = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle(".-,")
  .setImage(body.url);

  message.channel.send(me);
    }
    });


const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
         if(message.content.startsWith(prefix + "e")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });


client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              
 let responses = [
        'what!',
        '-_-',
        'huh',
        '? ',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});




client.login(process.env.BOT_TOKEN);
