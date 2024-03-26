import { type ICommand, SlashCommand } from '@nodecord/core';
import { Colors, EmbedBuilder, SlashCommandBuilder } from 'discord.js';

@SlashCommand({
    name: 'test',
    options: new SlashCommandBuilder().setName('test').setDescription('Test command'),
    global: true,
})
export class TestSlashCommand implements ICommand {
    public execute() {
        return new EmbedBuilder()
            .setTitle('Bienvenido al banco')
            .setDescription('¿En qué puedo ayudarte?')
            .setColor(Colors.Blue);
    }
}
