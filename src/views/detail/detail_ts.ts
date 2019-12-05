import { axiosPost, axiosGet } from "../../api/baseApi"

import { saveUrl, getSaveUrl } from "../../config/baseUrl"

export const handleAssessment = async (params: any) => {
    var result = await axiosPost(saveUrl, `r=${JSON.stringify(params)}`)
    return result
}

interface IParams {
    pwd: string;
    candidate_id: number;
}

export const getAssessmentRes = async (params: IParams) => {
    let url = getSaveUrl + `?pwd=${params.pwd}&candidate_id=${params.candidate_id}`
    var result = await axiosGet(url)
    return result
}