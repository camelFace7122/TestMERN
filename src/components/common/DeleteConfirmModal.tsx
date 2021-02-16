import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCompany, setCurrentCompany } from '../../store/ducks/companies/actionCreators'
import { Company } from '../../store/ducks/companies/contracts'
import commonCls from './common.module.css'

type PropsType = {
    onDeleteConfirmModalClose: () => void
    item: Company
}

const DeleteConfirmModal: React.FC<PropsType> = ({ onDeleteConfirmModalClose, item }) => {

    const dispatch = useDispatch()

    const handleDeleteConfirm = () => {
        dispatch(deleteCompany(item))
    }

    return (
        <div className={commonCls.deleteConfirmModalOverlay}>
            <div className={commonCls.deleteConfirmModal}>
                <p>Вы уверены?</p>
                <div>
                    <button onClick={handleDeleteConfirm}>Да</button>
                    <button onClick={() => onDeleteConfirmModalClose()}>Нет</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmModal;