import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import Header from './components/Header';
import ProductList from './components/ProductList';
// import ShoppingCart from './components/ShoppingCart';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline'; // Helps normalize CSS across browsers



function App() {
  

  return (
    <>
    
      <CssBaseline />
         <Header />
         <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row'}, p:2, gap:3 }}> 
            <ProductList />
         </Box>
         



      
      
    </>
  );
}

export default App;
