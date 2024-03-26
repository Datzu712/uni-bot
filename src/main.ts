import { NodecordClient } from '@nodecord/core';
import { Client } from './client.module';
import { config } from 'dotenv';
import { type ClientOptions, GatewayIntentBits, Partials } from 'discord.js';

config();
(async function () {
    const { Guilds, MessageContent, GuildMessages, GuildMembers } = GatewayIntentBits;

    const bot = new NodecordClient<ClientOptions>(Client, {
        abortOnError: true,
        intents: [Guilds, MessageContent, GuildMessages, GuildMembers],
        partials: [Partials.Channel, Partials.GuildMember, Partials.Message, Partials.User],
        prefix: ['!'],
    });

    // console.log(bot.commands);
    await bot.loadSlashCommands({
        token: process.env.BOT_TOKEN,
        clientId: process.env.BOT_ID,
    });
    await bot.login(process.env.BOT_TOKEN);
    // const pingCommand = bot.commands.get('ping') as any;
    // console.log(Scanner.isCommand(pingCommand.constructor));
    // console.log(Reflect.getMetadata(COMMAND_WATERMARK, pingCommand.constructor));
})();
