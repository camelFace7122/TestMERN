import React from 'react'
import commonCls from './common.module.css'
import preloader from '../../assets/images/preloader.gif'

type PropsType = {
    size?: number
}

const Preloader: React.FC<PropsType> = ({size = 50}) => {
    return (
        <div className={commonCls.preloaderWrapper}>
        <div className={commonCls.preloader} style={{width: `${size}px`, height: `${size}px`}}>
            <img src={preloader} alt="Loading"/>
        </div>
        </div>
    )
}

export default Preloader;