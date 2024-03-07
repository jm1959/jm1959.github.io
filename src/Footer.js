import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#946183", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ color: "#f4decb" }}>© 2024 by Joseph McGillen</p>
            <div>
                <a href="mailto:mcgillenjoseph@gmail.com"><MdEmail style={{ fill: "#f4decb", margin: '0 10px' }} size={30} /></a>
                <a href="https://www.linkedin.com/in/joseph-mcgillen/"><IoLogoLinkedin style={{ fill: "#f4decb", margin: '0 10px' }} size={30} /></a>
                <a href="https://github.com/jm1959"><FaGithub style={{ fill: "#f4decb", margin: '0 10px' }} size={30} /></a>
            </div>
        </footer>
    );
}