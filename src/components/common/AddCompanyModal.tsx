import React from 'react'
import { Formik } from 'formik';
import { Company, LoadingState } from '../../store/ducks/companies/contracts';
import { validateCompany } from '../../utils/validateCompany';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany, editCompany, setAddCompanyLoadingState } from '../../store/ducks/companies/actionCreators';
import cls from './AddCompanyModal.module.css';
import { MouseEvent } from 'react';
import { selectAddCompanyIsError, selectAddCompanyIsLoaded, selectAddCompanyIsLoading } from '../../store/ducks/companies/selectors';
import Preloader from './Preloader';

type PropsType = {
  open: boolean
  closeAddCompanyModal: () => void
  item?: Company
}

const AddCompanyModal: React.FC<PropsType> = ({ open, closeAddCompanyModal, item }) => {

  let initialValues: Company = { name: '', location: '', logo: '' };

  if (item) {
    initialValues = { name: item.name, location: item.location, logo: item.logo }
  }

  const dispatch = useDispatch()

  const newCompanyIsLoading = useSelector(selectAddCompanyIsLoading)
  const newCompanyIsLoaded = useSelector(selectAddCompanyIsLoaded)
  const newCompanyIsError = useSelector(selectAddCompanyIsError)

  const onClose = (e: MouseEvent) => {
    closeAddCompanyModal()
    dispatch(setAddCompanyLoadingState(LoadingState.NEVER))
  }

  if (!open) {
    return null
  }

  return (
    <div className={cls.addCompanyModal} onClick={onClose}>
      <div className={cls.addCompanyModal__inner} onClick={(e) => e.stopPropagation()}>
        {
          newCompanyIsLoading &&
          <div style={{marginTop: 80}}>
            <Preloader />
          </div>
        }
        {
          !newCompanyIsLoading &&
            <Formik
              initialValues={initialValues}
              validate={validateCompany}
              onSubmit={(values) => {
                if (!item) {
                  dispatch(addCompany(values))
                } else {
                  dispatch(editCompany({_id: item._id, ...values}))
                }
              }
              }
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className={cls.addCompanyModalField}>
                    <label htmlFor="companyLogo">Название: </label>
                    <input
                      type="text"
                      name="name"
                      id="companyName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <p className={cls.addCompanyModalFieldError}>
                      {errors.name && touched.name && errors.name}
                    </p>
                  </div>

                  <div className={cls.addCompanyModalField}>
                    <label htmlFor="companyLogo">Локация штаб-квартиры: </label>
                    <input
                      type="text"
                      name="location"
                      id="companyLocation"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.location}
                    />
                    <p className={cls.addCompanyModalFieldError}>
                      {errors.location && touched.location && errors.location}
                    </p>
                  </div>

                  <div className={cls.addCompanyModalField}>
                    <label htmlFor="companyLogo">URL логотипа: </label>
                    <input
                      type="text"
                      name="logo"
                      id="companyLogo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.logo}
                    />
                    <p className={cls.addCompanyModalFieldError}>
                      {errors.logo && touched.logo && errors.logo}
                    </p>

                  </div>

                  <button type="submit">
                    {
                      item ? 'Редактировать' : 'Добавить'
                    }
                  </button>
                  <button type="button" className={cls.cancelBtn} onClick={onClose}>
                    Отмена
              </button>
                </form>
              )}
            </Formik>
        }
        {
          newCompanyIsError &&
          <h2 style={{color: 'red'}}>Произошла ошибка</h2> 
        }
        {
          newCompanyIsLoaded &&
          <h2 style={{color: 'green'}}>Операция прошла успешно</h2>
        }
        {
          !newCompanyIsLoading && 'ВНИМАНИЕ: Название компании и URL логотипа должны быть уникальными'
        }
      </div>
    </div>
  )
}

export default AddCompanyModal;