import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css';

import TopBar from 'components/TopBar'
import Footer from 'components/Footer'
import Routes from 'routes'
//import Preloader from 'components/Preloader'
import Cursor from 'components/Cursor'
import {CurrentThemeProvider} from 'contexts/currentTheme'
import {CurrentShoppingBagProvider} from 'contexts/currentShoppingBag'

import styles from './styles/appTheme.module.scss'
import './styles/style.css'

const App = () => {

    return (
        <CurrentThemeProvider>
            <CurrentShoppingBagProvider>
                <div className={`${styles.appTheme} ${styles.unselectable}`}>
                    {/*<Preloader />*/}
                    <Router>
                        <TopBar/>
                        <Routes/>
                        <Footer/>
                    </Router>
                    <Cursor/>
                </div>
            </CurrentShoppingBagProvider>
        </CurrentThemeProvider>
    )
};


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

