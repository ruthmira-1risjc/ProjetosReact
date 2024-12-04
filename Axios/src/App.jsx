import './App.css'
import axios from 'axios';
import React, { useState } from 'react';
import useSWR from 'swr'

function App() {
  const [cep, setCep] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCepData = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.data.erro) {
        setError('CEP inválido.');
      } else {
        setData(response.data);
      }
    } catch (err) {
      setError('Erro ao buscar informações. Verifique sua conexão ou o CEP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <div className="flex flex-row mt-8 m-4 justify-center">
        <div className="basis-11/12 shadow-md sm:rounded-lg overflow-x-auto">
          <h1>Consulta de CEP</h1>

          <div className="grid grid-cols-2 gap-4 mt-6 m-4">
            <div className="mb-4">
              <label className="block text-sm font-medium">Digite um CEP:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg border-gray-300 focus:border-blue-500 focus:ring-0 focus:outline-none"
                placeholder="Digite o CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                maxLength={8}
              />
            </div>


            {/* Botão para pesquisar */}
            <div className="flex justify-center gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white m-4 px-9 py-2 rounded-lg flex "
                onClick={fetchCepData}
                disabled={!cep}>
                <i className="fas fa-search p-1"></i>
                Pesquisar
              </button>
            </div>


          </div>

          {/* Estado de carregamento */}
          <div className="mb-4">
          {loading && <p>Carregando...</p>}
          </div>

          {/* Estado de erro */}
          <div className="mb-4">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>

          {/* Dados retornados */}
          <div className="mb-2">
            {data && (
              <div className="m-3">
                <h3>Dados do CEP:</h3>
                <p>CEP: {data.cep}</p>
                <p>Logradouro: {data.logradouro || 'Não informado'}</p>
                <p>Bairro: {data.bairro || 'Não informado'}</p>
                <p>Cidade: {data.localidade}</p>
                <p>UF: {data.uf}</p>
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  )
}

export default App
