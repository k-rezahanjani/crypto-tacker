import React from "react";

export default function Entry (props) {
    return(
        <div className="term">
            <dt>
                <span className="routing">
                    <img src={props.img} className="routing-img" role="img"/>
                </span>
            </dt>
            <dd className="routing-description">{props.description}</dd>
        </div>
    )
}