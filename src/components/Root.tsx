import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Root: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default Root;