export default function About() {
    return (
        <div id="About">
            <div id="appHeader">
                <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '5%' }}>
                    <div style={{ width: '50%' }}>
                        <h3>Get to know me, </h3>
                        <p>
                            I'm thrilled to have you stop by and learn a bit about me.
                            As a computer science major with a concentration in software development, I have honed my skills
                            at Messiah University.
                        </p>
                        <p>
                            Throughout my academic journey, I've immersed myself in a diverse range of courses,
                            including data structures & algorithms, database concepts, software engineering, and web development 1 & 2.
                            This comprehensive education has provided me with a holistic understanding of the field and has instilled
                            in me a deep appreciation for the power of code. It has also allowed me to be able to howe my abilities in languages
                            such as Python, Java, HTML/CSS/Javascript, PHP, and SQL.
                        </p>
                        <p>
                            However, my college experience hasn't solely revolved around the digital realm. During my freshman and sophomore years,
                            I had the incredible opportunity to be a part of the college swim team. Being in the water has always been a
                            significant aspect of my life, and combining my love for swimming with my academic pursuits has been nothing short
                            of invigorating. The dedication, discipline, and teamwork I honed through competitive swimming have proven invaluable
                            in both my personal and academic life.
                        </p>
                    </div>
                    <div style={{ display: 'flex', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={require('./assets/images/headshot.png')} alt="headShot" style={{ height: '400px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}