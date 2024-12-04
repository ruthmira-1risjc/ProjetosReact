
import React, { useState, useRef, useEffect } from 'react';
import Tabela from "./Components/Tabela";
import Dialog from './Components/Dialog';
import EditForm from './Components/EditForm';
import './App.css'


function App() {

  const [imoveis, setImoveis] = useState([
    {
      id: 1,
      numero: 123,
      logradouro: "Rua das Flores",
      tipoLogradouro: "Rua",
      contribuinte: "12.3456.7890.1234",
      descricao: "Casa com piscina",
      editadoEm: "2023-11-20",
      tipoImovel: "Casa",
    },
    {
      id: 2,
      numero: 456,
      logradouro: "Av. Central",
      tipoLogradouro: "Avenida",
      contribuinte: "98.7654.3210.9876",
      descricao: "Apartamento cobertura",
      editadoEm: "2023-11-18",
      tipoImovel: "Apartamento",
    },
    {
      id: 3,
      numero: 789,
      logradouro: "Praça da Paz",
      tipoLogradouro: "Praça",
      contribuinte: "15.2485.9864.3586",
      descricao: "Terreno vazio",
      editadoEm: "2023-11-15",
      tipoImovel: "Terreno",
    },
  ]);

  const [selectedImovel, setSelectedImovel] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef(null);

  function handleOpenDialog(imovel) {
    setSelectedImovel(imovel);
    setIsDialogOpen(true);
  }

  function handleCloseDialog() {
    setIsDialogOpen(false);
    setSelectedImovel(null);
  }

  function handleSaveChanges(updatedImovel) {
    updatedImovel.editadoEm = new Date().toLocaleDateString('pt-BR');
    setImoveis((prevImoveis) =>
      prevImoveis.map((imovel) =>
        imovel.id === updatedImovel.id ? updatedImovel : imovel
      )
    );
    setSelectedImovel(null);
  }

  useEffect(() => {
    if (isDialogOpen && selectedImovel !== null) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isDialogOpen, selectedImovel]);

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-4">Lista de Imóveis</h1>
      <Tabela imoveis={imoveis} handleOpenDialog={handleOpenDialog} />

      {selectedImovel && (
        <Dialog ref={dialogRef} handleCloseDialog={handleCloseDialog}>
          <EditForm
            imovel={selectedImovel}
            handleSaveChanges={handleSaveChanges}
          />
        </Dialog>
      )}
    </>
  );
}

export default App;
