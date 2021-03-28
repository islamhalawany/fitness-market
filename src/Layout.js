import React from 'react'
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';


const Layout = (props) => {
    

    return (
        <>
        <Navbar />
        
        <div className="content" style={{minHeight: 'calc(100vh - 112px)'}}>
                <Route path={props.path} exact={props.exact} component={props.component} />
            </div>
            
        <Footer /> 
        </>
    )
}

export default Layout