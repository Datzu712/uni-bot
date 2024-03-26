import { BankCategory } from '@categories/bank/bank.category';
import { ClientModule } from '@nodecord/core';

@ClientModule({
    categories: [BankCategory],
})
export class Client {}
