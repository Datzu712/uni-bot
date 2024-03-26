import { Category } from '@nodecord/core';
import { TestSlashCommand } from './commands/test.command';

@Category({
    commands: [TestSlashCommand],
    metadata: {
        name: 'Bank',
    },
})
export class BankCategory {}
