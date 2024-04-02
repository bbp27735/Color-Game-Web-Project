'use client'
import TopBar from "../TopBar";
import TeamButton from "../TeamButton"



const changeTeamBlue = (team) => {
    //  onPick={changeTeamBlue}
    console.log("blue");
}

const changeTeamRed = (team) => {
    //  onPick={changeTeamRed}
    console.log("red");
}

const GamePage = () => {
    return (
        <div>
            <TopBar />
            <p>Hello World (GamePage)</p>
            <TeamButton />
            <TeamButton />
        </div>
    );
}

export default GamePage;