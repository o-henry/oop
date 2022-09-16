/** buckpal.application.service */

class SendMoneyService implements SendMonyUseCase {
    constructor(
        private loadAccountPort: LoadAccountPort,
        private accountLock: AccountLock,
        private updateAccountStatePort: UpdateAccountStatePort
    ) {}

    public sendMoney(command: SendMoneyCommand): boolean {
        // TODO: validation business rule
        // TODO: handle model state
        // TODO: return
        return true;
    }
}

interface SendMonyUseCase {}
interface LoadAccountPort {}
interface AccountLock {}
interface UpdateAccountStatePort {}

/** buckpal.application.port.in */
class SendMoneyCommand {
    constructor(
        private sourceAccountId: AccountId,
        private targetAccountId: AccountId,
        private money: Money
    ) {
        this.sourceAccountId = sourceAccountId;
        this.targetAccountId = targetAccountId;
        this.money = money;
    }

    /** @TODO : validate input */
}

class AccountId {}
class Money {}
