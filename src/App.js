import React from 'react';

import GlobalStyle from './styles/global';
import Address from './components/commom/address';
import ButtonTeste from './components/Buttontest';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Novo cliente</h1>
      <h2>Tipo de cliente</h2>
      <div className="radiobutton">
        <input
          type="radio"
          defaultValue="option2"
          id="optionsRadios2"
          name="optionsRadios"
        />
        Pessoa Física (CPF)
      </div>
      <div className="radiobutton">
        <input
          type="radio"
          defaultValue="option2"
          id="optionsRadios2"
          name="optionsRadios"
        />
        Pessoa Jurídica (CNPJ)
      </div>
      <h2>Dados pessoais</h2>
      <input
        type="text"
        // onChange={}
        placeholder="  Nome completo "
        className="search-text"
        // value={0}
      />
      <input
        type="text"
        // onChange={}
        placeholder="  CPF "
        className="search-text"
        // value={0}
      />
      <input
        type="text"
        // onChange={}
        placeholder="  Data de nascimento "
        className="search-text"
        // value={0}
      />

      <h2>Dados de contato</h2>

      <input
        type="text"
        // onChange={}
        placeholder="  Telefone "
        className="search-text"
        // value={0}
      />

      <input
        type="text"
        // onChange={}
        placeholder="  E-mail "
        className="search-text"
        // value={0}
      />
      <Address />
      <ButtonTeste />
      <ButtonTeste />
    </div>
  );
}

export default App;
