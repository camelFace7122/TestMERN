import React, { createContext, useState } from 'react';
import './App.css';
import AddCompanyModal from './components/common/AddCompanyModal';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Company } from './store/ducks/companies/contracts';

export interface IModalContext {
  openAddCompanyModal: () => void
  closeAddCompanyModal: () => void
  openEditCompanyModal: () => void
  startEditCompany: (item: Company) => void
}

export const ModalContext = createContext<IModalContext>({
  openAddCompanyModal: () => {},
  closeAddCompanyModal: () => {},
  openEditCompanyModal: () => {},
  startEditCompany: (item: Company) => {}
});

function App() {
  const [addCompanyModalIsOpen, setAddCompanyModalIsOpen] = useState<boolean>(false)
  const [editCompanyModalIsOpen, setEditCompanyModalIsOpen] = useState<boolean>(false)
  const [item, setItem] = useState<undefined | Company>(undefined)

  function openAddCompanyModal() {
    setAddCompanyModalIsOpen(true)
  }

  function openEditCompanyModal() {
    setEditCompanyModalIsOpen(false)
  }

  function closeAddCompanyModal() {
    setAddCompanyModalIsOpen(false)
    setEditCompanyModalIsOpen(false)
  }

  function startEditCompany(item: Company) {
    setItem(item)
    setEditCompanyModalIsOpen(true)
  }

  return (
    <ModalContext.Provider value={{ openAddCompanyModal, closeAddCompanyModal, openEditCompanyModal, startEditCompany }}>
      <div className={'container'}>
        <Header />
        <Main />
        <AddCompanyModal open={addCompanyModalIsOpen} closeAddCompanyModal={closeAddCompanyModal} />
        <AddCompanyModal open={editCompanyModalIsOpen} closeAddCompanyModal={closeAddCompanyModal} item={item} />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
