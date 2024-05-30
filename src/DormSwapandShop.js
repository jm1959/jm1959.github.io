//Joseph McGillen: Portfolio
import './styles/ProjectPages.css';
export default function DormSwapandShop() {
    return (
        <div id="appHeader">
            <h1>Dorm Swap and Shop</h1>
            <div id="projectDescription">
                <div id="projectText">
                    <h3>About:</h3>
                    <p>
                        Created as a senior project. Dorm Swap and Shop is geared toward college students who are
                        looking to get rid of some unwanted items and making money in the process.
                        Our goal is to focus on connecting college students to buy, sell, or trade textbooks,
                        furniture, home goods, etc. without having to worry about any unwanted users interrupting the exchange.
                    </p>
                    <p>To view source code: <a href='https://github.com/m-shoul/dorm-swap-shop'>Dorm Swap and Shop</a></p>
                </div>
                <div id="projectImage">
                    <img src={require('./assets/images/logoV2.png')} alt="Project" style={{ width: '100%', borderRadius: 10 }} />
                </div>
            </div>
        </div>
    );
}