import React, {useState} from 'react';
import {Alert} from "react-bootstrap";
type InfoWindowType = {
    message: string
}
const InfoWindow: React.FC<InfoWindowType> = ({message}) => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            /*<div className={s.errorWindowContainer}>
                <div className={s.errorWindowHeader}>
                    <ErrorIcon width={25} height={25}/>
                        <span className={s.errorWindowHeaderTitle}>Ошибка</span>
                </div>
                <div className={s.errorWindowBody}>
                    <span>{errorMessage}</span>
                </div>

            </div>*/
            <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Ошибка!</Alert.Heading>
                <p>
                    {message}
                </p>
            </Alert>
        );
    }
    return <></>

}

export default InfoWindow;