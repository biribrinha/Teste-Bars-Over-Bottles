
import '../Footer/footer.scss';

function Footer() {

    return (
        <div>
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
                    <p>imagem</p>
                    <p>imagem</p>
                    <p>imagem</p>
                    <p>imagem</p>
                    <p>imagem</p>

                </div>
            </div>
        </div>



    )
}

export default Footer;