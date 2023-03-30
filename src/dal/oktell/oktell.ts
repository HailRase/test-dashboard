import {instance} from "../instance/instance";

export const oktellAPI = {
    getData(param1: string){
        return instance.get(`?startparam1=${param1}&startparam2=HelloWorld`)
    }
}

    /*?event=call_answered&timestamp=1679296679&direction=in&
login=Phone_147&server=callcenter.local&number=79202607115&callername=Deal%20Call&
callid=f80beb3c-a4a1-48f9-a7f0-17635c3e5de9&applogin=&header=&cardshow=deal*/