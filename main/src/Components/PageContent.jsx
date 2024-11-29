import {Route, Routes,useNavigate,Navigate  } from 'react-router-dom';
import HomePage from '../Pages/HomePage.jsx';
import AboutPage from '../Pages/AboutPage.jsx';
import ContactPage from '../Pages/ContactPage.js';
import RedirectPage from '../Pages/Redirect.jsx';
import LearningPage from "../Pages/LearningPage.jsx";
import Main from '../Pages/Main.jsx';
import Recycle from '../Pages/Recycle.jsx';
import React,{useEffect} from 'react'
import Assistant from '../Pages/Assistant.jsx';
import Industries from '../Pages/Industries.jsx';
import Monitor from '../Pages/Monitor.jsx';
function PageContent(){
    const navigate = useNavigate();
    return(
        <Routes>
            <Route path='/' element={<Navigate to="/Home" /> }/>
            <Route path='/Home' element={<HomePage/>}/>
            <Route path='/Main' element={<Main/>}/>
            <Route path='/Monitor' element={<Monitor/>}/>
            <Route path='/Recycle' element={<Recycle/>}/>
            <Route path='/Assistant' element={<Assistant/>}/>
            <Route path='/Industries' element={<Industries/>}/>
            <Route path='/About' element={<AboutPage/>}/>
            <Route path='/Contact' element={<ContactPage/>}/>
            <Route path='/*' element={<RedirectPage/>}/>
        </Routes>
    );
}
function Index() {
    const navigate = useNavigate();
  
    useEffect(() => {
      setTimeout(() => {
        // 👇 Redirects to about page, note the `replace: true`
        navigate('/Home', { replace: true });
      }, 1000);
    }, []);
  
    return <div style={{height:"100%"}}>Redirecting...</div>;
  }

export default PageContent;