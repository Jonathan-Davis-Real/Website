import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';

// Pages
import Mainpage from './pages/MainPage.jsx';

// Components
import Navigation from './components/Navigation';

function App() {

    return (
        <>
            <Mainpage />
        {/*
            <Navigation />
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        */}

        </>
    );

} export default App;
