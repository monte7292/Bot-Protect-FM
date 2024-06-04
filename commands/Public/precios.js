const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("precios")
        .setDescription("Sirve para ver los servidores actuales que tenemos para dar dinero ingame y sus precios"),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */

    async execute(interaction) {
        // Verificar si la ID del canal coincide con la ID deseada
        if (interaction.channelId !== '1242842490797690893') {
            return await interaction.reply({ content: 'Este comando solo se puede usar en los <#1243258435500376084>', ephemeral: true });
        }

        const embed = new EmbedBuilder()
            .setColor(0xffffff) // Color del borde del embed
            .setTitle('LISTA DE SERVIDORES')
            .setDescription('Aquí tienes la lista de servidores disponibles y sus precios para dar dinero ingame.')
            .addFields(
                { name: 'LaPalmaRP 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'PrisionerosRP 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'FixLifeRP 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'Phoenix 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'HunterStreetRP 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'LaPlayaRP 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'LaCatedralRP 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'RaspaculosRP 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'NeonCommunityRP 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'ValenciaRP 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'RedHatComunity 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'PollacaRP 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'RedAgeRP 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'PecadoCityRP 🇪🇦', value: 'Estado: Activo <:Tick:1242853709092880425>', inline: true },
                { name: 'PecadoCityRP 🇪🇦', value: 'Estado: Pendiente <:cruzroja:1242853694702227517>', inline: true },
            )
            .setTimestamp()
            .setImage('https://media.discordapp.net/attachments/1242842490797690893/1245801936687464508/giphy_1.gif?ex=665e0777&is=665cb5f7&hm=906947a7bf39b57537ce1486a5a2968df398a53a7f05b1645d7a2fa957826c5c&=')
            .setFooter({ text: 'Información actualizada', iconURL: 'https://media.discordapp.net/attachments/1242842490797690893/1245783630341734481/adsdsassda.png?ex=665df66b&is=665ca4eb&hm=717fb85c2df062aa995d9ba5da8f75298cdab1b505f0b9a66b3ac5b6d4ce11e8&=&format=webp&quality=lossless&width=619&height=619' });
        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};
