import React from "react";
import { Link } from "react-router-dom";
import '../Home/home.scss';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import Cards from '../../components/Cards/Cards';
import Imagem1 from './img/category-1.jpg';
import Imagem2 from './img/category-2.jpg';
import Imagem3 from './img/category-3.jpg';



function Home() {

    return (
        <div>
            <Header />
            <div id="banner">
                <div className="bannerContainer">
                    <div className="bannerContainer1">
                        <h1>Summer Collection</h1>
                        <p>Separamos os melhores looks pra você neste 2023</p>
                    </div>
                    <div className="bannerContainer2">
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>

            <div>
                <h2>Tendências</h2>

                <div className="containerCategoria">
                    <div className="imgCategoria">
                        <div className="sessao1">
                            <img src={Imagem1} />
                            <img src={Imagem2} />
                        </div>
                        <div className="sessao2">
                            <img src={Imagem3} />
                        </div>
                    </div>
                </div>

                <div className="linha"></div>
                <h3>Populares</h3>
                <Cards />

                <div className="espaçoBTN">
                <div className="btnCategoria">
                    <button>Ver Mais Produtos</button>
                </div>
                </div>
                
            </div>


            <Footer />

        </div>

    )
}

export default Home;