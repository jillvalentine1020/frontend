import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    page: ""
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    updatePage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, updatePage } = counterSlice.actions

export default counterSlice.reducer