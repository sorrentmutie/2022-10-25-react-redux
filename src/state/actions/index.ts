
interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
}


export enum ActionType {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw",
    BANKRUPT = "bankrupt"
}

export type Action = DepositAction | WithdrawAction | BankruptAction;