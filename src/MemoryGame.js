//Joseph McGillen: Portfolio
import './styles/ProjectPages.css';
export default function MemoryGame() {
    return (
        <div id="appHeader">
            <h1>Memory Game</h1>
            <div id="projectDescription">
                <div style={{ paddingRight: '10%' }}>
                    <h3>About:</h3>
                    <p>
                        Created as a final project for computer programming 2, Memory Game was created using Java and JFrame.
                        It is a game where the user has to match the cards with the same image.
                        The game is won when all the cards are matched.
                    </p>
                </div>
                <img src={require('./assets/images/memoryGame.png')} alt="Project" style={{ width: '50vh', height: '50vhc' }} />
            </div>
        </div>
    );
}