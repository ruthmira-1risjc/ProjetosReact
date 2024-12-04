const Tabela = ({ imoveis, handleOpenDialog }) => {
    return (
        <div className="flex flex-row mt-6 m-4 justify-center">
            <div className="basis-11/12 shadow-md sm:rounded-lg overflow-x-auto">
                <table className="w-full text-md text-left rtl:text-right text-gray-500">
                    <thead className="text-gray-700 uppercase bg-gray-100">
                        <tr>
                            {/* <th scope="col" className="px-4 py-3">
                                <input
                                    id="select-all"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 accent-blue-500"
                                />
                                <label htmlFor="select-all" className="sr-only">Select All</label>
                            </th> */}
                            <th scope="col" className="px-4 py-3">Id</th>
                            <th scope="col" className="px-4 py-3">Número</th>
                            <th scope="col" className="px-4 py-3">Logradouro</th>
                            <th scope="col" className="px-4 py-3">Tipo de Logradouro</th>
                            <th scope="col" className="px-4 py-3">Contribuinte</th>
                            <th scope="col" className="px-4 py-3">Descrição</th>
                            <th scope="col" className="px-4 py-3">Editado em</th>
                            <th scope="col" className="px-4 py-3">Tipo de Imóvel</th>
                            <th scope="col" className="px-4 py-3">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {imoveis.map((imovel, index) => (
                            <tr
                                key={imovel.id}
                                className={`bg-white border-b hover:bg-gray-50 ${index % 2 === 0 ? "dark:bg-gray-50" : "dark:bg-gray-100"}`}
                            >
                                {/* <td className="p-4">
                                    <div className="flex items-center">
                                        <input
                                            id={`checkbox-${index}`}
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 accent-blue-500"
                                        />
                                        <label htmlFor={`checkbox-${index}`} className="sr-only">
                                            Select {imovel.numero}
                                        </label>
                                    </div>
                                </td> */}
                                <th scope="row" className="px-4 py-3 text-gray-900 whitespace-nowrap">
                                    {imovel.id}
                                </th>
                                <td className="px-4 py-3">{imovel.numero}</td>
                                <td className="px-4 py-3">{imovel.logradouro}</td>
                                <td className="px-4 py-3">{imovel.tipoLogradouro}</td>
                                <td className="px-4 py-3">{imovel.contribuinte}</td>
                                <td className="px-4 py-3">{imovel.descricao}</td>
                                <td className="px-4 py-3">{imovel.editadoEm}</td>
                                <td className="px-4 py-3">{imovel.tipoImovel}</td>
                                <td className="px-4 py-3 justify-center">
                                <button
                                    onClick={() => handleOpenDialog(imovel)}
                                    className="flex justify-center text-purple-600"
                                    >
                                    <i className="fas fa-edit mr-1"></i>
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tabela;