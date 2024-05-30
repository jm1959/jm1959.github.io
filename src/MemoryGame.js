//Joseph McGillen: Portfolio
import './styles/ProjectPages.css';
export default function MemoryGame() {
    return (
        <div id="appHeader">
            <h1>Memory Game</h1>
            <div id="projectDescription">
                <div id="projectText">
                    <h3>About:</h3>
                    <p>
                        Created as a final project for computer programming 2, Memory Game was created using Java and JFrame.
                        It is a game where the user has to match the cards with the same image.
                        The game is won when all the cards are matched.
                    </p>
                    <p>To view source code: <a href='https://github.com/jm1959/Projects/blob/main/MemoryGame.java'>Memory Game</a></p>
                </div>
                <div id="projectImage">
                    <img src={require('./assets/images/memoryGame.png')} alt="Project" style={{ width: '100%', borderRadius: 10 }} />
                </div>
            </div>
        </div>
    );
}