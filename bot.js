var Discord = require("discord.js");
var bot = new Discord.Client();


bot.on('message', message => {

  
   
  var msg = message.content.toLowerCase();
    
  var sender = message.author;
    
  var prefix = "!";
   
      
    
  if (msg === prefix + 'hi') {
        
    message.channel.send('Hello')
    
  }
    
    



   
   
});

bot.on('ready', () => {

    
  console.log("Hello guys")
    
  
});

bot.login(process.env.BOT_TOKEN);
