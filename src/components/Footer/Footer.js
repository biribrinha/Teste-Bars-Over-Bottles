import IconFacebook from './img/gg_facebook.png';
import IconTwitter from './img/mingcute_twitter-fill.png';
import IconInstagram from './img/typcn_social-instagram.png';
import IconTumblr from './img/uil_tumblr.png';
import IconPinterest from './img/fa_pinterest.png';

import '../Footer/footer.scss';

function Footer() {

    return (
        <div className="mainFooter">
            <div className="containersFooter">
                <div className="containerFooter1">
                    <ul>
                        <li>Contato</li>
                        <li>Fretes e entrega</li>
                        <li>Como comprar</li>
                        <li>Trocas e devoluções</li>
                    </ul>
                </div>
                <div className="containerFooter2">
                    <ul>
                        <li>Sobre</li>
                        <li>Na mídia</li>
                        <li>Segurança</li>
                        <li>Políticas</li>
                    </ul>
                </div>

                <div className="containerFooter3">
                    <p>Cadastre-se e receba nossas novidades</p>
                    <p>cadastrar</p>
                </div>
            </div>

            <div className="linha"></div>
            <div className="parteInferior">

                <div className="parte1">
                    <p>copyright @ 2023</p>
                </div>
                <div className="parte2">
                    <ul>
                        <li>Faq</li>
                        <li>Minha conta</li>
                        <li>Meus pedidos</li>
                    </ul>
                </div>
                <div className="parte3">
                <img src={IconFacebook} />
                <img src={IconTwitter} />
                <img src={IconInstagram} />
                <img src={IconTumblr} />
                <img src={IconPinterest} />
                </div>
            </div>
        </div>



    )
}

export default Footer;