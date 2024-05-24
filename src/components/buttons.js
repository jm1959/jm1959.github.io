import { Link } from "react-router-dom";
export const Buttons = ({ path }) => {
    return (
        <Link
            style={{
                display: 'inline-block', padding: '10px 20px', color: '#131200',
                backgroundColor: '#7272AB', borderRadius: '4px', textAlign: 'center', textDecoration: 'none'
            }}
            to={path}>
            learn more
        </Link>
    );
}