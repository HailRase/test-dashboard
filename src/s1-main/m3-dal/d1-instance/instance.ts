import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://10.5.115.112:8080/',
    /*baseURL: 'http://192.168.1.60:50300/',*/
    /*baseURL: 'http://127.0.0.1:50300/', *///your local ip address
    /*baseURL: 'http://192.168.43.218:50300/',*/
    /*baseURL: 'http://127.0.0.1:8089/'*/
});
/*https://testzone.a1.axatel.by/api/token/v1/d0934bf48d84b7fef4ed05cb13fdd613*/


/*
testzone.a1.axatel.by
Admin
0tn63FythTZjfytwszyY*/
