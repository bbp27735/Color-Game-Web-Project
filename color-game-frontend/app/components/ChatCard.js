import React from 'react';

import './ChatCard.css';

const ChatCard = (props) => {
  const classes = 'card ' + props.className;
  return <div className='card input'>{props.children}</div>;
};

export default ChatCard;
