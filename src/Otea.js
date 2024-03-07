import './styles/ProjectPages.css';
export default function Otea() {
    return (
        <div id="appHeader">
            <h1>Otea</h1>
            <div id="projectDescription">
                <div style={{ marginRight: '2%' }}>
                    <h3>About: </h3>
                    <div style={{ paddingRight: '10%' }}>
                        <p>When traveling through a major city it can be hard to find a public restroom in a timely manor</p>
                        <p>
                            Otea aims to connect restroom owners with restroom rentals. Users can find a listing on the map,
                            reserve a time slot, and pay for the rental all through the app.
                        </p>
                        <p>
                            Here is a link to the website <a href='https://www.otea.app/'>https://www.otea.app/</a>
                        </p>
                    </div>
                </div>
                <img src={require('./assets/images/otea.png')} alt="Project" style={{ width: '60vh', height: '50vhc' }} />
            </div>
        </div>
    );
}