import TopBar from "../TopBar";
import './Page.css';

const StatsPage = () => {
    return (
        <section>
            <TopBar />
            <h1 id="statsHeader">Game Statistics</h1>
            <div id="statBoxes">

                <div id="blueTeam" class="statCard">
                    <h2>Blue Team:</h2>
                    <ul>
                        <li>Player 1: 350 clicks</li>
                        <li>Player 2: 135 clicks</li>
                    </ul>
                </div>

                <div id="yourStats" class="statCard">
                    <h2>Your Stats:</h2>
                    <p>
                       509 total clicks <br/> 
                       Joined the <font color="red">RED</font> team 20 times <br/>
                       Joined the <font color="blue">BLUE</font> team 15 times
                    </p>
                </div>

                <div id="redTeam" class="statCard">
                    <h2>Red Team:</h2>
                        <ul>
                            <li>Player 3: 108 clicks</li>
                            <li>Player 4: 230 clicks</li>
                        </ul>
                </div>
                
            </div>
        </section>
    );
}

export default StatsPage;