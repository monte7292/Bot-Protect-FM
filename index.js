const { Client, Collection, EmbedBuilder, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const { loadEvents } = require('./Handlers/eventHandler');
client.config = require('./config.json');
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);

client.on('ready', (c) => {
    client.user.setActivity({
        name: 'Protect FiveM',
        type: ActivityType.Streaming,
        url: 'https://servers.fivem.net/'
    });
});

let prefix = '!';

client.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'vl') {
        // Verifica si el autor del mensaje tiene el rol con la ID específica
        if (!message.member.roles.cache.has('1241433042275405975')) return message.reply("No tienes permiso para usar este comando.");
        
        const usuario = message.mentions.members.first() || message.member;
        const embed = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle('GUIA PARA VALORACIÓN 🇪🇦:')
            .setDescription(`- Escriba una valoración usando el comando /reseña. Si no sabes como funciona, en la miniatura tienes un guía:`)
            .setImage('https://media.discordapp.net/attachments/1041721096828895242/1247211216330297424/giphy_1.gif?ex=665fdc36&is=665e8ab6&hm=94df56ca60ebd63b8b6cee23159cb03628d17f23920f60c87948b6d9431c8644&=')
            .setThumbnail('https://media.discordapp.net/attachments/1041721096828895242/1247190137734172743/image.png?ex=665fc894&is=665e7714&hm=772cf63c54a269f5672595c066c571762059f7bb63597e4938b954b1febaed4e&=&format=webp&quality=lossless')
            .setTimestamp()
            .setFooter({ text: 'Protect FiveM - by @monte7292' });

        message.channel.send({ embeds: [embed] });
    }
    if (command === 'sb') {
        // Verifica si el autor del mensaje tiene el rol con la ID específica
        if (!message.member.roles.cache.has('1241433042275405975')) return message.reply("No tienes permiso para usar este comando.");
        
        const usuario = message.mentions.members.first() || message.member;
        const embed = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle('SOBRE NOSOTROS 🇪🇦')
            .setDescription(`- En el roleplay de FiveM, ayudamos a servidores a detectar y corregir fallas de seguridad en sus scripts, evitando vulnerabilidades que hackers podrían explotar para alterar la economía del juego. Nuestro objetivo es crear un entorno de juego seguro y justo para todos los jugadores.\n\n- Además, podemos ofrecer servicios específicos para otorgar dinero dentro del juego en algunos servidores. Sin embargo, estos servidores son limitados ya que cuentan con un buen sistema anti-cheat. Si deseas más información, por favor abre un <#1243258435500376084>`)
            .setImage('https://media.discordapp.net/attachments/1242842490797690893/1245029317570986005/giphy_4.gif?ex=665fd528&is=665e83a8&hm=c105bdee721c14b1943edd9f3b4d7a09638843ebc055276379fcd096fd9f1f39&=')
            .setTimestamp()
            .setFooter({ text: 'Protect FiveM - by @monte7292' });

        message.channel.send({ embeds: [embed] });
    }
    if (command === 'rl') {
        // Verifica si el autor del mensaje tiene el rol con la ID específica
        if (!message.member.roles.cache.has('1241433042275405975')) return message.reply("No tienes permiso para usar este comando.");
        
        const usuario = message.mentions.members.first() || message.member;
        const embed = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle('NUESTRAS REGLAS 🇪🇦')
            .setDescription(`- **No nos hacemos responsables de las acciones posteriores a la detección de vulnerabilidades:**\nEs importante dejar claro que cualquier vulnerabilidad encontrada debe ser reportada al administrador del servidor correspondiente para su solución, pero no podemos garantizar que se aborden de inmediato o de la manera esperada.
            - **Uso ético y legal:**\nLos miembros deben comprometerse a utilizar la información obtenida de manera ética y legal. No se tolerará el uso de vulnerabilidades para actividades maliciosas o ilegales.
            - **Confidencialidad:**\nCualquier información sensible o datos personales descubiertos durante las pruebas deben tratarse con confidencialidad. No se permite compartir esta información con terceros sin el consentimiento explícito del propietario del servidor.
            - **Respeto hacia otros servidores:**\nEs fundamental respetar la propiedad intelectual y las reglas de otros servidores de GTA Roleplay. No se debe intentar comprometer la seguridad de servidores ajenos sin autorización previa.
            - **No spam ni flood:**\nPara mantener un ambiente ordenado y respetuoso, se prohíbe el spam y el flood en todos los canales del servidor.
            - ** Colaboración y ayuda mutua:**\nFomentamos la colaboración entre los miembros para identificar y solucionar vulnerabilidades de manera constructiva. Todos pueden contribuir con su conocimiento y experiencia para mejorar la seguridad en los servidores de GTA Roleplay.
            - ** Reporte responsable:**\nSi un miembro descubre una vulnerabilidad, debe informar de manera inmediata y privada al administrador del servidor correspondiente. No se permite divulgar públicamente la existencia de la vulnerabilidad antes de que se haya solucionado.
            - **Cumplimiento de las normativas de Discord:**\nLos miembros deben respetar las normativas y políticas de Discord en todo momento. Cualquier comportamiento que viole estas normas será sancionado de acuerdo con las políticas de la plataforma.
            - **Actualizaciones y cambios en las reglas:**\nLas reglas del servidor pueden ser actualizadas o modificadas en cualquier momento.Se espera que todos los miembros estén al tanto de los cambios y los respeten.
            - **Pago voluntario:**\nEl uso de nuestro servicio y la participación en las pruebas de seguridad de servidores de GTA Roleplay son totalmente voluntarios. No se requiere ningún pago para formar parte de la comunidad. Cualquier contribución financiera realizada hacia el servidor se considera como un apoyo voluntario y no otorga privilegios adicionales ni ventajas especiales.`)
            .setImage('https://media.discordapp.net/attachments/1041721096828895242/1247529628223144046/giphy_2.gif?ex=66605c01&is=665f0a81&hm=36876ac9fefa0b31e6f2e5668de23fad0d31f26d72aaa590325881cd3344e34c&=')
            .setTimestamp()
            .setFooter({ text: 'Protect FiveM - by @monte7292' });

        message.channel.send({ embeds: [embed] });
    }
    if (command === 'vr') {
        // Verifica si el autor del mensaje tiene el rol con la ID específica
        if (!message.member.roles.cache.has('1241433042275405975')) return message.reply("No tienes permiso para usar este comando.");
        
        const usuario = message.mentions.members.first() || message.member;
        const embed = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle('VERIFICACIÓN 🇪🇦:')
            .setDescription(`- Reacciona al mensaje con el emoji azul para verificarte            `)
            .setImage('https://media.discordapp.net/attachments/1242842490797690893/1247535996216545350/giphy_3.gif?ex=666061ef&is=665f106f&hm=c736c65438e54f669013668c84458e76aa59a8a1f0b75be59e856e95cabb1462&=')
            .setTimestamp()
            .setFooter({ text: 'Protect FiveM - by @monte7292' });

        message.channel.send({ embeds: [embed] });
    }
    
});

client.login(client.config.token);
