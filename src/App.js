import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Portfolio, Homepage, Layout } from './pages'
import { Altitude, Md, Paired } from './components/projects';
import "./style.css"



function App() {
  return (
    <ChakraProvider theme={ theme }>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/home" element={ <Home /> } />
        <Route path="/homepage" element={ <Homepage /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/portfolio" element={ <Portfolio /> } />
          <Route path="/altitude" element={ <Altitude /> } />
          <Route path="/md" element={ <Md /> } />
          <Route path="/paired" element={ <Paired /> } />

        <Route path="/about" element={ <About /> } />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
