import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css';

import TopBar from 'components/TopBar'
import Footer from 'components/Footer'
import Routes from 'routes'
import Preloader from 'components/Preloader'
import {CurrentThemeProvider} from 'contexts/currentTheme'

import styles from './styles/appTheme.module.scss'
import './styles/style.css'
const App = () => {
    return (
        <CurrentThemeProvider>
            <div className={`${styles.appTheme} ${styles.unselectable}`}>
                {/*<Preloader />*/}
                <Router>
                    <TopBar/>
                    <Routes/>
                    <Footer/>
                </Router>
                <div className='cursor'> </div>
            </div>
        </CurrentThemeProvider>
    )
};


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

