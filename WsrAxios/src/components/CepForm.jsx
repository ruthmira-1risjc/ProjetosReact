import React from 'react';

function CepForm({ cep, setCep, fetchCepData, isLoading, error, data }) {
    return (
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

                <div className="flex justify-center gap-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white m-4 px-9 py-2 rounded-lg flex"
                        onClick={fetchCepData}
                        disabled={!cep}
                    >
                        <i className="fas fa-search p-1"></i>
                        Pesquisar
                    </button>
                </div>
            </div>

            <div className="mb-4">
                {isLoading && (
                    <div className="flex items-center">
                        <svg
                            className="animate-spin h-5 w-5 text-blue-500 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 0114.32-5.32A6.002 6.002 0 0012 4a6 6 0 00-6 6 6.002 6.002 0 00.68 2.68A8 8 0 014 12z"
                            />
                        </svg>
                        <p>Carregando...</p>
                    </div>
                )}
            </div>

            <div className="mb-4">
                {error && (
                    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                        <span className="font-medium">Erro! </span> {error.message}
                    </div>
                )}
            </div>


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
    );
}

export default CepForm;