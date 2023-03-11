
import '../Produto/produto.scss';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import Cards from '../../components/Cards/Cards';
import produto1 from '../Produto/img/1.png';
import Minus from '../Produto/img/minus.png';
import Plus from '../Produto/img/plus.png';

import { useState } from 'react';


function Produto() {
    const [toggleDescricao, setToggleDescricao] = useState(false);
    const [toggleEspecificacao, setToggleEspecificacao] = useState(false);


    const handleClickDescricao = () => setToggleDescricao(!toggleDescricao);
    const handleClickEspecificacao = () => setToggleEspecificacao(!toggleEspecificacao);

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

                        <div className="cabecalhoProduto">
                            <div className='tituloValor'>
                                <h1>Product Est Quis Euismod</h1>
                                <p className="preco">R$ 155.99</p>
                            </div>
                            <div className='descricao'>
                                <p>But I must explain to you how all this mistaken idea of ouncing and aising pain was born and I will give you a complete count of ut I must explain to you how all this aken idea of enouncing pleasure born and I will give you a complete account of</p>
                            </div>
                        </div>


                        <div className="linha1"></div>

                        <div className='parteinferiorProduto'>


                            <div className="cores">

                                <h3>Cores <a className='vermelho'>*</a></h3>
                                <div className="selectCores">
                                    <label className="checkboxAzul">
                                        <input id="azul" type={'checkbox'} name="radio" />
                                    </label>

                                    <label className="checkboxRosa">
                                        <input id="rosa" type={'checkbox'} name="radio" />

                                    </label>

                                    <label className="checkboxRoxo">
                                        <input id="roxo" type={'checkbox'} name="radio" />

                                    </label>

                                    <label className="checkboxVerde">
                                        <input id="verde" type={'checkbox'} name="radio" />

                                    </label>

                                </div>
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
                                        <button>
                                            <a href='#'>Comprar</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="linha1"></div>
                            <div className="sobreProduto">
                                <div className='containerSobre'>
                                    <h3>Descrição</h3>
                                    <a onClick={handleClickDescricao}>
                                        <img src={Minus} />
                                    </a>
                                </div>
                                <div className='textoSobre'>
                                    {toggleDescricao && <p>But I must explain to you how all this mistaken denoun aising pain was born and I will give you a complete account of must explain to you how all this ake pain was born and give</p>}
                                </div>
                                <div className="linha1"></div>
                                <div className="containerSobre">
                                    <h3>Especificações</h3>
                                    <a onClick={handleClickEspecificacao}>
                                        <img src={Minus} />
                                    </a>
                                </div>

                                <div className='textoSobre'>
                                    {toggleEspecificacao && <p>But I must explain to you how all this mistaken denoun aising pain was born and I will give you a complete account of must explain to you how all this ake pain was born and give</p>}
                                </div>
                                <div className="linha1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Produtos Relacionados</h2>
            <Cards />
            <Footer />
        </div>
    )
}

export default Produto;