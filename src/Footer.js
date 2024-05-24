//Joseph McGillen: Portfolio
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#03045E", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ color: "#7272AB" }}>© 2024 by Joseph McGillen</p>
            <div>
                <a href="mailto:mcgillenjoseph@gmail.com"><MdEmail style={{ fill: "#7272AB", margin: '0 10px' }} size={30} /></a>
                <a href="https://www.linkedin.com/in/joseph-mcgillen/"><IoLogoLinkedin style={{ fill: "#7272AB", margin: '0 10px' }} size={30} /></a>
                <a href="https://github.com/jm1959"><FaGithub style={{ fill: "#7272AB", margin: '0 10px' }} size={30} /></a>
            </div>
        </footer>
    );
}