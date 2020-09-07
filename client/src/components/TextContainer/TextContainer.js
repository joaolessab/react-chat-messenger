import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users, room }) => (
  <div className="textContainer">
    <div>
      <div className="logo"></div>
      <h1>Chat Room: { room }</h1>
    </div>
    {
      users
        ? (
          <div>
            <h2>People currently chatting:</h2>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;