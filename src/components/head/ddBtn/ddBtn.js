import React from 'react'
import "./ddBtn.css"

export default function DDBtn(props) {



    return (
        <div className="ddBtn-area">
            <a className="ddBtn" onClick={props.closeFunc} href={props.to}>
                {props.name}
            </a>
        </div>
    )
}
