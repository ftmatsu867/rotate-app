import React from 'react'
import CameraIcon from '@mui/icons-material/Camera';
import ComputerIcon from '@mui/icons-material/Computer';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Pc from './Pc';
import Border from './Border';
import "../styles/LeftArea.scss"

const LeftArea = ({ rotate }) => {
    const style = {
        transform: `rotate(${rotate}deg)`
    }
    return (
        <div className="leftArea">
            <Border />
            <Pc />
            <div className="circle" style={style}>
                <div className="item one">
                    <CameraIcon />
                    <div className="detail">
                        <span className='title'>Camera</span>
                        <span className='description'>fantastic camera</span>
                    </div>
                </div>
                <div className="item two">
                    <Battery0BarIcon />
                    <div className="detail">
                        <span className='title'>battery</span>
                        <span className='description'>fantastic battery</span>
                    </div>
                </div>
                <div className="item three">
                    <ComputerIcon />
                    <div className="detail">
                        <span className='title'>micropc</span>
                        <span className='description'>microsize PC</span>
                    </div>
                </div>
                <div className="item four">
                    <SportsEsportsIcon />
                    <div className="detail">
                        <span className='title'>Gamimg</span>
                        <span className='description'>super controller</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftArea

