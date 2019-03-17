import React, { Component } from 'react'
import api from '../services/api'
import Header from '../components/Header'
import FloatingLabel, {
  floatingStyles,
  focusStyles,
  inputStyles,
  labelStyles
} from 'floating-label-react'

import { Row, Col, Button } from 'react-bootstrap'
import ListaItens from '../components/Lista'

export default class Cliente extends Component {
  state = {
    clientes: [],
    nomeEmpresa: '',
    nomeResponsavel: '',
    emailContato: '',
    telefoneContato: '',
    refresh: 1,
  }

  componentDidMount () {
    this.obterClientes()
  }

  obterClientes = () => {
    const response = api.get('/customers')
    response.then(res => {
      this.setState({ clientes: res.data })
    })
  }

  handleDelete = (_id) => {
    api.delete('customers/' + _id)
      .then(res => {
        console.log(res);
      });
  }

  submitForm = async () => {
    const { nomeEmpresa, nomeResponsavel, emailContato, telefoneContato } = this.state;
    const response = api.post('/customers', {
      nomeEmpresa,
      nomeResponsavel,
      email: emailContato,
      telefone: telefoneContato
    });
    response.then(ret => {
      this.obterClientes()
      console.log(ret);
    });
  }

  resetForm = async () => {
    this.setState({
      nomeEmpresa: '',
      nomeResponsavel: '',
      emailContato: '',
      telefoneContato: ''
    })
  }

  render () {
    const clientes = this.state.clientes
    return (
      <div className='main'>
        <Header />
        <div className='container-fluid'>
          <h1>Clientes</h1>
          <Row>
            <Col>
              <ListaItens itens={clientes} />
            </Col>

            {/* Formulário */}

            <Col>
              <form onSubmit={this.onSubmit}>
                <Row>
                  <Col>
                    <FloatingLabel
                      styles={inputStyle}
                      id='empresa'
                      name='empresa'
                      placeholder='Empresa'
                      type='text'
                      required
                      value={this.state.nomeEmpresa}
                      onChange={(event, value) => this.setState({ nomeEmpresa: event.target.value })}
                    />
                  </Col>
                  <Col>
                    <FloatingLabel
                      styles={inputStyle}
                      id='responsavel'
                      name='responsavel'
                      placeholder='Responsável'
                      required
                      type='text'
                      value={this.state.nomeResponsavel}
                      onChange={(event, value) =>
                        this.setState({ nomeResponsavel: event.target.value })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatingLabel
                      styles={inputStyle}
                      id='email'
                      name='email'
                      placeholder='E-mail'
                      type='email'
                      required
                      value={this.state.emailContato}
                      onChange={(event, value) => this.setState({ emailContato: event.target.value })}
                    />
                  </Col>
                  <Col>
                    <FloatingLabel
                      styles={inputStyle}
                      id='telefone'
                      name='telefone'
                      placeholder='Telefone'
                      type='text'
                      required
                      value={this.state.telefoneContato}
                      onChange={(event, value) =>
                        this.setState({ telefoneContato: event.target.value })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                <Col>
                  <Button type='submit' onClick={this.submitForm} variant='success' size='sm'>
                    Salvar
                  </Button>
                  &nbsp;
                  <Button
                    type='reset'
                    variant='danger' size='sm'
                    onClick={this.resetForm}>
                    Cancelar
                  </Button>
                </Col>
              </Row>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

const inputStyle = {
  floating: {
    ...floatingStyles,
    color: 'blue'
  },
  focus: {
    ...focusStyles,
    borderColor: 'blue'
  },
  input: {
    ...inputStyles,
    borderBottomWidth: 2,
    borderBottomColor: '#444',
    width: '100%'
  },
  label: {
    ...labelStyles,
    marginTop: '.5em',
    width: '100%'
  }
}
