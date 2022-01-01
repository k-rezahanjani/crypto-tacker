import React from "react";
import MembersEntry from "./MembersEntry";

export default function CreateMembers(member) {
    return (
        <MembersEntry
        key={member.id}
        img={member.imageUrl}
        name={member.name}
        position={member.jobPosition}
        />
    )
}