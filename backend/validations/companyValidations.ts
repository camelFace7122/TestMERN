import { body } from 'express-validator'

function defaultValidation(value: string) {
    return body(value, 'Поле не должно быть пустым')
        .isString()
        .isLength({
            max: 50
        })
        .withMessage('Максимальное кол-во символов 50')
}

export const companyValidations = [
    defaultValidation('name'),
    defaultValidation('location'),
    body('logo', 'Укажите URL картинки логотипа компании')
        .isString()
        .isURL()
        .withMessage('Неверный формат URL')
        .custom((value: string) => {
            if (!(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(value)) {
                return false
            }
            return true
        })
        .withMessage('Данный URL не содержит изображение логотипа')
]

