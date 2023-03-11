import '../Categoria/categoria.scss';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import Cards from '../../components/Cards/Cards';
import Image1 from '../Categoria/img/view1.png';
import Image2 from '../Categoria/img/view2.png';

function Categoria() {

    return (

        <div className='mainCategoria'>
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
                        <p className='tituloFiltro'>Ordenar</p>
                        <p className='resultadoFiltro'>: Nome</p>
                    </div>

                    <div className="visualizar">
                        <p className='tituloFiltro'>Visualizar</p>
                        <p className='resultadoFiltro'>: 9</p>
                    </div>
                </div>

                <div className="view">
                    <p className='viewTitulo'>View</p>
                        <img src={Image1} />
                        <img src={Image2} />
                </div>
            </div>

            <Cards />

            <div className="paginacao">

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