import React, { Component } from 'react';
import api from '../services/api';

export default class Orcamento extends Component {

    state={

    }

    componentDidMount() {

    }

    obterOrcamentos = () => {
       const response = api.get('/customer');
       response.then(res => {
           console.log(res.json());
       });
    }

    render() {
        return(
            <h1>Orcamentos</h1>
        );
    }
}