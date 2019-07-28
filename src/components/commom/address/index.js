import React, { Component } from "react";
import { InputAddress } from "./styles";

import api from "../../../services/api";

class Address extends Component {
  state = {
    CEP: "",
    Cidade: "",
    Estado: "",
    Complemento: "",
    Endereco: "",
    Numero: ""
  };

  handleCEPChange = e => {
    this.setState({ CEP: e.target.value });
  };

  handleCidadeChange = e => {
    this.setState({ Cidade: e.target.value });
  };

  handleEstadoChange = e => {
    this.setState({ Estado: e.target.value });
  };

  handleComplementoChange = e => {
    this.setState({ Complemento: e.target.value });
  };

  handleEnderecoChange = e => {
    this.setState({ Endereco: e.target.value });
  };

  handleNumeroChange = e => {
    this.setState({ Numero: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { CEP } = this.state;

    const response = await api.get(`/cep/${CEP}`);

    this.setState({
      Cidade: response.data.cidade,
      Endereco: response.data.logradouro,
      Estado: response.data.estado,
      Complemento: response.data.bairro
    });
  };

  render() {
    const { CEP } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Endereçooo</h1>
        <InputAddress>
          <input
            type="text"
            onChange={this.handleCEPChange}
            placeholder="  Busca CEP "
            className="search-text"
            value={CEP}
            autoFocus="autoFocus"
          />

          <input
            type="text"
            onChange={this.handleCidadeChange}
            placeholder="  Cidade "
            className="search-text"
            value={this.state.Cidade}
          />

          <input
            type="text"
            onChange={this.handleEstadoChange}
            placeholder="  Estado "
            className="search-text"
            value={this.state.Estado}
          />

          <input
            type="text"
            onChange={this.handleComplementoChange}
            placeholder="  Complemento "
            className="search-text"
            value={this.state.Complemento}
          />

          <input
            type="text"
            onChange={this.handleEnderecoChange}
            placeholder="  Endereço "
            className="search-text"
            value={this.state.Endereco}
          />

          <input
            type="text"
            onChange={this.handleNumeroChange}
            placeholder="  Número "
            className="search-text"
          />
        </InputAddress>
        <button type="submit">Pesquisar</button>
      </form>
    );
  }
}

export default Address;
