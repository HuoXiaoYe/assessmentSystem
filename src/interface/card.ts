import { RouteComponentProps } from "react-router-dom"

export interface ICardProps extends RouteComponentProps {
    data: any;
    pwd: string;
}