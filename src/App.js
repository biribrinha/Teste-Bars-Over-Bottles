
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from './pages/Home/Home';
import Categoria from './pages/Categoria/Categoria';
import Produto from './pages/Produto/Produto';
import './styles/main.sass';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Categoria} path="/categoria" />
            <Route component={Produto} path="/produto" />
        </BrowserRouter>
    )
}

export default Routes;
