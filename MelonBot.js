console.log('beep boop')
require("dotenv").config();
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN)
client.on('ready', readyDiscord)
function readyDiscord(){
    console.log("Ready!")
}
client.on('message', gotMessage)

async function gotMessage(msg){
    let prefix = msg.content.split(' ');
    
    if (msg.author.username == "Morgan Freeman" && msg.content == "Hi MelonBot"){
        setTimeout(function () {msg.channel.send('Hi Melon King')}, 700)
    }else if(msg.author.username == "jet101pack" && msg.content == "Hi MelonBot"){
        setTimeout(function () {msg.react('788848454931578946')}, 700)
    }else if (msg.content == "Hi MelonBot"){
        setTimeout(function() {msg.channel.send("Hi "+msg.author.username+"!")}, 700);
    }
    if (msg.content == 'pull up MelonBot'){
        setTimeout(function() {msg.channel.send("Try Me https://tenor.com/view/knife-cat-threaten-gif-5482584")}, 500);
    }
    if (msg.content === 'melonMan'){
        msg.delete();
        msg.channel.send("<:morganMelonman:788848454931578946>");
    }

    
    
    

    //console.log('User:'+msg.author.username)
    //console.log('Msg:'+msg.content)
    
}









