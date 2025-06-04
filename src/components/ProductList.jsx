import React from 'react';
import ProductCard from './ProductCard';
import dummyProducts from '../data/dummyProducts';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ProductList(){
    return (
        <Box sx={{ p:3 }}>
            <Typography variant="h4" gutterBottom>
                Available Products
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                        {
                            dummyProducts.map(
                                (product) =>(
                                <Grid item key={product.id}>
                                    
                                    <ProductCard product={product} />

                                </Grid>
                                )
                            )
                        }
            </Grid>
        </Box>
    );
}