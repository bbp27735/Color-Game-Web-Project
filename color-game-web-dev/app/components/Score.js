import React, { useState } from 'react';
import './Score.css';

const Score = (props) => {
    // State to keep track of wins for red and blue teams
    // const [redWins, setRedWins] = useState(props.redWin);
    const [blueWins, setBlueWins] = useState(props.blueWin);
    const redWins = props.redWin;

    return (
        <div className="Score-card">
            {/* Display the number of wins for red and blue teams */}
            <p>Red wins: {redWins}</p>
            <p>Blue wins: {blueWins}</p>
        </div>
    );
}

export default Score;