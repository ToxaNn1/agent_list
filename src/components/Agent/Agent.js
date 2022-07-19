import React from "react";

const Agent = ({ id, name, surname, email, phone, status, date,calls }) => {
    return (
        <tr className="block-agents">
            <td className="agent-paragraph">{id}</td>
            <td className="agent-paragraph">{name}</td>
            <td className="agent-paragraph">{surname}</td>
            <td className="agent-paragraph">{email}</td>
            <td className="agent-paragraph">{phone}</td>
            <td className="agent-paragraph">{`${status}`}</td>
            <td className="agent-paragraph">{date}</td>
            <td className="agent-paragraph">{calls}</td>
         </tr>
    );
};

export default Agent;
