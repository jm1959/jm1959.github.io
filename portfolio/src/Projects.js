import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './styles/Projects.css';
import { Buttons } from './components/buttons';

export default function Projects() {
    const [project1flip, setProject1Flip] = useState(false);
    const [project2flip, setProject2Flip] = useState(false);
    const [project3flip, setProject3Flip] = useState(false);
    const [project4flip, setProject4Flip] = useState(false);
    return (
        <div id="Projects">
            <h1>Projects</h1>
            <p>Here are some of the projects I have worked on:</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 40 }}>
                    <div style={{ marginRight: 100 }}>
                        <ReactCardFlip isFlipped={project1flip} flipDirection='horizontal'>
                            <button id='projectButton' onClick={() => setProject1Flip(!project1flip)}>
                                <div id='projectCard'>
                                    <img src={require('./assets/images/tron.png')} alt="Project" style={{ width: '100%', height: '370px' }} />
                                    <p>Tron</p>
                                </div>
                            </button>

                            <button id='projectButton' onClick={() => setProject1Flip(!project1flip)}>
                                <div id='projectCard'>
                                    <ul>
                                        <li>Developed retro video videogame Tron</li>
                                        <li>Developed using Python and utilizing Turtle and functions and arrays</li>
                                    </ul>
                                    <Buttons />
                                </div>
                            </button>
                        </ReactCardFlip >
                    </div>
                    <div>
                        <ReactCardFlip isFlipped={project2flip} flipDirection='horizontal'>
                            <button id='projectButton' onClick={() => setProject2Flip(!project2flip)}>
                                <div id='projectCard'>
                                    <img src={require('./assets/images/memoryGame.png')} alt="Project" style={{ width: '100%', height: '370px' }} />
                                    <p>Memory Game</p>
                                </div>
                            </button>

                            <button id='projectButton' onClick={() => setProject2Flip(!project2flip)}>
                                <div id='projectCard'>
                                    <ul>
                                        <li>Developed Java-based memory game</li>
                                        <li>Utilized JFrame and buttons functions</li>
                                        <li>Created checks to see if both buttons clicked were equal to one another</li>
                                    </ul>
                                    <Buttons />
                                </div>
                            </button>
                        </ReactCardFlip >
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 40 }}>
                    <div style={{ marginRight: 100 }}>
                        <ReactCardFlip isFlipped={project3flip} flipDirection='horizontal'>
                            <button id='projectButton' onClick={() => setProject3Flip(!project3flip)}>
                                <div id='projectCard'>
                                    <img src={require('./assets/images/logoV2.png')} alt="Project" style={{ width: '100%', height: '370px' }} />
                                    <p>Dorm Swap & Shop</p>
                                </div>
                            </button>

                            <button id='projectButton' onClick={() => setProject3Flip(!project3flip)}>
                                <div id='projectCard'>
                                    <ul>
                                        <li>Mobile application for college students</li>
                                        <li>
                                            Students can create and post
                                            listings to sell textbooks, furniture and decorations
                                        </li>
                                        <li>Utilized React and React Native to develop the mobile application</li>
                                    </ul>
                                    <Buttons />
                                </div>
                            </button>
                        </ReactCardFlip >
                    </div>
                    <div style={{}}>
                        <ReactCardFlip isFlipped={project4flip} flipDirection='horizontal'>
                            <button id='projectButton' onClick={() => setProject4Flip(!project4flip)}>
                                <div id='projectCard'>
                                    <h3>Project Image</h3>
                                    <p>Otea</p>
                                </div>
                            </button>

                            <button id='projectButton' onClick={() => setProject4Flip(!project4flip)}>
                                <div id='projectCard'>
                                    <ul>
                                        <li>Collaborated with cross-function teams to develop a mobile app </li>
                                        <li>Utilized Flutter and Dart</li>
                                    </ul>
                                    <Buttons />
                                </div>
                            </button>
                        </ReactCardFlip >
                    </div>
                </div>
            </div>

        </div >
    );
}