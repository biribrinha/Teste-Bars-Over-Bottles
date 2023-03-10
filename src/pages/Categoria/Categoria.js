import '../Categoria/categoria.scss';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import Cards from '../../components/Cards/Cards';
import Image1 from '../Categoria/img/view1.png';
import Image2 from '../Categoria/img/view2.png';

function Categoria() {

    return (

        <div>
            <Header />
            <div className="bannerCategoria">
                <h1>Blusas</h1>
                <p>Home - Blusas e Camisas - Blusas</p>
            </div>

            <div className="categoria">
                <ul>
                    <li>Feminino</li>
                    <li>Masculino</li>
                    <li>Acessórios</li>
                </ul>
            </div>

            <div className="cabecalhoCategoria">
                <div className="filtroCategoria">
                    <div className="ordenar">
                        <h2>Ordenar</h2>
                        <p>: Nome</p>
                    </div>

                    <div className="visualizar">
                        <h3>Visualizar</h3>
                        <p>: 9</p>
                    </div>
                </div>

                <div className="view">
                    <h4>View</h4>
                    <img src={Image1} />
                    <img src={Image2} />


                </div>
            </div>

            <Cards />

            <div class="paginacao">
               
                <a href="#" >1</a>
                <a href="#" >2</a>
                <a href="#" >3</a>
                <a href="#" class="active">4</a>
                <a href="#" >5</a>

                <div className="buttomPaginacao">
                    <button> > </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Categoria;