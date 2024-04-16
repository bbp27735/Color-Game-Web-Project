'use client'
import React from 'react';

import './ScoreButton.css';

const ScoreButton = (props) => {

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

export default ScoreButton;