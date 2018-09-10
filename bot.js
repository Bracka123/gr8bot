var Discord = require("discord.js");
var bot = new Discord.Client();


bot.on('message', message => {

  
   
  var msg = message.content.toLowerCase();
    
  var sender = message.author;
    
  var prefix = "g"
   
      
    
  if (msg === prefix + 'hi') {
        
    message.channel.send('Hello')
    
  }
    
    



   
   
});

bot.on('ready', () => {

    
  console.log("Hello guys")
    
  bot.user.setActivity(`Nothing & With ${bot.guilds.size} Server`)
});

bot.login(process.env.BOT_TOKEN);
