import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import TopBar from 'components/TopBar'
import Footer from 'components/Footer'
import Routes from 'routes'

import styles from './styles/appTheme.module.scss'

const App = () => {
    return (
        <div className={styles.appThemeLight}>
            <Router>
                <TopBar/>
                <Routes />
                <Footer />
            </Router>
        </div>
    )
}


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)

