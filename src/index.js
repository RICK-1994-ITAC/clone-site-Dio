import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes , Route } from "react-router";
import {Home} from './pages/home/home';
import { GlobalStyle } from './globalStyle';
import { Feed } from './pages/Feed/feed';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Login" element={<App/>}/>
      <Route path="/Feed" element={<Feed/>}/>
    </Routes>
  </BrowserRouter>
);

