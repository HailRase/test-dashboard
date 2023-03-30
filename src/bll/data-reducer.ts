import {oktellAPI} from "../dal/oktell/oktell";
//const XMLParser = require('react-xml-parser');

const SET_DATA = "SET_DATA";

type ActionMoviesType = ReturnType<typeof setData>


export const dataReducer = () => {
    return {

    }
}

export const setData = (data: string) => {
    return {
        type: SET_DATA,
        data
    } as const;
};

export const fetchData = async (param1: string)  => {
    try {
        const xmlData = await oktellAPI.getData(param1)
       // const data = new XMLParser().parseFromString(xmlData)
        console.log(xmlData)
        //dispatch(setData(data))

    } catch (e: any) {
    }
}
