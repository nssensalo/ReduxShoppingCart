import { createSelector } from '@reduxjs/toolkit';

export const selectCartItems =(state)=>state.cart.items // Input Selector: Gets the 'items' array from the cart state
export const selectTotalPrice = (state) => state.cart.totalPrice // Input Selector: Gets the 'totalPrice' from the cart state
export const selectTotalCartQuantity = createSelector(
    [selectCartItems],
    
    (items) => items.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0)
);
    //        ^------ 'items' here is the output of selectCartItems
    //                                  ^----------- 'totalQuantity' comes from the .reduce() method
    //     Flow of reduce for selectTotalCartQuantity:

    // Start: totalQuantity is 0.
    // Item 1: totalQuantity = 0 + item1.quantity
    // Item 2: totalQuantity = (previous total) + item2.quantity
    // ... and so on ...
    // End: After iterating through all items, reduce returns the final totalQuantity.
    // So, totalQuantity is a temporary variable that reduce uses to build up the final sum, starting from the initial value of 0.
export const selectCartItemById = (id) => createSelector(
    [selectCartItems],
    (items) => items.find(item => item.id ===id)
);

