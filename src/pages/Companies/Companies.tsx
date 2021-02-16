import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import { ModalContext } from '../../App';
import DeleteConfirmTooltip from '../../components/common/DeleteConfirmModal';
import Preloader from '../../components/common/Preloader';
import { selectCurrentCompany, selectDeleteCompanyIsError, selectDeleteCompanyIsLoaded, selectDeleteCompanyIsLoading } from '../../store/ducks/companies/selectors';
import cls from './Companies.module.css'
import TestListLeftside from './components/TestListLeftside'

const CompaniesPage = () => {

    const [deleteConfirmModalIsOpen, setDeleteConfirmModalIsOpen] = useState(false)
    const {startEditCompany} = useContext(ModalContext) 
    const currentCompany = useSelector(selectCurrentCompany)

    const deleteCompanyIsLoading = useSelector(selectDeleteCompanyIsLoading)
    const deleteCompanyIsLoaded = useSelector(selectDeleteCompanyIsLoaded)
    const deleteCompanyIsError = useSelector(selectDeleteCompanyIsError)

    const onDeleteBtnClick = () => {
        setDeleteConfirmModalIsOpen(true)
    }

    const onDeleteConfirmModalClose = () => {
        setDeleteConfirmModalIsOpen(false)
    }

    React.useEffect(() => {
        setDeleteConfirmModalIsOpen(false)
    }, [currentCompany])

    return (
        <div className={cls.testList}>
            <TestListLeftside />
            <div className={`${cls.testList__rightside} ${cls.testList__block}`}>
                {
                    deleteCompanyIsLoading && <Preloader /> 
                }
                { (!deleteCompanyIsLoading && currentCompany) ? 
                    <>
                        <div className={cls.testList__controls}>
                            <button onClick={() => startEditCompany(currentCompany)}>
                                Редактировать
                            </button>
                            <button onClick={onDeleteBtnClick}>
                                Удалить
                            </button>
                            {
                                deleteConfirmModalIsOpen ? 
                                <DeleteConfirmTooltip onDeleteConfirmModalClose={onDeleteConfirmModalClose} item={currentCompany} /> : 
                                null
                            }
                        </div>
                        <div>
                            <h2>{currentCompany.name}</h2>
                            <p>Штаб-квартира: {currentCompany.location}</p>
                            <div className={cls.testList__imageWrapper}>
                                <img src={currentCompany.logo} />
                            </div>
                        </div>
                    </> 
                    : <div>
                        <h2>Выберите компанию из списка для просмотра информации</h2>
                        <div>
                            {
                                deleteCompanyIsLoaded &&
                                <h2 style={{color: 'green'}}>Операция успешно выполнена</h2>
                            }
                            {   
                                deleteCompanyIsError &&
                                <h2 style={{color: 'red'}}>Произошла ошибка при удалении</h2>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default CompaniesPage

