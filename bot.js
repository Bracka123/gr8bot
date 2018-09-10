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

bot.on('guildMemberAdd', member => {
    
    if (member.guild.id !== serverStats.guildID) return;

    
    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`)
    bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);


});

bot.on('guildMemberRemove', member => {
    if (member.guild.id !== serverStats.guildID) return;

    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`)
    bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);

});


bot.login("proces.env.BOT_TOKEN");
