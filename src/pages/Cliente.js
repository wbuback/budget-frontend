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
    telefoneContato: ''
  }

  componentDidMount () {
    this.obterClientes()
  }

  obterClientes = () => {
    const response = api.get('/customers')
    response.then(res => {
      this.setState({ clientes: res.data })
      //   console.log(this.state.clientes)
    })
  }

  submitForm = async () => {}

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
                      value={this.state.nomeEmpresa}
                      onChange={value => this.setState({ nomeEmpresa: value })}
                    />
                  </Col>
                  <Col>
                    <FloatingLabel
                      styles={inputStyle}
                      id='responsavel'
                      name='responsavel'
                      placeholder='Responsável'
                      type='text'
                      value={this.state.nomeResponsavel}
                      onChange={value =>
                        this.setState({ nomeResponsavel: value })
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
                      value={this.state.emailContato}
                      onChange={value => this.setState({ emailContato: value })}
                    />
                  </Col>
                  <Col>
                    <FloatingLabel
                      styles={inputStyle}
                      id='telefone'
                      name='telefone'
                      placeholder='Telefone'
                      type='text'
                      value={this.state.telefoneContato}
                      onChange={value =>
                        this.setState({ telefoneContato: value })
                      }
                    />
                  </Col>
                </Row>
              </form>
              <Row>
                <Col>
                  <Button type='submit' onClick={this.submitForm}>
                    Salvar
                  </Button>

                  <Button
                    type='reset'
                    className='btn-danger'
                    onClick={this.resetForm}>
                    Cancelar
                  </Button>
                </Col>
              </Row>
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
