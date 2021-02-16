import React from 'react' 
import {Switch, Route} from 'react-router-dom'
import {Redirect} from 'react-router'
import AboutPage from '../../pages/About/About'
import cls from './Main.module.css'
import CompaniesPage from '../../pages/Companies/Companies'

const Main = () => {
    return (
        <main className={cls.main}>
            <Switch>
                <Route exact path={'/'} component={() => <Redirect to="/about"/>} />
                <Route exact path={'/about'} component={AboutPage} />
                <Route exact path={'/companies'} component={CompaniesPage} />
            </Switch>
        </main>
    )  
}

export default Main