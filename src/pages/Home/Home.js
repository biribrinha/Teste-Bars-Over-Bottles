import React from "react";
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";

function Home() {

    return (
        <div>
            <Header/>
        <div className="banner">

        </div>

        <h1>Tendências</h1>


        <h2>Populares</h2>


        <Link>Ver mais produtos</Link>

        <Footer/>
        
        </div>
       
    )
}

export default Home;