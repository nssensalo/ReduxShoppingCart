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
           
           if (existingItem) { //defensive against race conditions
                if (existingItem.quantity > 1 ) {
                    existingItem.quantity -= 1
                }
           } else { //else if would be wrong and always false ,1 vs 0
            state.items = state.items.filter(item => item.id !== item)
           }
           state.totalPrice = state.items.reduce((total, item)=>total + item.price * item.quantity,0)
        },
        incrementQuantity: ( state, action) => {
            const {id} = action.payload //quantity is accessed through the state itself
            const existingItem = state.items.find(item => item.id === id)

            if(existingItem) {
               existingItem.quantity += 1
            }
            state.totalPrice = state.items.reduce((total, item)=>total + item.price * item.quantity,0)
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0 //dont need to deal with zeroing out quantity on cleared cart
        },
        setItemQuantity: (state, action) => {
            const {id,newQuantity,name,price} = action.payload//newQuantity is not an object,just data
            const existingItem = state.items.find(item=> item.id ===id)
            if (existingItem) {
                if(newQuantity > 0) {
                    existingItem.quantity = newQuantity
                } else if (newQuantity) { //its 0, null, undefined
                    state.items = state.items.filter(item => item.id !== id)
                }
            } else if (!existingItem && newQuantity) {
                state.items.push({id, name, price, newQuantity})
            }
            state.totalPrice = state.items.reduce((total, item)=>total + item.price * item.quantity,0)
            // Ensure newQuantity is treated as a valid non-negative number.
            // This handles cases where user input might be non-numeric or negative.
            //const parsedNewQuantity = Math.max(0, Number(newQuantity) || 0);
        }
    },
    
        

});
 export const { addToCart,removeFromCart,decrementQuantity} = createSlice.actions;
 export default cartSlice.reducers;



    

