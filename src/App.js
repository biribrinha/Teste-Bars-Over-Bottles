
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from '../src/pages/Home';
import Categoria from '../src/pages/Categoria';
import Produto from '../src/pages/Produto';

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Categoria }  path="/categoria" />
           <Route component = { Produto }  path="/produto" />
       </BrowserRouter>
   )
}

export default Routes;
