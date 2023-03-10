
import '../Produto/produto.scss';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import produto1 from '../Produto/img/1.png';


function Produto() {



    return (



        <div className="mainProduto">
            <Header />
            <div className="bannerProduto">
                <div>
                    <p>Home - Blusas e Camisas - Gravida</p>
                </div>
            </div>
            <div className="containersProduto">
                <div className="amostraProduto">
                    <div className="containersProduto1">
                        <div className="carrouselProduto">
                            <img src={produto1} />
                        </div>
                    </div>

                    <div className="descricaoProduto">
                        <h1>Product Est Quis Euismod</h1>
                        <p className="preco">R$ 155.99</p>
                        <p className="descricao">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <div className="linha1"></div>

                        <div className="cores">
                            <h2>Cores</h2>
                            <div className="selectCores">
                                <option className="azul"></option>
                                <option className="rosa"></option>
                                <option className="roxo"></option>
                                <option className="verde"></option>
                            </div>

                            <div className="selectTamanhos">
                                <h3>Tamanhos</h3>

                                <ul>
                                    <li>P</li>
                                    <li>M</li>
                                    <li>G</li>
                                    <li>XG</li>
                                    <li>XXG</li>
                                </ul>

                            </div>

                            <div className="contagem">
                                <div className="adicionarMais">
                                    <p className="retirar">-</p>
                                    <p className="quantidade">01</p>
                                    <p className="adicionar">+</p>
                                </div>

                                <div className="espaçoBTN">
                                    <div className="btnCategoria">
                                        <button>Ver Mais Produtos</button>
                                    </div>
                                </div>
                            </div>

                            <div className="linha1"></div>

                            <div className="sobreProduto">
                                <h4>Descrição</h4>
                                <div className="linha1"></div>

                                <div className="especificacoesProduto">
                                    <h5>Especificações</h5>
                                </div>
                                <div className="linha1"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Produto;