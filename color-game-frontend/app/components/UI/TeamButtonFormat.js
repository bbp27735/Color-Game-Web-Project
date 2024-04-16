import React from 'react';

import './TeamButtonFormat.css';

const TeamButtonFormat = (props) => {

const teamUsed = props.team;

const classNameUse = "circle" + teamUsed;


  return (
    <button
      className={classNameUse}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default TeamButtonFormat;