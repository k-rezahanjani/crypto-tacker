import React from "react";

export default function MembersEntry(props) {
    return (
        <div className="members-term">
            <dt>
                <span className="team-members-image">
                    <img src={props.img} className="members-img" />
                </span>
            </dt>
            <dd className="members-name">{props.name}</dd>
            <dd className="members-position">{props.position}</dd>
        </div>
    )
}