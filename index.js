// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "hello") {
    await interaction.reply("Hellooo!");
  } else if (commandName === "server") {
    await interaction.reply("This server is the best!");
  } else if (commandName === "user") {
    await interaction.reply("I tell the time...");
  }
});
// Login to Discord with your client's token
client.login(token);
