import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import "./watch.scss"

const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video 
                className='video' 
                autoPlay
                progress 
                controls 
                src="https://player.vimeo.com/external/374133176.sd.mp4?s=11639bac69e48d5f7d3e338bebb65c1ff952bf9d&profile_id=164&oauth2_token_id=57447761" />
        </div>
    )
}

export default Watch