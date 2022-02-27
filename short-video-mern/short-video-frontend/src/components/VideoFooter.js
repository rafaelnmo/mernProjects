import React, {useRef, useState} from "react";
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'

const VideoFooter = ({channel, description, songName}) => {
    return(
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon"/>
                    <Ticker mode="smooth" className="ticker">
                        {({index}) => (
                            <>
                                <p>{songName}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter__record"  src="https://static.thenounproject.com/png/934821-200.png" alt="video footer"/>
        </div>
    )
}

export default VideoFooter