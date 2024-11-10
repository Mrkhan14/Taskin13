import { DECREASE, INCREASE } from "../types/counter";

const increase = {
    type: INCREASE,
    payload: 9
}

const decrease = {
    type: DECREASE,
    payload: 7
}

export {increase, decrease}