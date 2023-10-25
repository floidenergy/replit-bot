import {ApplicationCommand} from 'discord.js';
import commands from './cmds.mjs';

export default async function(client) {
    await client.application.commands.set(commands)
};