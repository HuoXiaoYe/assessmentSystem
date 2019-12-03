import { RouteComponentProps } from "react-router-dom"
interface IMatchBase {
    isExact: true;
    path: string;
    url: string
}
interface IPropsMatch extends IMatchBase {
    params: {
        pwd: string;
        candidate_id: number;
        department_id?: number;
        desc:string;
    };
}

export interface IDetail extends RouteComponentProps {
    match: IPropsMatch;
    history: any;
}

export interface IResult {
    "val4-1": number;
    "val4-2": number;
    "val4-3": number;
    "val4-4": number;
    "val4-5": number;
    "val4-6": number;
    "val1-101": string;
    "val1-102": string;
    [key: string]: any;
}


export const indicatorsArr: string[] = ["德", "能", "勤", "绩", "廉", "总体评价"]