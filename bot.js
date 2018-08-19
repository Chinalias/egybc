const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\`** :white_check_mark: جآري آرسال البرودكآست ل  **`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`BC- Script By : Baktash`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Baktash ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` EGY STORE.`,"http://twitch.tv/Baktash_183")
client.user.setStatus("dnd")
});
client.login(process.env.BOT_TOKEN);
