import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="logo"></div>
                <h1 className="heading">Chat Messenger</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                
                {/* Link that will call the route only of the parameters are valid */}
                <Link onClick={ event => (!name || !room) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>                
                <p className="credit">Developed by João Vitor Lessa</p>
            </div>
        </div>
    )
};

export default Join;