import { createSlice } from '@reduxjs/toolkit';

const initValue = {
  totalitems: 0,
  shoppingList: [],
  categoryCount: [0, 0, 0, 0, 0],
 }

const itemsSlice = createSlice({
  name: 'items',
  initialState: initValue,

  reducers: {
    addItem: (state, action) => {
      const { name, category } = action.payload;
      const existingItem = state.shoppingList.find(
        (item) => item.name === name
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.shoppingList.push({ name, category, quantity: 1 });
      }
      state.totalitems += 1;
      state.categoryCount[parseInt(category) - 1] += 1;
      }
  },
});

export const { addItem} = itemsSlice.actions;
export default itemsSlice.reducer;

