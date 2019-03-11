import React, { Component } from 'react';
import api from '../services/api';

export default class Produto extends Component {

    state={

    }

    componentDidMount() {

    }

    obterProdutos = () => {
       const response = api.get('/customer');
       response.then(res => {
           console.log(res.json());
       });
    }

    render() {
        return(
            <h1>Produtos</h1>
        );
    }
}