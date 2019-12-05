import React, { useContext, useReducer } from "react"

interface IState {
    pwd: string;
    candidate_id: number | string
}

interface IAction {
    type: string;
    value: number | string;
}
const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case "update_pwd":
            var temp = { ...state };
            temp.pwd = action.value.toString();
            return temp;
        case "update_candidate_id":
            var temp = { ...state };
            temp.candidate_id = action.type
            return temp;
        default:
            return state
    }
}

let initData: IState = {
    pwd: "",
    candidate_id: 0,
}

export const store = () => {
    let [store, dispatch] = useReducer(reducer, initData)
    return
}