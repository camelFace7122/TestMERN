import { Company } from "../store/ducks/companies/contracts";

type ErrorsType = {
  name?: string
  location?: string
  logo?: string
}

export const validateCompany = (values: Company) => {
    const errors: ErrorsType = {};

    if (!values.name) {
        errors.name = 'Поле не должно быть пустым';
    } else if (values.name.length > 50) {
        errors.name = 'Максимальное количество символов 50';
    }

    if (!values.location) {
        errors.location = 'Поле не должно быть пустым';
    } else if (values.location.length > 50) {
        errors.location = 'Максимальное количество символов 50';
    } 

    if (!values.logo) {
      errors.logo = 'Поле не должно быть пустым';
    }
    return errors;
}