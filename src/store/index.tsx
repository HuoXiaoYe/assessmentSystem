import React, { createContext, useReducer } from "react"
import { OmitProps } from "antd/lib/transfer/renderListBody";

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

export const storeContext = createContext({ store: "123" });

export const Store = (props: any) => {
    let [store, dispatch] = useReducer(reducer, initData)
    return (
        <storeContext.Provider value={{ store: "123" }}>
            {props.children}
        </storeContext.Provider>
    )
}