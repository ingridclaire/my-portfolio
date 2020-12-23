import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Info = ({ icon, tooltip, color, src, width, padding }) => {
    
    return (
        <>
        { icon ? (
        <OverlayTrigger
            key='top'
            placement='top'
            overlay={
                <Tooltip id={`tooltip-top`}>
                    {tooltip}
                </Tooltip>
            }
        >
            <i className={`mr-5 fab fa-${icon}`} style={{fontSize: '40px', color: `${color}`}}></i>
        </OverlayTrigger>

        ):(
            <OverlayTrigger
            key='top'
            placement='top'
            overlay={
                <Tooltip id={`tooltip-top`}>
                    {tooltip}
                </Tooltip>
            }
        >
            <img src={`${src}`} style={{width: `${width}`}} alt={`${tooltip} icon`} className={`mr-5 ${padding}`}/>
        </OverlayTrigger> 
        )
        }
        </>
    )
}

export default Info
