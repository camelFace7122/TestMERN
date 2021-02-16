import React from 'react'
import cls from './About.module.css'
import eagle from '../../assets/images/eagle.png'

const AboutPage = () => {
    return (
        <div className={cls.about}>
            <div className={cls.welcome} style={{backgroundImage: `url(${eagle})`}}>
                <div>
                    <h4>
                        Приветствую на тестовую страницу
                        
                    </h4>
                    <p>
                        Нажмите на вкладку "Тест лист", 
                        чтобы посмотреть на список богатейших компании в сфере нефти и газа.
                        Вы можете добавить своего кандидата, указав три обязательных поля.
                        Если посчитаете нужным можете добавить/удалить кандидатов, или отредактировать информацию о любом из них.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage

