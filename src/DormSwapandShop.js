import './styles/ProjectPages.css';
export default function DormSwapandShop() {
    return (
        <div id="appHeader">
            <h1>Dorm Swap and Shop</h1>
            <div id="projectDescription">
                <div style={{ paddingRight: '10%' }}>
                    <h3>About:</h3>
                    <p>
                        Created as a senior project. Dorm Swap and Shop is geared toward college students who are
                        looking to get rid of some unwanted items and making money in the process.
                        Our goal is to focus on connecting college students to buy, sell, or trade textbooks,
                        furniture, home goods, etc. without having to worry about any unwanted users interrupting the exchange.
                    </p>
                </div>
                <img src={require('./assets/images/logoV2.png')} alt="Project" style={{ width: '50vh', height: '50vh' }} />
            </div>
        </div>
    );
}