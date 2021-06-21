import {Reducer} from "react";

export interface FruitsAction {
    type: string;
    fruits: string[]
}

// export const fruitsReducer: Reducer<string[], FruitsAction> = (state : string[] = [], action) => {
//     switch (action.type) {
//         case "ADD_FRUIT":
//             return [ ...state, ...action.fruits ];
//         default:
//             return state;
//     }
// }

export function fruitsReducer(state: string[] = [], action: FruitsAction): string[] {
    switch (action.type) {
        case "ADD_FRUITS":
            return [ ...state, ...action.fruits ];
        default:
            return state;
    }
}

