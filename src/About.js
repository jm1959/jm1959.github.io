//Joseph McGillen: Portfolio
//Credit for fade effect in the useEffect: https://www.youtube.com/watch?v=huVJW23JHKQ
import { useEffect } from "react";
import "./styles/About.css";
export default function About() {
    useEffect(() => {
        const fadeInElements = document.querySelectorAll('#fadeIn');

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
        <div id="About">
            <div id="aboutPage">
                <div id="fadeIn">
                    <div id="aboutMe">
                        <div id="aboutText">
                            <h3>Get to know me, </h3>
                            <p>
                                I'm thrilled to have you stop by and learn a bit about me.
                                I am a recent graduate from Messiah University with a Bachelors of Science in Computer & Information Science
                            </p>
                            <p>
                                My passion for technology and software has been a driving force in my life for as long as I can remember.
                                My curiosity and drive to learn have led me to explore a variety of programming languages and technologies.
                                I've also had the opportunity to work on a variety of projects, from mobile app
                                development to web development, and I'm always eager to learn new skills and take on new challenges.
                            </p>
                            <p>
                                However, my college experience hasn't solely revolved around the digital realm. During my freshman and sophomore years,
                                I had the incredible opportunity to be a part of the college swim team. Being in the water has always been a
                                significant aspect of my life, and combining my love for swimming with my academic pursuits has been nothing short
                                of invigorating. The dedication, discipline, and teamwork I honed through competitive swimming have proven invaluable
                                in both my personal and academic life.
                            </p>

                        </div>
                        <div id='imageContainer'>
                            <img src={require('./assets/images/McGillen_Joseph.jpg')} alt="headShot" style={{ width: '100%', borderRadius: 10 }} />
                        </div>
                    </div>
                    <div id="aboutMe">
                        <ul style={{ fontSize: 20, width: '50%' }}>
                            <p style={{ marginBottom: 5, fontWeight: 'bold' }}>Courses: </p>
                            <li>Data Structures and Algorithms</li>
                            <li>Database Concepts</li>
                            <li>Software Development</li>
                            <li>Web Development Client/Server side</li>
                            <li>Systems Analysis and Designs</li>
                            <li>Discrete Math</li>
                            <li>Intro to Mobile App Design</li>
                            <li>App Dev 1 & 2</li>
                            <li>Business Systems Applications</li>
                        </ul>

                        <ul style={{ fontSize: 20, width: '50%' }}>
                            <p style={{ marginBottom: 5, fontWeight: 'bold' }}>Relevant Skills: </p>
                            <li>Programming Languages: Java, Python, HTML/CSS, JavaScript, Dart, PHP</li>
                            <li>Frameworks: Flutter, React/React Native</li>
                            <li>Databases: SQL, Firebase</li>
                            <li>Devops/Version Control: Git, CircleCI, Docker</li>
                            <li>Others: Linux, Figma, Expo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}