import { ReactComponent as MainImage } from "assets/images/main-image.svg";
import ButtonIcon from "components/ButtonIcon";
import { Link } from "react-router-dom";

import './styles.css';

function Home() {
    return (
        <div className="home-container">
            <div className="base-card home-card">
                <div className="home-content-container">
                    <div>
                        <h1>Conheça o melhor catálago de produtos</h1>
                        <p>Ajudaremos você a encontrar os melhores produtos disponiveis no mercado.</p>
                    </div>
                    <div>
                        <Link to="/products">
                            <ButtonIcon />
                        </Link>
                    </div>
                </div>
                <div className="home-image-container">
                    <MainImage />
                </div>
            </div>
        </div>
    );
}

export default Home;