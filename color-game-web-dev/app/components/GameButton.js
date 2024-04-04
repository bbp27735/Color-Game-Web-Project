'use client'
import TopBar from "./TopBar";
import './GameButton.css'


const GameButton = (props) => {

    const teamType = props.team;

    const printType = "Welcome to " + teamType;

    return (
        <div>

            <h3>{printType}</h3>



        </div>
    );
}

export default GameButton;