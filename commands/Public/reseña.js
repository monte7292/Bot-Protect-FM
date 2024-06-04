const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reseña')
        .setDescription('Haz una reseña hacia nuestros servicios.')
        .addStringOption(option =>
            option.setName('servidor_ayudado')
                .setDescription('**Servidor Ayudado**')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('valoracion')
                .setDescription('**Valoración (del 1 al 10)**')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('algo_mas')
                .setDescription('**Algo más que añadir**')
                .setRequired(true)),
    async execute(interaction) {
        // Obtener los textos proporcionados por el usuario
        const servidorAyudado = interaction.options.getString('servidor_ayudado');
        let valoracion = interaction.options.getInteger('valoracion');
        const algoMas = interaction.options.getString('algo_mas');

        // Validar que la valoración esté en el rango correcto (1 - 10)
        if (valoracion < 1) {
            valoracion = 1;
        } else if (valoracion > 10) {
            valoracion = 10;
        }

        // Obtener el canal por su ID
        const channelId = '1245763503386787872'; // Reemplaza con la ID de tu canal
        const channel = await interaction.client.channels.fetch(channelId);

        // Crear el objeto de datos del embed con los detalles solicitados
        const embedData = {
            color: 0xFFFFFF, // Color blanco
            author: {
                name: interaction.user.username,
                icon_url: interaction.user.displayAvatarURL()
            },
            title: '',
            fields: [
                {
                    name: 'Servidor ayudado y valoración:',
                    value: `Servidor: ${servidorAyudado}\nValoración: ${valoracion}`
                },
                {
                    name: 'Algo más que añadir:',
                    value: algoMas
                }
            ],
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/1041721096828895242/1247186723637821521/adsdsassda.png?ex=665f1ca6&is=665dcb26&hm=8626aaabb24bbcd3cbad3d622fdc52f6983d13ec3e4e4154932c74ee50bd68cc&=&format=webp&quality=lossless&width=605&height=605'
            },
            timestamp: new Date()
        };

        // Enviar el mensaje al canal especificado
        await channel.send({ embeds: [embedData] });

        // Confirmar al usuario que se envió el mensaje
        await interaction.reply({ content: 'Mensaje enviado al canal <#1245763503386787872>', ephemeral: true });
    },
};
