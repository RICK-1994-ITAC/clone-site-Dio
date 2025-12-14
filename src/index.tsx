import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, Routes , Route } from "react-router";
import {Home} from './pages/home/home';
import { GlobalStyle } from './globalStyle';
import { Feed } from './pages/Feed/feed';
import { Register } from './pages/Register/Register';
import { ContextProvider } from './context/CreateContext';


const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(
  <HashRouter>
    <GlobalStyle/>
      <ContextProvider>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Login" element={<App/>}/>
            <Route path="/Feed" element={<Feed/>}/>
            <Route path="/Register" element={<Register/>}/>
          
        </Routes>
      </ContextProvider>
  </HashRouter>
);

