import React, { useState } from 'react';
import './Score.css';

const Score = () => {
    // State to keep track of wins for red and blue teams
    const [redWins, setRedWins] = useState(0);
    const [blueWins, setBlueWins] = useState(0);

    return (
        <div className="Score-card">
            {/* Display the number of wins for red and blue teams */}
            <p>Red wins: {redWins}</p>
            <p>Blue wins: {blueWins}</p>
        </div>
    );
}

export default Score;