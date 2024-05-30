//Joseph McGillen: Portfolio
//Credit for fade effect in the useEffect: https://www.youtube.com/watch?v=huVJW23JHKQ
import { useEffect } from "react";
import './styles/Home.css';
export default function Home() {
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
        <div id="Home">
            <div id="homePage">
                <div id="fadeIn">
                    <h1>Welcome, </h1>
                    <p style={{ width: '80%' }}>
                        Joseph is a motivated and passionate computer science graduate pursuing a future in software development.
                        Leveraging skills in Flutter, Dart, React Native, Java and Python to contribute effectively
                        to innovative projects and gain hands-on experience in software development.
                    </p>
                </div>
            </div>
        </div>
    );
}