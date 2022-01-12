import {
    INCREMENT_CP_PLAYER_1,
    DECREASE_CP_PLAYER_1,
    INCREMENT_CP_PLAYER_2,
    DECREASE_CP_PLAYER_2,
    INCREMENT_BATTLEROUND,
    DECREASE_BATTLEROUND
} from "./actionTypes";

export function incrementCpPlayer1Action() {
    return {
        type: INCREMENT_CP_PLAYER_1
    };
}

export function decreaseCpPlayer1Action() {
    return {
        type: DECREASE_CP_PLAYER_1
    };
}
export function incrementCpPlayer2Action() {
    return {
        type: INCREMENT_CP_PLAYER_2
    };
}

export function decreaseCpPlayer2Action() {
    return {
        type: DECREASE_CP_PLAYER_2
    };
}
export function incrementBattleRound() {
    return {
        type: INCREMENT_BATTLEROUND
    };
}

export function decreaseBattleRound() {
    return {
        type: DECREASE_BATTLEROUND
    };
}