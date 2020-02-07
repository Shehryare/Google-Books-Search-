import React from 'react';
import "./List.css"

export function List(props){
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    )
};