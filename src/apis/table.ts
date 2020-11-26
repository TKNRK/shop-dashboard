import { assertExpressionStatement } from "@babel/types";
import axios, { AxiosResponse } from "axios"
import { SampleTable } from '@/types';

export default{ 
    getSample(): Promise<AxiosResponse<SampleTable[]>> {
        return axios.get<SampleTable[]>("http://localhost:8080")
    },
    postSample(param: SampleTable): Promise<AxiosResponse<string>> {
        return axios.post<SampleTable, AxiosResponse<string>>("http://localhost:8080", param)
    }
}