
import '../Header/header.scss';
import ImgTelefone from './img/bi_telephone.png';
import ImgCarrinho from './img/shopping-bag-one.png';

function Header() {

    return (

        <div className="containers">
            <div className="container1">
                <div className='telefone'>
                    <img src={ImgTelefone} />
                    <p>11 4191 4399</p>
                </div>
                <tspan x="108.94" y="325">AVIATO</tspan>
                <div className='carrinho'>
                    <img src={ImgCarrinho} />
                    <p>(0) -</p>
                    <p className='precoBold'>R$ 0.00</p>
                </div>
            </div>
            <div className="linha"></div>

            <div className="container2">
                <ul>
                    <li>Home</li>
                    <li>Camisas</li>
                    <li>Blusas</li>
                    <li>Calças</li>
                    <li>Acessórios</li>
                    <li>Outlet</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;