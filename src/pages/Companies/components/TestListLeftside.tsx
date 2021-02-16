import React, { useContext, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Preloader from '../../../components/common/Preloader';
import { fetchCompanyList } from '../../../store/ducks/companies/actionCreators';
import { selectCompanyList, selectCompanyListIsError, selectCompanyListIsLoaded, selectCompanyListIsLoading } from '../../../store/ducks/companies/selectors';
import cls from '../Companies.module.css'
import {ModalContext} from '../../../App'
import TestListItem from './TestListItem';
import { Company } from '../../../store/ducks/companies/contracts';

const TestListLeftside = () => {
    const {openAddCompanyModal} = useContext(ModalContext) 
    const [selectedItem, setSelectedItem] = useState<undefined | Company>(undefined)

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchCompanyList())
    }, [])

    const companies = useSelector(selectCompanyList);
    const companiesIsLoading = useSelector(selectCompanyListIsLoading)
    const companiesIsLoaded = useSelector(selectCompanyListIsLoaded)
    const companiesIsError = useSelector(selectCompanyListIsError)

    return (         
        <div className={`${cls.testList__leftside} ${cls.testList__block}`}>
            {
                companiesIsLoading && 
                <Preloader />
            }
            {
                companiesIsError && 
                <h2>Произошла ошибка</h2>
            }
            {   companiesIsLoaded && 
                <>
                    <div className={cls.testList__items}>
                        {companies.length === 0 ? <h4 style={{color: 'gray'}}>Список пуст. Добавьте компании нажав на кнопку ниже.</h4> : null}
                        {companies.map(item => <TestListItem key={item._id} item={item} selected={item === selectedItem} setSelectedItem={setSelectedItem} />)}
                    </div>
                    <button onClick={() => openAddCompanyModal()} className={cls.submitButton}>Добавить</button>
                </>
            }   
            
        </div>  
    )
}

export default TestListLeftside
