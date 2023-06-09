import React from 'react';
import svg from '../../../assets/loadergif.gif'

type LoaderPropsType = {
    width: number
    height: number
}
const Loader:React.FC<LoaderPropsType> = ({width,height}) => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>

            <img src={svg} alt="" width={width} height={height}/>
            <span>&#128349;Загрузка данных...</span>
            {/*<LoaderSVG width={width} height={height}/>*/}
        </div>
    );
};

export default Loader;