import {AuthType} from "../../data/auth";

export const checkCredentials = (login: string, password: string, credentialsArray: AuthType[]) => {
    return credentialsArray.some((cred) => {
        return cred.log === login && cred.pass === password;
    });
};