//Joseph McGillen: Portfolio
//Credit for fade effect in the useEffect: https://www.youtube.com/watch?v=huVJW23JHKQ
import { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import './styles/Projects.css';
import { Buttons } from './components/buttons';

export default function Projects() {
    const [project1flip, setProject1Flip] = useState(false);
    const [project2flip, setProject2Flip] = useState(false);
    const [project3flip, setProject3Flip] = useState(false);
    const [project4flip, setProject4Flip] = useState(false);

    useEffect(() => {
        const fadeInElements = document.querySelectorAll('#projectCardRow');

        const options = {
            root: null,
            rootMargin: '0px 0px 100px 0px',  /* Adjust margins as needed */
            threshold: 0.5  /* Fade in when 50% of the element is visible */
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, options);

        fadeInElements.forEach(element => observer.observe(element));
    });
    return (
        <div id="Projects">
            <h1>Projects</h1>
            <p>Here are some of the projects I have worked on:</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div id="projectCardRow">
                    <div id="projectCardMargins">
                        <ReactCardFlip isFlipped={project1flip} flipDirection='horizontal'>
                            <button id='projectButton' onClick={() => setProject1Flip(!project1flip)}>
                                <div id='projectCard'>
                                    <img src={require('./assets/images/tron.png')} alt="Project" style={{ width: '100%', height: '82%' }} />
                                    <p>Tron</p>
                                </div>
                            </button>

                            <button id='projectButton' onClick={() => setProject1Flip(!project1flip)}>
                                <div id='projectCard'>
                                    <ul style={{ fontSize: 20, textAlign: 'left' }}>
                                        <li style={{ marginBottom: '4%' }}>Developed retro video videogame Tron</li>
                                        <li style={{ marginBottom: '4%' }}>Developed using Python and utilizing Turtle and functions and arrays</li>
                                    </ul>
                                    <Buttons path="Tron" />
                                </div>
                            </button>
                        </ReactCardFlip >
                    </div>
                    <div>
                        <ReactCardFlip isFlipped={project2flip} flipDirection='horizontal'>
                            <button id='projectButton' onClick={() => setProject2Flip(!project2flip)}>
                                <div id='projectCard'>
                                    <img src={require('./assets/images/memoryGame.png')} alt="Project" style={{ width: '100%', height: '82%' }} />
                                    <p>Memory Game</p>
                                </div>
                            </button>

                            <button id='projectButton' onClick={() => setProject2Flip(!project2flip)}>
                                <div id='projectCard'>
                                    <ul style={{ fontSize: 20, textAlign: 'left' }}>
                                        <li style={{ marginBottom: '4%' }}>Developed Java-based memory game</li>
                                        <li style={{ marginBottom: '4%' }}>Utilized JFrame and buttons functions</li>
                                        <li style={{ marginBottom: '4%' }}>Created checks to see if both buttons clicked were equal to one another</li>
                                    </ul>
                                    <Buttons path="MemoryGame" />
                                </div>
                            </button>
                        </ReactCardFlip >
                    </div>
                </div>
                <div id="projectCardRow">
                    <div id="projectCardMargins">
                        <ReactCardFlip isFlipped={project3flip} flipDirection='horizontal'>
                            <button id='projectButton' onClick={() => setProject3Flip(!project3flip)}>
                                <div id='projectCard'>
                                    <img src={require('./assets/images/logoV2.png')} alt="Project" style={{ width: '100%', height: '82%' }} />
                                    <p>Dorm Swap & Shop</p>
                                </div>
                            </button>

                            <button id='projectButton' onClick={() => setProject3Flip(!project3flip)}>
                                <div id='projectCard'>
                                    <ul style={{ fontSize: 20, textAlign: 'left' }}>
                                        <li style={{ marginBottom: '4%' }}>Mobile application for college students</li>
                                        <li style={{ marginBottom: '4%' }}>
                                            Students can create and post
                                            listings to sell textbooks, furniture and decorations
                                        </li>
                                        <li style={{ marginBottom: '4%' }}>Utilized React and React Native to develop the mobile application</li>
                                    </ul>
                                    <Buttons path="DormSwapandShop" />
                                </div>
                            </button>
                        </ReactCardFlip >
                    </div>
                    <div>
                        <ReactCardFlip isFlipped={project4flip} flipDirection='horizontal'>
                            <button id='projectButton' onClick={() => setProject4Flip(!project4flip)}>
                                <div id='projectCard'>
                                    <img src={require('./assets/images/otea.png')} alt="Project" style={{ width: '100%', height: '82%' }} />
                                    <p>Otea</p>
                                </div>
                            </button>

                            <button id='projectButton' onClick={() => setProject4Flip(!project4flip)}>
                                <div id='projectCard'>
                                    <ul style={{ fontSize: 20, textAlign: 'left' }}>
                                        <li style={{ marginBottom: '4%' }}>Collaborated with cross-function teams to develop a mobile app </li>
                                        <li style={{ marginBottom: '4%' }}>Utilized Flutter and Dart</li>
                                    </ul>
                                    <Buttons path="Otea" />
                                </div>
                            </button>
                        </ReactCardFlip >
                    </div>
                </div>
            </div>
        </div >
    );
}