import { Dispatch } from "redux";
import { ActionType } from "../actions";

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
};

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
};

export const bankrupt = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
};