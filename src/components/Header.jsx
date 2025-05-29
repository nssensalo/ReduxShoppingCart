import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalCartQuantity } from '../features/cart/cartSelectors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';

export default function Header () {
    const totalItemsInCart = useSelector(selectTotalCartQuantity);
    return (
        <AppBar position="static" sx={{backgroundColor:'#2196F3'}}>
            <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                        
                            Redux Shopping Cart
                        
                        </Typography>
                        <IconButton color="inherit" aria-label="shopping cart">
                            <Badge badgeContent={totalItemsInCart} color="error">
                                <ShoppingCartIcon/>
                            </Badge>
                        </IconButton>
           </Toolbar>
        </AppBar>
    );
}