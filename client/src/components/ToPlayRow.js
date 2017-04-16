import  React from 'react';

export const ToPlayRow = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.type}</td>
            <td>{props.dateStarted}</td>
        </tr>
    );
}