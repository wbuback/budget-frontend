import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'

export default class ListaItens extends Component {

  render () {
    const lista = this.props.itens
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Responsável</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(item => (
            <tr key={item._id}>
              <td>{item.nomeEmpresa}</td>
              <td>{item.nomeResponsavel}</td>
              <td>{item.telefone}</td>
              <td>
                <a href={'mailto:' + item.email}>{item.email}</a>
              </td>
              <td>
                <Button variant='outline-dark' size='sm'>
                  Orçar
                </Button>
                &nbsp;
                <Button variant='outline-primary' size='sm'>
                  Editar
                </Button>
                &nbsp;
                <Button variant='outline-danger' size='sm'>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}
