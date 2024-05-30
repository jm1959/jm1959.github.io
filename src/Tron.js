//Joseph McGillen: Portfolio
import './styles/ProjectPages.css';
export default function Tron() {
    return (
        <div id="appHeader">
            <h1>Tron</h1>
            <div id="projectDescription">
                <div style={{ width: '60%' }}>
                    <h3>About:</h3>
                    <p>
                        Tron is a game that I made using Python and Turtle Graphics. It is a two player game
                        where each player uses the arrow keys to control their respective light cycle. The
                        goal of the game is to avoid the walls and the other player's light cycle. The game
                        is over when one of the players crashes into a wall or the other player's light cycle.
                        The game is also over when the players collide with each other. The game is won when one
                        of the players is the last one standing.
                    </p>
                    <p>To view source code: <a href='https://github.com/jm1959/Projects/blob/main/Tron_Final_Project.py'>Tron</a></p>
                </div>
                <div id="projectImage">
                    <img src={require('./assets/images/tron.png')} alt="Project" style={{ width: '100%', borderRadius: 10 }} />
                </div>
            </div>
        </div>
    );
}