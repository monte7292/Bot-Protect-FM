const { SlashCommandBuilder } = require('@discordjs/builders');

// ID del canal no permitido
const canalNoPermitidoId = '1241757495630757980';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Borra un número especificado de mensajes.')
        .addIntegerOption(option =>
            option.setName('cantidad')
                .setDescription('El número de mensajes a borrar (entre 1 y 100).')
                .setRequired(true)),
    async execute(interaction) {
        // Verifica si la interacción proviene del canal no permitido
        if (interaction.channelId === canalNoPermitidoId) {
            return await interaction.reply('Este comando no puede ser utilizado en este canal.');
        }

        const cantidad = interaction.options.getInteger('cantidad');

        if (cantidad < 1 || cantidad > 100) {
            return await interaction.reply('Por favor, proporciona un número entre 1 y 100 para borrar mensajes.');
        }

        // Aquí puedes agregar la lógica para borrar los mensajes
        // Por ejemplo:
        await interaction.channel.bulkDelete(cantidad);
        await interaction.reply(`Se borraron ${cantidad} mensajes.`);
    },
};
