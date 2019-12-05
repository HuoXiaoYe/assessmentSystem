import React, { createContext, useReducer } from "react"
let initData: IState = {
    pwd: "",
    candidate_id: 21113,
}
interface IState {
    pwd: string;
    candidate_id: number | string
}

interface IAction {
    type: string;
    value: number | string;
}

interface IValue {
    store: IState;
    dispatch: Function;
}

const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case "update_pwd":
            var temp = { ...state };
            temp.pwd = action.value.toString();
            return temp;
        case "update_candidate_id":
            var temp = { ...state };
            temp.candidate_id = action.value
            return temp;
        default:
            return state
    }
}
export const storeContext = createContext<IValue>({ store: initData, dispatch() { } });

export const Store = (props: any) => {
    let [store, dispatch] = useReducer(reducer, initData)
    return (
        <storeContext.Provider value={{ store, dispatch }}>
            {props.children}
        </storeContext.Provider>
    )
}