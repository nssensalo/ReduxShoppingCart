import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function ProductCard ({product}) {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(
            {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1

            }

        )) 
    } 
        

    return (
        <Card sx={{ maxWidth:300,m:2, display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
            <CardMedia 
            component="img"
            sx={{
                height: 140,
                objectFit: 'contain'
                
            }}
            
            image={product.imageUrl}
            alt={product.name}
            />
            <CardContent >
                    <Typography gutterBottom variant="h6" sx={{whiteSpace:'pre',overflow: 'visible',msTextOverflow:'ellipsis'}} component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        ${product.price.toFixed(2)}
                    </Typography>
            </CardContent>

            <Box sx={{ p: 2 }}>
                    <Button variant="contained" color="primary" onClick={handleAddToCart} fullWidth>
                        Add to Cart
                    </Button>
            </Box>
        </Card>
 );
}