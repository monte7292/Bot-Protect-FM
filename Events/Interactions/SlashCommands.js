const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply({
        content: "Prueba con otro comando.",
        ephermal: true,
      });

    if (command.developer && interaction.user.id !== "TU ID")
      return interaction.reply({
        content: "No puedes utilizar esto.",
        ephermal: true,
      });

    command.execute(interaction, client);
  },
};