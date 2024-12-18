import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add(state, action) {
            const newItem = { ...action.payload, quantity: 1 }; 
            state.push(newItem);
        },
        remove(state, action) {
            return state.filter(items => items.id !== action.payload);
        },
        increment(state, action) {
            const item = state.find((card) => card.id === action.payload);
            if (item) {
                item.quantity = item.quantity || 0; 
                item.quantity += 1;
            }
        },
        decrement(state, action) {
            const item = state.find((card) => card.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
    },
});

export const { add, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
