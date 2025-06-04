import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectTotalPrice } from '../features/cart/cartSelectors';
import { clearCart } from '../features/cart/cartSlice';
import CartItem from './CartItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

export default function ShoppingCart () {
    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectTotalPrice)
    console.log('# 1 -Total price in shopping cart:', totalPrice, typeof totalPrice)

    const dispatch = useDispatch()
    const handleClearCart = () =>{
        dispatch(clearCart())
    };
    console.log('# 2 -Total price in shopping cart:', totalPrice, typeof totalPrice)

    return (
        <Paper  elevation={3} sx={{ p: 3, m: 3, maxWidth: 400, mx: 'auto' }}>
            <Typography variant="h5" gutterBottom>
                Your Shopping Cart
            </Typography>
            <Divider sx={{ mb: 2 }} />
             
             {cartItems.length === 0 ? (
            <Typography variant="body1" color="text.secondary">
            Your cart is empty.
            </Typography>
            ) : (
                <Box>
                        {cartItems.map((item)=>(
                        <CartItem key={item.id} item={item}/>
                        ))}
                        
                        <Divider sx={{ my: 2 }} />
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant='h6'> Total: </Typography>
                            <Typography variant='h6'>${totalPrice.toFixed(2)}</Typography>
                        </Box>
                        
                        <Button
                        variant='outlines'
                        color='secondary'
                        onClick={handleClearCart}
                        fullWidth
                        sx={{ mt:2 }}
                        >
                        Clear Cart
                        </Button>
                        
                        <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        sx={{ mt: 1}}
                        >
                        Checkout
                        </Button>
                </Box> 
            )}

        
        </Paper>
    );
}