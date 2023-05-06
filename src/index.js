import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import App from "./App"
import Home from "./components/Home"
import About from "./components/About"
import ContactUs from './components/ContactUs';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "bootstrap/dist/js/bootstrap.bundle"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
<Route path="/" element={<App/>}>
  <Route index element={<Home/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="contactUs/:data"  element={<ContactUs/>} />

</Route>
  </Routes>
  </BrowserRouter>
   
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
