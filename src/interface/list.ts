import { RouteComponentProps } from "react-router-dom"

interface IMatchBase {
    isExact: true;
    path: string;
    url: string
}
interface IPropsMatch extends IMatchBase {
    params: {
        pwd: string
    };
}

export interface IProps extends RouteComponentProps {
    match: IPropsMatch;
    history: any;
}

export interface IDepartment {
    candidateFrontFormList: any[];
    department_id: number;
    candidate_id: number;
    position_id:number;
    name: string;
    sort_num: number;
    type1: number;
    val1: string;
    val2: string
  }