import {checkCredentials} from "../utils/checkCredentials";
import {auth} from "../../data/auth";

const useIsAuth = () => {
    const loginLocalStorage = localStorage.getItem("report-login")
    const passwordLocalStorage = localStorage.getItem("report-password")
    const loginSessionStorage = sessionStorage.getItem("report-login")
    const passwordSessionStorage = sessionStorage.getItem("report-password")

    if (loginLocalStorage && passwordLocalStorage) {
        return checkCredentials(loginLocalStorage, passwordLocalStorage, auth)
    } else if (loginSessionStorage && passwordSessionStorage) {
        return checkCredentials(loginSessionStorage, passwordSessionStorage, auth)
    } return false
};

export default useIsAuth