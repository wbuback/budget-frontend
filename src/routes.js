import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Cliente from './pages/Cliente';
import Orcamento from './pages/Orcamento';
import Produto from './pages/Produto';
import pagina404 from './pages/pagina404';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/clientes" component={Cliente} />
                <Route path="/orcamentos" component={Orcamento} />
                <Route path="/produtos" component={Produto} />
                <Route path='*' component={pagina404} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
