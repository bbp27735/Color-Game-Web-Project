'use client'
import TopBar from "./TopBar";
import './GameButton.css'


const GameButton = (props) => {

    const teamType = props.team;
    const redValue = props.redValue;
    const blueValue = props.blueValue;

    const printType = "Welcome to " + teamType;
    const currentRBVal = "Red Value: " + redValue + " Blue Value: " + blueValue;

    
    return (
        <div class="game-button">
            <h3 class>{printType}</h3>
            <h3 class>{currentRBVal}</h3>
        </div>
    );
}

export default GameButton;