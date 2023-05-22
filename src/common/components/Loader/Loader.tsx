import React from 'react';
import {ReactComponent as LoaderSVG} from '../../../assets/loader.svg'

type LoaderPropsType = {
    width: number
    height: number
}
const Loader:React.FC<LoaderPropsType> = ({width,height}) => {
    return (
        <div>
            <LoaderSVG width={width} height={height}/>
        </div>
    );
};

export default Loader;