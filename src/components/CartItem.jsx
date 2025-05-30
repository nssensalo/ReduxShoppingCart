import React from 'react';
import { useDispatch } from 'react-redux';
import { setItemQuantity, removeFromCart } from '../features/cart/cartSlice';
//import { selectCartItemById } from '../features/cart/cartSelectors'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import {
  decrementQuantity,
  incrementQuantity,
  } from '../features/cart/cartSlice';


export default function CartItem({item}) {
    const dispatch = useDispatch();
    //const item = useSelector(selectCartItemById(id))
    
    // if(!item) {
    //     return <Typography>Item Not Found</Typography>
    // }
    
    const handleSetItemQuantity = (event) => {
        dispatch(setItemQuantity({id: item.id,newQuantity,name: item.name,price: item.price }))
    };
    const handleDecrementQuantity = () => {
        dispatch(decrementQuantity({id: item.id}))
    };
    const handleIncrementQuantity = () => {
        dispatch(incrementQuantity({id: item.id}))
    };
    
    return(

      <Box  sx={{ display: 'flex', alignItems: 'center', mb: 2, borderBottom: '1px solid #eee', pb: 1}}>
            <Box  sx={{ flexGrow: 1 }}>
                <Typography variant="body1">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                </Typography>

            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton size="small" onClick={handleDecrementQuantity}>
                            <RemoveIcon />
                    </IconButton>
            </Box>
            <TextField
            value={item.quantity}
            onChange={handleSetItemQuantity}
            type="number"
            slotProps={{ min: "0", style: { textAlign: 'center', width: '40px' } }}
            size="small"
            variant="outlined"
            sx={{ mx: 1 }}
            />
            <IconButton size="small" onclick={handleIncrementQuantity}>
                <AddIcon />
            </IconButton>
        </Box>
        // <IconButton size="small" onClick={decrementQuantity}>
        //     <RemoveIcon />
        // </IconButton>
    )




        
    
    
}