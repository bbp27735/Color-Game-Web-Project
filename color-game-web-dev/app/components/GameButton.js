'use client'
import TopBar from "./TopBar";


const GameButton = (props) => {

    const teamType = props.team;

    const printType = "Welcome to " + teamType;

    return (
        <div>

            <p>{printType}</p>



        </div>
    );
}

export default GameButton;