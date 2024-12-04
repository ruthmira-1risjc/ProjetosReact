import { useState } from "react";

const EditForm = ({ imovel, handleSaveChanges }) => {
  const [formData, setFormData] = useState({
    numero: imovel.numero,
    logradouro: imovel.logradouro,
    tipoLogradouro: imovel.tipoLogradouro,
    contribuinte: imovel.contribuinte,
    descricao: imovel.descricao,
    tipoImovel: imovel.tipoImovel,
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSaveChanges({ ...imovel, ...formData });
  }

  function handleContribuinteChange(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1.$2');
    value = value.replace(/(\d{4})(\d)/, '$1.$2');
    value = value.replace(/(\d{4})(\d)/, '$1.$2');
    setFormData({ ...formData, contribuinte: value });
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold mb-4">Imóvel</h2>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="mb-4">
          <label className="block text-sm font-medium">Número</label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-gray-300 focus:border-blue-500 focus:ring-0 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Logradouro</label>
          <input
            type="text"
            name="logradouro"
            value={formData.logradouro}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-gray-300 focus:border-blue-500 focus:ring-0 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="mb-4">
          <label className="block text-sm font-medium">Tipo de Logradouro</label>
          <select
            name="tipoLogradouro"
            value={formData.tipoLogradouro}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-gray-300 focus:border-blue-500 focus:ring-0 focus:outline-none"
          >
            <option value="Rua">Rua</option>
            <option value="Avenida">Avenida</option>
            <option value="Praça">Praça</option>
            <option value="Rodovia">Rodovia</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Tipo de Imóvel</label>
          <select
            name="tipoImovel"
            value={formData.tipoImovel}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg border-gray-300 focus:border-blue-500 focus:ring-0 focus:outline-none"
          >
            <option value="Residencial">Residencial</option>
            <option value="Comercial">Comercial</option>
            <option value="Terreno">Terreno</option>
          </select>
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium">Contribuinte</label>
          <input
            type="text"
            name="contribuinte"
            value={formData.contribuinte}
            onChange={handleContribuinteChange}
            className="w-full p-2 border rounded-lg border-gray-300 focus:border-blue-500 focus:ring-0 focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Descrição</label>
        <textarea
          name="descricao"
          value={formData.descricao}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg border-gray-300 focus:border-blue-500 focus:ring-0 focus:outline-none"
        />
      </div>


      <div className="flex justify-center gap-4">


        <button
          type="button"
          onClick={handleSaveChanges}
          className="bg-transparent hover:bg-gray-500 hover:text-white text-gray-500 m-4 px-9 py-2 border border-gray-300 hover:border-gray-300 rounded-lg flex items-center">
          <i className="fas fa-times mr-2"></i>
          Cancelar
        </button>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white m-4 px-9 py-2 rounded-lg flex items-center">
          <i className="fas fa-save mr-2"></i>
          Salvar
        </button>


      </div>
    </form>
  );
};

export default EditForm;
