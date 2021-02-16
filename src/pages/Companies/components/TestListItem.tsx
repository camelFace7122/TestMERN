import React from 'react'
import { SetStateAction } from 'react'
import { Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentCompany } from '../../../store/ducks/companies/actionCreators'
import { Company } from '../../../store/ducks/companies/contracts'
import cls from '../Companies.module.css'
import cn from 'classnames'

type PropsType = {
    item: Company,
    selected: boolean,
    setSelectedItem: Dispatch<SetStateAction<Company | undefined>>
}

const TestListItem: React.FC<PropsType> = ({item, selected, setSelectedItem}) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        setSelectedItem(item)
        dispatch(setCurrentCompany(item))
    }

    return (         
        <p className={cn(cls.testList__item, {[`${cls.testList__item_selected}`]: selected})} onClick={handleClick}>{item.name}</p>
    )
}

export default TestListItem
