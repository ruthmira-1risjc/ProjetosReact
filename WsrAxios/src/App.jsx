import React, { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import CepForm from './components/CepForm';

const fetchCepData = async (cep) => {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  if (response.data.erro) {
    throw new Error('CEP inválido.');
  }
  return response.data;
};

function App() {
  const [cep, setCep] = useState('');
  const [fetchKey, setFetchKey] = useState(null);

  const { data, error, isLoading } = useSWR(fetchKey, fetchCepData);

  const fetchCep = () => {
    if (cep) {
      setFetchKey(cep);
    }
  };

  return (
    <div className="flex flex-row mt-8 m-4 justify-center">
      <CepForm
        cep={cep}
        setCep={setCep}
        fetchCepData={fetchCep}
        isLoading={isLoading}
        error={error}
        data={data}
      />
    </div>
  );
}

export default App;
