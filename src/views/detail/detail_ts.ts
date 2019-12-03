import { axiosPost } from "../../api/baseApi"

import { saveUrl } from "../../config/baseUrl"

export const handleAssessment = async (params: any) => {
    console.log("params==", params)
    // var result = await axiosPost(saveUrl, JSON.stringify(params))
    var result = await axiosPost(saveUrl, `r=${JSON.stringify(params)}`)

    return result
}