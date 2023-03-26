import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Portfolio, Layout } from './pages'
import "./style.css"
import Error from './pages/Error';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/home" element={ <Home /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/portfolio" element={ <Portfolio /> } />
          <Route path="/about" element={ <About /> } />
        </Route>
        <Route path="/*" element={ <Error /> } />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
