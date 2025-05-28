import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state, action) => {
            const { id, name, price, quantity} = action.payload; //properties on items[] objects
            const existingItem = state.items.find(item => item.id === id); 
            //iterated over existing items object for one who's id matches 
            //state.items is my current array of items in the cart and their payload properties
            
            if(existingItem) { //if item already exist in cart
                existingItem.quantity += quantity
            } else {
                state.items.push({id,name, price, quantity})
            }
            state.totalPrice = state.items.reduce((total,item)=>total + item.price * state.quantity,0)
        },
        removeFromCart: (state) => {
           state.items =  state.items.filter(item => item !== id)
            state.totalPrice = state.items.reduce((total,item)=>total + item.price * item.quantity,0)
        },

        decrementQuantity: (state, action) => {
           const {id} = action.payload
           const existingItem = state.items.find(item => item.id === id )
           
           if (existingItem) {
                if (existingItem.quantity > 1 ) {
                    existingItem.quantity -= 1
                }
           } else {
            state.items = state.items.filter(item => item.id !== item)
           }
           
          state.totalPrice = state.items.reduce((total, item)=>total + item.price * item.quantity,0)
        }
    }
        

});
 export const { addToCart,removeFromCart,decrementQuantity} = createSlice.actions;
 export default cartSlice.reducers;



    

