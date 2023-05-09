import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Items: [],
}


export const counterSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    AddItem: (state,action) => {

      
    },

    DeleteItem: (state,action) => {
     
    
    },

    
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer