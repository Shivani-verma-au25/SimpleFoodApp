import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Foodcontext from './components/context/Foodcontext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Foodcontext >
    <BrowserRouter >
    <App />
    </BrowserRouter>
  </Foodcontext>
)
