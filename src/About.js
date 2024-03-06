import "./styles/About.css";
export default function About() {
    return (
        <div id="About">
            <div id="aboutPage">
                <div id="aboutMe">
                    <div>
                        <h3>Get to know me, </h3>
                        <p>
                            I'm thrilled to have you stop by and learn a bit about me.
                            As a computer science major with a concentration in software development, I have honed my skills
                            at Messiah University.
                        </p>
                        <p>
                            However, my college experience hasn't solely revolved around the digital realm. During my freshman and sophomore years,
                            I had the incredible opportunity to be a part of the college swim team. Being in the water has always been a
                            significant aspect of my life, and combining my love for swimming with my academic pursuits has been nothing short
                            of invigorating. The dedication, discipline, and teamwork I honed through competitive swimming have proven invaluable
                            in both my personal and academic life.
                        </p>

                    </div>
                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <img src={require('./assets/images/headshot.png')} alt="headShot" style={{ flex: 1, height: '50vh' }} />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <ul style={{ fontSize: 20 }}>
                        <p style={{ marginBottom: 5, fontWeight: 'bold' }}>Courses: </p>
                        <li>Data Structures and Algorithms</li>
                        <li>Database Concepts</li>
                        <li>Software Development</li>
                        <li>Web Development Client/Server side</li>
                        <li>Systems Analysis and Designs</li>
                        <li>Discrete Math</li>
                        <li>App Dev 1 & 2</li>
                    </ul>

                    <ul style={{ fontSize: 20 }}>
                        <p style={{ marginBottom: 5, fontWeight: 'bold' }}>Relevant Skills: </p>
                        <li>Programming Languages: Java, Python, HTML/CSS, JavaScript, Dart, PHP</li>
                        <li>Frameworks: Flutter, React Native</li>
                        <li>Databases: SQL</li>
                        <li>Devops/Version Control: Git, CircleCI, Docker</li>
                        <li>Others: Linux, Figma, Expo</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}