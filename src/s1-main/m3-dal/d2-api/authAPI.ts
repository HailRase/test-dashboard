import {instance} from "../d1-instance/instance";

export const authAPI = {
    me(login: string, password: string){
        instance.get(`auth/?startparam1=${login}&startparam2=${password}`)
    }
}