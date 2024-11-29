import '../src/Styles/App.css';
import "./Styles/Fonts.css";
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import PageContent from './Components/PageContent.jsx';
import React from 'react'
// import { useTranslation } from "react-i18next";


function App() {
  // const { t, i18n } = useTranslation();
  // document.body.dir = i18n.dir();
  return (
    <>
    <Header/>
    <PageContent />
    <Footer/>
    </>
  );
}

export default App;
