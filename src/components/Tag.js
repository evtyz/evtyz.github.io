import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import './Tag.css'

const Tag = (props) => {
    let name = props.tag;

    return (
        <div className="tag">
            {name}
        </div>
    )
}

export default Tag;