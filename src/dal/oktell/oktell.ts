import {instance} from "../instance/instance";

export const oktellAPI = {
    getData(param1: string){
        return instance.get(`execsvcscript?name=React_Oktell_Greeting&startparam1=${param1}&startparam2='Hello World'`)
    }
}